import { motion } from 'framer-motion';

export default function SectionHeading({ title, tag }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className='text-center'
    >
      <span className='font-mono text-sm text-muted-foreground block mb-2'>
        <span className='text-primary'>$</span> {tag}
      </span>
      <h2 className='font-display text-2xl sm:text-3xl text-primary text-glow-sm tracking-wider'>
        {title}
      </h2>
      <div className='neon-line max-w-[60px] mx-auto mt-3' />
    </motion.div>
  );
}
