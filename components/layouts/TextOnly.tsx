import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextOnlyProps {
  title?: string;
  content: React.ReactNode;
  className?: string;
}

export function TextOnly({ title, content, className }: TextOnlyProps) {
  return (
    <div className={cn('slide-container bg-deep-navy text-white py-16 px-6 md:px-24 justify-start items-start', className)}>
      <div className="max-w-3xl mx-auto w-full"> {/* Center content and limit width */}
        {title && <h2 className="text-3xl md:text-4xl font-bold text-electric-blue mb-6 text-left">{title}</h2>}
        <div className="text-lg leading-relaxed space-y-4 text-left"> {/* Apply text styles */}
          {content}
        </div>
      </div>
    </div>
  );
}
