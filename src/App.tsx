import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/routes';
import Header from '@/components/common/Header';
import AnimatedCursor from '@/hooks/AnimatedCursor';
import { ThemeProvider } from '@/contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.PUBLIC_URL}>
        <div className='cursor__dot'>
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            useThemeColors
            outerAlpha={0.7}
            innerScale={0.8}
            outerScale={3}
          />
        </div>
        <Header />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
