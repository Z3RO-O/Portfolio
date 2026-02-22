import { motion, AnimatePresence } from 'framer-motion';
import { introdata, meta } from '@/content_option';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHead from '@/components/common/PageHead';
import { Button } from '@/components/ui/button';
import { Code2, User, Mail } from 'lucide-react';

const ROTATING_TEXTS = [
  introdata.animated.first,
  introdata.animated.second,
  introdata.animated.third,
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % ROTATING_TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PageHead
        title={`${meta.title} | Portfolio`}
        description={meta.description}
      />
      <section
        id='home'
        className='home flex-1 relative w-full transition-all duration-500 ease-in'
      >
        <div className='min-h-screen flex flex-col lg:flex-row lg:items-center lg:min-h-[calc(100vh-60px)]'>
          {/* Hero content - responsive order: content first on mobile */}
          <div className='w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12 lg:py-0'>
            <div className='max-w-xl mx-auto lg:mx-0'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='mb-2 text-2xl sm:text-3xl font-bold text-foreground'
              >
                {introdata.title}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold min-h-[3rem] sm:min-h-[4rem]'
              >
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='block text-foreground'
                  >
                    {ROTATING_TEXTS[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='mb-2 text-muted-foreground'
              >
                {introdata.description[0]}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='mb-8 text-muted-foreground'
              >
                {introdata.description[1]}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='flex flex-wrap gap-3 sm:gap-4'
              >
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='border-2'
                >
                  <Link to='/projects' className='gap-2'>
                    <Code2 className='size-4' />
                    My Projects
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='border-2'
                >
                  <Link to='/about' className='gap-2'>
                    <User className='size-4' />
                    About
                  </Link>
                </Button>
                <Button asChild size='lg' className='gap-2'>
                  <Link to='/contact'>
                    <Mail className='size-4' />
                    Contact Me
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Hero visual - gradient/placeholder instead of 3D mask */}
          <div className='w-full lg:w-1/2 order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[calc(100vh-60px)] flex items-center justify-center px-4 py-8 lg:py-0'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/5 via-muted to-background border border-border flex items-center justify-center shadow-lg'
            >
              <div className='text-center p-8'>
                <div className='text-6xl sm:text-8xl mb-4 opacity-60'>👋</div>
                <p className='text-sm text-muted-foreground font-medium'>
                  Welcome to my portfolio
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
