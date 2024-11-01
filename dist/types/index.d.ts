import { Transition } from "framer-motion";
export interface OnbordaContextType {
    currentStep: number;
    currentTour: string | null;
    setCurrentStep: (step: number, delay?: number) => void;
    closeOnborda: () => void;
    startOnborda: (tourName: string) => void;
    isOnbordaVisible: boolean;
}
export interface Step {
    icon: React.ReactNode | string | null;
    title: string;
    content: React.ReactNode;
    selector: string;
    side?: "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-top" | "left-bottom" | "right-top" | "right-bottom";
    showControls?: boolean;
    pointerPadding?: number;
    pointerRadius?: number;
    interactable?: boolean;
    nextRoute?: string;
    prevRoute?: string;
}
export interface Tour {
    tour: string;
    steps: Step[];
}
export interface OnbordaProps {
    children: React.ReactNode;
    steps: Tour[];
    showOnborda?: boolean;
    shadowRgb?: string;
    shadowOpacity?: string;
    cardTransition?: Transition;
    cardComponent?: React.ComponentType<CardComponentProps>;
    tourComponent?: React.ComponentType<TourComponentProps>;
}
export interface CardComponentProps {
    step: Step;
    currentStep: number;
    totalSteps: number;
    nextStep: () => void;
    prevStep: () => void;
    arrow: JSX.Element;
}
export interface TourComponentProps {
    currentTour: string | null;
    currentStep: number;
    steps: Step[];
}
