import { Toaster } from '@/components/ui/sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import CustomCursor from '@/components/shared/CustomCursor';

const App = () => (
  <BrowserRouter>
    <CustomCursor />
    <Routes>
      <Route path='/' element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Toaster richColors theme='dark' />
  </BrowserRouter>
);

export default App;
