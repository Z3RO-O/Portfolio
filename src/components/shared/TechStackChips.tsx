import type { CSSProperties } from 'react';
import { resolveTech } from '@/data/content.tsx';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type TechStackChipsProps = {
  tech: string[];
};

export default function TechStackChips({ tech }: TechStackChipsProps) {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      {tech.map(t => {
        const resolved = resolveTech(t);
        if (!resolved) {
          return (
            <span
              key={t}
              className='font-body text-xs text-muted-foreground'
              title={t}
            >
              {t}
            </span>
          );
        }

        return (
          <Tooltip key={t}>
            <TooltipTrigger asChild>
              <span
                tabIndex={0}
                className='inline-flex cursor-default border-0 bg-transparent p-0 outline-none transition-[filter,transform] duration-300 ease-out hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&:hover]:filter-[drop-shadow(0_0_14px_var(--tech-glow))]'
                style={
                  {
                    '--tech-glow': resolved.color,
                  } as CSSProperties
                }
                aria-label={resolved.name}
              >
                <span
                  className='inline-flex [&>svg]:block [&>svg]:h-5 [&>svg]:w-5'
                  style={{ color: resolved.color }}
                >
                  {resolved.icon}
                </span>
              </span>
            </TooltipTrigger>
            <TooltipContent side='top'>
              <p>{resolved.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
