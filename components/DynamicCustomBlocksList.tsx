'use client';

import CustomBlockRenderer, { CustomBlockContent } from './CustomBlockRenderer';
import { useSiteData } from '@/components/SiteDataProvider';

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
  const { persisted } = useSiteData();

  const blocksKey = page === 'home' ? 'homeBlocks' : page === 'work' ? 'workBlocks' : 'expBlocks';
  const rawBlocks = persisted?.[blocksKey] as DynamicBlock[] | undefined;

  const customBlocks =
    rawBlocks && Array.isArray(rawBlocks)
      ? rawBlocks.filter((b) => b.isCustom && b.visible !== false && b.customContent)
      : [];

  if (customBlocks.length === 0) {
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
