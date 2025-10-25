import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import withRouter from '@/hooks/withRouter';
import AppRoutes from '@/routes';
import Header from '@/components/common/Header';
import AnimatedCursor from '@/hooks/AnimatedCursor';

interface ScrollToTopProps {
  children?: React.ReactNode;
}

const _ScrollToTop = ({ children }: ScrollToTopProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
};

const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
  return (
    <Router basename={import.meta.env.PUBLIC_URL}>
      <div className='cursor__dot'>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color='255, 255, 255'
          outerAlpha={0.7}
          innerScale={0.8}
          outerScale={3}
        />
      </div>
      <ScrollToTop>
        <Header />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
};

export default App;
