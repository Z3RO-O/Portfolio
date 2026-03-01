import { motion, AnimatePresence } from 'framer-motion';
import { introdata, meta } from '@/content_option';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHead from '@/components/common/PageHead';
import { Button } from '@/components/ui/button';
import { Code2, User, Mail } from 'lucide-react';
import { joker } from '@/assets/assets';
import DecryptedText from '@/components/specific/DecryptedText';

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
        className='home flex-1 relative w-full h-[calc(100vh-var(--header-height))] overflow-hidden transition-all duration-500 ease-in'
      >
        <div className='h-full flex flex-col lg:flex-row lg:items-center lg:gap-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16'>
          <div className='w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center py-6 sm:py-8 lg:py-0'>
            <div className='max-w-xl mx-auto lg:mx-0'>
              <div className='mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground'>
                <DecryptedText
                  text={introdata.title}
                  animateOn='view'
                  revealDirection='start'
                  sequential
                  useOriginalCharsOnly={false}
                />
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 font-bold min-h-10 sm:min-h-12 lg:min-h-16'
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
                className='mb-4 sm:mb-6 lg:mb-8 text-muted-foreground'
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
          <div className='w-full lg:w-1/2 order-1 lg:order-2 min-h-[200px] sm:min-h-[280px] lg:min-h-0 lg:flex-1 flex items-center justify-center py-6 lg:py-0'>
            <div className='w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square'>
              <div className='w-full h-full rounded-full overflow-hidden border-4 border-border shadow-lg'>
                <img
                  src={joker}
                  alt='profile'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
