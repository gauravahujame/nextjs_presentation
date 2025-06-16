'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TerminalViewProps {
  url: string;
  onClose: () => void;
  isVisible: boolean;
  className?: string;
}

export function TerminalView({ 
  url, 
  onClose, 
  isVisible, 
  className 
}: TerminalViewProps) {
  // Handle escape key to close the terminal view
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isVisible && event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose]);

  // Only render if visible to improve performance
  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={cn(
        'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4',
        'animate-in fade-in duration-300',
        className
      )}
      aria-modal="true"
      role="dialog"
      aria-label="Live Terminal Session"
    >
      <div 
        className="relative w-full max-w-4xl h-[60vh] bg-background rounded-lg shadow-lg flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling to the backdrop
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-primary">💻</span> Live Terminal Session
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            aria-label="Close terminal"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Terminal iframe */}
        <div className="flex-1 bg-black overflow-hidden">
          <iframe
            src={url}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
            title="Terminal Session"
            aria-label="Live terminal session content"
          />
        </div>
        
        {/* Optional footer with info */}
        <div className="p-2 text-xs text-muted-foreground border-t bg-muted">
          <p>Terminal session powered by tty-share. Press ESC or click the X button to close.</p>
        </div>
      </div>
    </div>
  );
}
