import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'red';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-bold transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-[#8c59e4] text-white hover:bg-[#7a49d6] shadow-[0_4px_14px_0_rgba(140,89,228,0.39)]",
    secondary: "bg-transparent border border-zinc-700 dark:border-zinc-700 text-zinc-800 dark:text-white hover:border-[#8c59e4] hover:bg-[#8c59e4]/5",
    dark: "bg-zinc-800 dark:bg-zinc-900 text-white hover:bg-zinc-700 dark:hover:bg-black shadow-lg",
    red: "bg-[#ef4444] text-white hover:bg-[#dc2626] shadow-[0_4px_14px_0_rgba(239,68,68,0.39)]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};