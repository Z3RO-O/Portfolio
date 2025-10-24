import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  type CSSProperties,
} from 'react';

const IsDevice = (() => {
  if (typeof navigator === 'undefined')
    return {
      info: '',
      Android: () => null,
      BlackBerry: () => null,
      IEMobile: () => null,
      iOS: () => null,
      iPad: () => false,
      OperaMini: () => null,
      any: () => false,
    };

  const ua = navigator.userAgent;

  return {
    info: ua,

    Android() {
      return ua.match(/Android/i);
    },
    BlackBerry() {
      return ua.match(/BlackBerry/i);
    },
    IEMobile() {
      return ua.match(/IEMobile/i);
    },
    iOS() {
      return ua.match(/iPhone|iPad|iPod/i);
    },
    iPad() {
      return (
        ua.match(/Mac/) !== null &&
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2
      );
    },
    OperaMini() {
      return ua.match(/Opera Mini/i);
    },

    any() {
      return (
        this.Android() ||
        this.BlackBerry() ||
        this.iOS() ||
        this.iPad() ||
        this.OperaMini() ||
        this.IEMobile()
      );
    },
  };
})();

const useEventListener = (
  eventName: string,
  handler: (event: Event) => void,
  element: Document | HTMLElement = document
) => {
  const savedHandler = useRef<(event: Event) => void>(() => {});

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current?.(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

interface CursorCoreProps {
  outerStyle?: CSSProperties;
  innerStyle?: CSSProperties;
  color?: string;
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
  trailingSpeed?: number;
  clickables?: string[];
}

interface Coords {
  x: number;
  y: number;
}

const CursorCore = ({
  outerStyle,
  innerStyle,
  color = '220, 90, 90',
  outerAlpha = 0.3,
  innerSize = 8,
  outerSize = 8,
  outerScale = 6,
  innerScale = 0.6,
  trailingSpeed = 8,
  clickables = [
    'a',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    'label[for]',
    'select',
    'textarea',
    'button',
    '.link',
  ],
}: CursorCoreProps) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveClickable, setIsActiveClickable] = useState<boolean>(false);
  const endX = useRef<number>(0);
  const endY = useRef<number>(0);

  const onMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / trailingSpeed;
        coords.y += (endY.current - coords.y) / trailingSpeed;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [coords, trailingSpeed]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener(
    'mousemove',
    onMouseMove as unknown as (event: Event) => void
  );
  useEventListener(
    'mousedown',
    onMouseDown as unknown as (event: Event) => void
  );
  useEventListener('mouseup', onMouseUp as unknown as (event: Event) => void);
  useEventListener(
    'mouseover',
    onMouseEnterViewport as unknown as (event: Event) => void
  );
  useEventListener(
    'mouseout',
    onMouseLeaveViewport as unknown as (event: Event) => void
  );

  useEffect(() => {
    if (isActive) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${innerScale})`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${outerScale})`;
      }
    } else {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform =
          'translate(-50%, -50%) scale(1)';
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform =
          'translate(-50%, -50%) scale(1)';
      }
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${innerScale * 1.2})`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${outerScale * 1.4})`;
      }
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.opacity = isVisible ? '1' : '0';
    }
    if (cursorOuterRef.current) {
      cursorOuterRef.current.style.opacity = isVisible ? '1' : '0';
    }
  }, [isVisible]);

  useEffect(() => {
    const clickableEls = document.querySelectorAll(clickables.join(','));

    const handleMouseOver = () => setIsActive(true);
    const handleClick = () => {
      setIsActive(true);
      setIsActiveClickable(false);
    };
    const handleMouseDown = () => setIsActiveClickable(true);
    const handleMouseUp = () => setIsActive(true);
    const handleMouseOut = () => {
      setIsActive(false);
      setIsActiveClickable(false);
    };

    clickableEls.forEach(el => {
      const element = el as HTMLElement;
      element.style.cursor = 'none';

      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('click', handleClick);
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mouseup', handleMouseUp);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      clickableEls.forEach(el => {
        const element = el as HTMLElement;
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('click', handleClick);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseup', handleMouseUp);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [isActive, clickables]);

  const styles = {
    cursorInner: {
      zIndex: 999,
      display: 'block',
      position: 'fixed' as const,
      borderRadius: '50%',
      width: innerSize,
      height: innerSize,
      pointerEvents: 'none' as const,
      backgroundColor: `rgba(${color}, 1)`,
      ...(innerStyle && innerStyle),
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
    },
    cursorOuter: {
      zIndex: 999,
      display: 'block',
      position: 'fixed' as const,
      borderRadius: '50%',
      pointerEvents: 'none' as const,
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
      willChange: 'transform' as const,
      ...(outerStyle && outerStyle),
    },
  };

  document.body.style.cursor = 'none';

  return (
    <React.Fragment>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </React.Fragment>
  );
};

interface AnimatedCursorProps extends CursorCoreProps {}

const AnimatedCursor = (props: AnimatedCursorProps) => {
  if (typeof navigator !== 'undefined' && IsDevice?.any()) {
    return <React.Fragment></React.Fragment>;
  }
  return <CursorCore {...props} />;
};

export default AnimatedCursor;
