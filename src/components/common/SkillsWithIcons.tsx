import React from 'react';
import type { SkillCategory } from '@/types/content.types';

interface SkillsWithIconsProps {
  skills: SkillCategory[];
}

export const SkillsWithIcons = ({ skills }: SkillsWithIconsProps) => {
  return (
    <div className='w-full py-4'>
      {skills.map((category, catIndex) => (
        <div key={catIndex} className='mb-8'>
          <h4 className='text-2xl font-semibold text-(--text-color) mb-4 pb-2'>
            {category.category}
          </h4>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 py-4 md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:gap-4 sm:grid-cols-[repeat(auto-fit,minmax(80px,1fr))] sm:gap-3'>
            {category.items.map((skill, index) => (
              <div
                key={index}
                className='group flex flex-col items-center p-6 md:p-4 sm:p-3 sm:px-1 bg-(--bg-color) border-2 border-transparent rounded-[15px] transition-all duration-300 cursor-pointer relative overflow-hidden opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease_forwards] hover:-translate-y-2 hover:border-(--skill-color) hover:shadow-[0_10px_30px_rgba(0,0,0,0.1),0_0_0_1px_var(--skill-color)] before:content-[""] before:absolute before:inset-0 before:bg-linear-to-br before:from-(--skill-color) before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 dark:bg-[rgba(255,255,255,0.05)] dark:hover:bg-[rgba(255,255,255,0.08)]'
                style={
                  {
                    '--skill-color': skill.color,
                    animationDelay: `${(index + 1) * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <div
                  className='text-5xl md:text-[2.5rem] sm:text-[2rem] mb-3 md:mb-2 transition-all duration-300 relative z-1 group-hover:scale-110 group-hover:drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)]'
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className='text-sm md:text-[0.8rem] sm:text-xs font-semibold text-(--text-color) text-center leading-[1.2] relative z-1'>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
