import { HTMLProps } from "react";

export interface ButtonProps {
  bgColor?: 'default' | 'add' | 'edit' | 'remove'
}


export interface IButton extends HTMLProps<HTMLElement>, ButtonProps {
  children: React.ReactNode
}
