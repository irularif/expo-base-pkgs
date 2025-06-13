import { IFormContext } from '../types/form';
import { createContext } from 'react';

export const FormContext = createContext<IFormContext | null>(null);
export const FormControlContext = createContext<string | undefined>(undefined);
