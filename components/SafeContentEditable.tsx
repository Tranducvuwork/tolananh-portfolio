'use client';

import React, { useEffect, useRef } from 'react';

interface SafeContentEditableProps {
  as?: keyof React.JSX.IntrinsicElements;
  value: string;
  onChange: (nextValue: string) => void;
  editable?: boolean;
  multiline?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Crash-proof contentEditable wrapper for React 19 / Next.js 15.
 * Renders zero React child nodes so browser DOM mutations (Enter -> <div>/<br>,
 * Backspace deleting text nodes, or Vietnamese Telex/VNI IME composition)
 * never trigger React's `NotFoundError: Failed to execute 'removeChild' on 'Node'`
 * when blurring or clicking Save.
 */
export default function SafeContentEditable({
  as: Tag = 'div',
  value,
  onChange,
  editable = true,
  multiline = false,
  prefix = '',
  suffix = '',
  className = '',
}: SafeContentEditableProps) {
  const ref = useRef<HTMLElement | null>(null);
  const composingRef = useRef(false);
  const displayValue = `${prefix}${value ?? ''}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (document.activeElement === el || composingRef.current) return;
    const current = multiline ? el.innerText : el.textContent || '';
    if (current !== displayValue) {
      if (multiline) {
        el.innerText = displayValue;
      } else {
        el.textContent = displayValue;
      }
    }
  }, [displayValue, multiline]);

  const commitValue = (el: HTMLElement) => {
    let raw = multiline ? el.innerText : el.textContent || '';
    if (prefix && raw.startsWith(prefix)) {
      raw = raw.slice(prefix.length);
    }
    if (suffix && raw.endsWith(suffix)) {
      raw = raw.slice(0, raw.length - suffix.length);
    }
    onChange(raw);
  };

  const Component = Tag as any;

  if (!editable) {
    return <Component className={className}>{displayValue}</Component>;
  }

  return (
    <Component
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className={className}
      onCompositionStart={() => {
        composingRef.current = true;
      }}
      onCompositionEnd={(e: React.CompositionEvent<HTMLElement>) => {
        composingRef.current = false;
        commitValue(e.currentTarget);
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
        if (!multiline && e.key === 'Enter') {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        composingRef.current = false;
        commitValue(e.currentTarget);
      }}
    />
  );
}
