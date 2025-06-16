import * as React from 'react';
import { cn } from '@/lib/utils';

interface DemoSlideProps {
  title?: string;
  demoUrl: string;
  className?: string;
}

export function DemoSlide({ title, demoUrl, className }: DemoSlideProps) {
  return (
    <div className={cn('slide-container bg-deep-navy text-white py-16 px-6 md:px-24 text-center', className)}>
      <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-electric-blue shadow-card aspect-video">
        <iframe src={demoUrl} className="w-full h-full" allowFullScreen></iframe>
      </div>
      {title && <h2 className="text-3xl md:text-4xl font-bold text-electric-blue mt-8">{title}</h2>}
    </div>
  );
}
