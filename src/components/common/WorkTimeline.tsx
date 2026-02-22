import type { WorkExperience } from '@/types/content.types';
import { Briefcase } from 'lucide-react';

interface WorkTimelineProps {
  items: WorkExperience[];
}

export const WorkTimeline = ({ items }: WorkTimelineProps) => {
  return (
    <div className='relative'>
      {/* Vertical line - runs through center of nodes */}
      <div
        className='absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-px bg-border'
        aria-hidden
      />

      <div className='space-y-4'>
        {items.map((item, i) => (
          <div key={i} className='relative flex gap-4 sm:gap-6 pl-10 sm:pl-12'>
            {/* Node */}
            <div className='absolute left-0 top-4 flex size-6 sm:size-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background ring-4 ring-background'>
              <Briefcase className='size-3 sm:size-4 text-primary' />
            </div>

            {/* Content card */}
            <div className='flex-1 min-w-0 rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md'>
              <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between'>
                <h4 className='font-semibold text-foreground'>{item.jobtitle}</h4>
                <span className='text-sm font-medium text-muted-foreground shrink-0'>
                  {item.date}
                </span>
              </div>
              <p className='mt-1 text-sm text-muted-foreground'>{item.where}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
