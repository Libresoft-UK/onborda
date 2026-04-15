import React from "react";
import { OnbordaContextType, OnbordaProviderProps } from "./types/index.js";
declare const useOnborda: () => OnbordaContextType;
declare const OnbordaProvider: React.FC<OnbordaProviderProps>;
export { OnbordaProvider, useOnborda };
