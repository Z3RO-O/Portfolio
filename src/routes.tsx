import { Route, Routes, type Location } from 'react-router-dom';
import withRouter from '@/hooks/withRouter';
import { Home } from '@/components/pages/home';
import { Projects } from '@/components/pages/projects';
import { ContactUs } from '@/components/pages/contact';
import { About } from '@/components/pages/about';
import { SocialIcons } from '@/components/common/SocialIcons';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4,
};

interface AnimatedRoutesProps {
  location: Location;
}

const AnimatedRoutes = withRouter(({ location }: AnimatedRoutesProps) => (
  <AnimatePresence mode='wait'>
    <motion.div
      key={location.pathname}
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </motion.div>
  </AnimatePresence>
));

const AppRoutes = () => {
  return (
    <div className='max-[991px]:pt-10'>
      <AnimatedRoutes />
      <SocialIcons />
    </div>
  );
};

export default AppRoutes;
