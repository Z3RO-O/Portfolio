import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateEnabled = () => setEnabled(media.matches);

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    updateEnabled();
    media.addEventListener('change', updateEnabled);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseout', handleLeave);

    return () => {
      media.removeEventListener('change', updateEnabled);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseout', handleLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden='true'
        className='custom-cursor pointer-events-none fixed left-0 top-0 z-100 -translate-x-1/2 -translate-y-1/2'
        style={{ x, y, opacity: visible ? 1 : 0 }}
      >
        <div className='cursor-dot' />
      </motion.div>

      <motion.div
        aria-hidden='true'
        className='custom-cursor pointer-events-none fixed left-0 top-0 z-99 -translate-x-1/2 -translate-y-1/2'
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <div className='cursor-ring' />
      </motion.div>
    </>
  );
}
