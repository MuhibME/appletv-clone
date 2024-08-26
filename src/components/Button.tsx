import React from 'react';
import { twMerge } from 'tailwind-merge';


type Props={
    children: React.ReactNode;
    className?: string; 
    size?: 'sm' | 'md' | 'lg';
}

const Button = ({children, className, size = 'md'}: Props) => {
  const sizedClassName = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-5 py-3',
    lg: 'text-base px-8 py-4',
  }
    return (
    <button className={twMerge('bg-white text-textBlack rounded-full', sizedClassName[size] , className)}>{children}</button>
    
)
}

export default Button;