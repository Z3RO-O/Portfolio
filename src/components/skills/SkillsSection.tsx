import { motion } from 'framer-motion';
import { skills } from '@/data/content.tsx';
import SectionHeading from '@/components/shared/SectionHeading';
import SkillsGlobe from '@/three/SkillsGlobe';

const categories = [
  { key: 'frontend' as const, label: 'Frontend', color: 'text-primary' },
  { key: 'backend' as const, label: 'Backend', color: 'text-neon-blue' },
  { key: 'tools' as const, label: 'Tools', color: 'text-neon-cyan' },
  { key: 'os' as const, label: 'Operating Systems', color: 'text-foreground' },
];

export default function SkillsSection() {
  return (
    <section id='skills' className='relative py-24'>
      <div className='container mx-auto max-w-6xl px-4'>
        <SectionHeading title='Skills' tag='cat skills.globe' />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className='mt-12 glass-panel overflow-hidden rounded-2xl p-3 sm:p-4'
        >
          <div className='mb-4 flex items-center justify-between gap-3 border-b border-border/60 px-3 pb-3'>
            <p className='font-body text-xl text-foreground/80'>
              Drag to rotate the stack constellation.
            </p>
          </div>
          <SkillsGlobe skillsByCategory={skills} />
        </motion.div>
      </div>
    </section>
  );
}
