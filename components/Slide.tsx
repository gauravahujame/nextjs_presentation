'use client';

    import * as React from 'react';
    import { cn } from '@/lib/utils';

    interface SlideProps {
      children: React.ReactNode;
      className?: string;
      isActive: boolean;
      transition?: 'slide-left' | 'slide-right' | 'fade'; // Define transition types
      direction?: 'forward' | 'backward'; // Direction for slide transitions
      background?: string; // Add background prop
    }

    export function Slide({
      children,
      className,
      isActive,
      transition = 'slide-left', // Default transition
      direction = 'forward', // Default direction
      background, // Destructure background prop
    }: SlideProps) {
      const transitionClasses = React.useMemo(() => {
        if (!isActive) return 'opacity-0 pointer-events-none absolute inset-0'; // Hide inactive slides

        switch (transition) {
          case 'slide-left':
            return direction === 'forward'
              ? 'animate-slide-in-right'
              : 'animate-slide-in-left';
          case 'slide-right':
             return direction === 'forward'
              ? 'animate-slide-in-left'
              : 'animate-slide-in-right';
          case 'fade':
            return 'animate-fade-in';
          default:
            return '';
        }
      }, [isActive, transition, direction]);

      // Determine background style
      const backgroundStyle = React.useMemo(() => {
        if (background === 'animated-gradient') {
          // Apply a class for the animated background defined in global CSS
          return { className: 'animated-gradient-background' };
        } else if (background) {
          // Apply direct style for color or gradient
          if (background.startsWith('linear-gradient') || background.startsWith('radial-gradient')) {
             return { style: { backgroundImage: background } };
          } else {
             return { style: { backgroundColor: background } };
          }
        }
        // Default background is handled by global CSS .slide-container
        return {};
      }, [background]);


      return (
        <div
          className={cn(
            'slide-container', // Full screen container
            'transition-all duration-700 ease-out', // Base transition properties
            isActive ? 'z-10' : 'z-0', // Active slide on top
            transitionClasses, // Apply specific transition animation
            backgroundStyle.className, // Apply animated background class if present
            className
          )}
          style={{
             // Ensure inactive slides are completely hidden and don't interfere
            visibility: isActive ? 'visible' : 'hidden',
            position: 'absolute', // Position slides absolutely to stack them
            top: 0,
            left: 0,
            ...backgroundStyle.style, // Apply direct background style if present
          }}
        >
          {children}
        </div>
      );
    }
