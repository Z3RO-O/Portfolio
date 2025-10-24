import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "@/hooks/withRouter";
import AppRoutes from "@/routes";
import Headermain from "@/header";
import AnimatedCursor from "@/hooks/AnimatedCursor";
import "./App.css";

interface ScrollToTopProps {
  children?: React.ReactNode;
}

function _ScrollToTop({ children }: ScrollToTopProps): JSX.Element {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
}

const ScrollToTop = withRouter(_ScrollToTop);

export default function App(): JSX.Element {
  return (
    <Router basename={import.meta.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255, 255"
          outerAlpha={0.7}
          innerScale={0.8}
          outerScale={3}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
