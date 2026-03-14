import React from 'react';
import logoImg from '@/assets/logo.png';

export const Logo = ({ className = "", iconSize = "w-10 h-10", textSize = "text-lg" }: { className?: string, iconSize?: string, textSize?: string }) => (
  <div className={`flex items-center gap-2 group ${className}`}>
    <img
      src={logoImg}
      alt="Adventure Media logo"
      className={`${iconSize} object-contain`}
    />
  </div>
);
