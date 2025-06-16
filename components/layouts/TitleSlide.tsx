import * as React from 'react';
import { cn } from '@/lib/utils';
import Hero from '../Hero';

interface TitleSlideProps {
  title: string;
  subtitle?: React.ReactNode; // Allow ReactNode for subtitle
  className?: string;
}

export function TitleSlide({ title, subtitle, className }: TitleSlideProps) {
  return <Hero title={title} subtitle={subtitle} />;
  // return (
  //   <div className={cn('slide-container bg-deep-navy text-white', className)}>
  //     <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-accent-gradient mb-4">
  //       {title}
  //     </h1>
  //     {subtitle && <div className="text-lg md:text-2xl mt-4 text-light-gray max-w-2xl text-center">{subtitle}</div>}
  //   </div>
  // );
}
