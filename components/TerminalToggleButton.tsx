'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface TerminalToggleButtonProps {
  onClick: () => void;
  isActive: boolean;
  className?: string;
}

export function TerminalToggleButton({ 
  onClick, 
  isActive, 
  className 
}: TerminalToggleButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              'rounded-full h-10 w-10 flex items-center justify-center transition-colors',
              isActive ? 'bg-secondary text-secondary-foreground border-2 border-primary' : 'bg-background',
              className
            )}
            onClick={onClick}
            aria-label="Toggle Terminal"
            aria-pressed={isActive}
          >
            <Terminal className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isActive ? 'Hide Terminal' : 'Show Terminal'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
