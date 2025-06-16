import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageOnlyProps {
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  className?: string;
}

export function ImageOnly({ imageUrl, imageAlt, caption, className }: ImageOnlyProps) {
  return (
    <div className={cn('slide-container bg-deep-navy text-white py-16 px-6 md:px-24 text-center', className)}>
      <div className="relative w-full h-full max-w-4xl mx-auto"> {/* Container for image */}
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: 'contain' }} // Use contain to show full image
          className="rounded-xl shadow-card transition-transform duration-300 hover:scale-105"
        />
      </div>
      {caption && <p className="mt-4 text-light-gray text-sm">{caption}</p>}
    </div>
  );
}
