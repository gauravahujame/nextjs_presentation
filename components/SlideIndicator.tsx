'use client';

    import * as React from 'react';
    import { cn } from '@/lib/utils';

    interface SlideIndicatorProps {
      currentSlide: number;
      totalSlides: number;
      onSlideChange: (index: number) => void;
    }

    export function SlideIndicator({
      currentSlide,
      totalSlides,
      onSlideChange,
    }: SlideIndicatorProps) {
      return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-2 bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-3 h-3 rounded-full transition-colors',
                index === currentSlide
                  ? 'bg-primary'
                  : 'bg-muted-foreground hover:bg-foreground'
              )}
              onClick={() => onSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
      );
    }
