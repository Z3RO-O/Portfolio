import type { Location } from 'react-router-dom';

export interface WithRouterProps {
  location: Location;
  navigate: (path: string) => void;
  params: Record<string, string>;
}

export interface AnimatedCursorProps {
  innerSize?: number;
  outerSize?: number;
  color?: string;
  outerAlpha?: number;
  innerScale?: number;
  outerScale?: number;
}

export interface MaskProps {
  scale: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
  setIsRotating: (value: boolean) => void;
  setCurrentStage: (stage: number) => void;
}

