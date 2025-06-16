'use client';

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { presentationSlides } from '@/lib/slides';
import { Slide } from '@/components/Slide';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import chevron icons
import { TerminalToggleButton } from '@/components/TerminalToggleButton';
import { TerminalView } from '@/components/TerminalView';

export function Presentation() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  // Default URL, which can be overridden by URL parameters
  const [terminalUrl, setTerminalUrl] = useState('http://localhost:8000/s/local/');
  const totalSlides = presentationSlides.length;
  
  // Check for terminalUrl parameter in the URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlParam = params.get('terminalUrl');
      if (urlParam) {
        setTerminalUrl(urlParam);
      }
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return;
    setDirection(index > currentSlideIndex ? 'forward' : 'backward');
    setCurrentSlideIndex(index);
  }, [currentSlideIndex, totalSlides]);

  const goToNextSlide = useCallback(() => {
    goToSlide(currentSlideIndex + 1);
  }, [currentSlideIndex, goToSlide]);

  const goToPreviousSlide = useCallback(() => {
    goToSlide(currentSlideIndex - 1);
  }, [currentSlideIndex, goToSlide]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        goToPreviousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPreviousSlide]);

  // Optional: Scroll Navigation (can be tricky with full-screen, might need debouncing/throttling)
  // useEffect(() => {
  //   let isScrolling = false;
  //   const handleScroll = (event: WheelEvent) => {
  //     if (isScrolling) return;

  //     isScrolling = true;
  //     if (event.deltaY > 0) {
  //       goToNextSlide();
  //     } else if (event.deltaY < 0) {
  //       goToPreviousSlide();
  //     }

  //     // Prevent rapid scrolling
  //     setTimeout(() => {
  //       isScrolling = false;
  //     }, 700); // Match transition duration
  //   };

  //   window.addEventListener('wheel', handleScroll);
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, [goToNextSlide, goToPreviousSlide]);


  // Terminal visibility toggle handler
  const toggleTerminalVisibility = useCallback(() => {
    setIsTerminalVisible(prev => !prev);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {presentationSlides.map((slide, index) => (
        <Slide
          key={index}
          isActive={index === currentSlideIndex}
          transition={slide.transition}
          direction={direction}
        >
          <slide.component {...slide.props} />
        </Slide>
      ))}

      {/* Terminal View (Conditionally rendered) */}
      <TerminalView
        url={terminalUrl}
        onClose={toggleTerminalVisibility}
        isVisible={isTerminalVisible}
      />

      {/* Navigation Chevrons */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlideIndex === 0}
          className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Top Controls */}
      <div className="fixed top-4 z-50 flex items-center justify-between w-full px-4">
        {/* Terminal Toggle Button (New) */}
        <div>
          <TerminalToggleButton
            onClick={toggleTerminalVisibility}
            isActive={isTerminalVisible}
            className="bg-card/50 backdrop-blur-sm"
          />
        </div>
        
        {/* Theme Toggle (Right-aligned) */}
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
