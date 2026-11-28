'use client';

import { useState, useEffect } from 'react';
import CustomBlockRenderer, { CustomBlockContent } from './CustomBlockRenderer';

interface DynamicBlock {
  id: string;
  title: string;
  visible: boolean;
  order: number;
  isCustom?: boolean;
  customContent?: CustomBlockContent;
}

interface DynamicCustomBlocksListProps {
  page: 'home' | 'work' | 'experience';
}

export default function DynamicCustomBlocksList({ page }: DynamicCustomBlocksListProps) {
  const [customBlocks, setCustomBlocks] = useState<DynamicBlock[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tolananh_site_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        const blocksKey = page === 'home' ? 'homeBlocks' : page === 'work' ? 'workBlocks' : 'expBlocks';
        const blocks: DynamicBlock[] = parsed[blocksKey];
        if (blocks && Array.isArray(blocks)) {
          // Filter to only visible custom blocks that were added by user
          const filtered = blocks.filter((b) => b.isCustom && b.visible !== false && b.customContent);
          setCustomBlocks(filtered);
        }
      }
    } catch (e) {
      // ignore
    }
  }, [page]);

  if (!customBlocks || customBlocks.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-transparent">
      <div className="container space-y-8">
        {customBlocks.map((b) => {
          if (!b.customContent) return null;
          return (
            <div key={b.id} id={b.id} className="w-full">
              <CustomBlockRenderer content={b.customContent} isEditable={false} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
