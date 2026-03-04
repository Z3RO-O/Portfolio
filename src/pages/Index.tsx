import { Suspense, lazy } from 'react';
import Navbar from '@/components/hero/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';
import CustomCursor from '@/components/shared/CustomCursor';

const Scene3D = lazy(() => import('@/three/Scene3D'));

const Index = () => {
  return (
    <div className='relative min-h-screen scanline'>
      <CustomCursor />

      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <Navbar />
      <HeroSection />

      <div className='neon-line' />
      <AboutSection />

      <div className='neon-line' />
      <ExperienceSection />

      <div className='neon-line' />
      <ProjectsSection />

      <div className='neon-line' />
      <SkillsSection />

      <div className='neon-line' />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;
