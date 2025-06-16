import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TextWithImageProps {
  title?: string;
  text: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

export function TextWithImage({
  title,
  text,
  imageUrl,
  imageAlt,
  imagePosition = 'right',
  className,
}: TextWithImageProps) {
  return (
    <div className={cn('slide-container bg-deep-navy text-white py-16 px-6 md:px-24', className)}>
      <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full h-full max-w-6xl mx-auto', {
        'md:grid-flow-col-dense': imagePosition === 'left', // Use dense flow for left image
      })}>
        {/* Image Column */}
        <div className={cn('relative w-full h-full min-h-[300px] md:min-h-[400px]', {
           'md:order-last': imagePosition === 'right', // Order image last on medium screens if position is right
        })}>
           <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover' }} // Use cover for better image filling
            className="rounded-2xl shadow-card transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Column */}
        <div className="flex flex-col justify-center">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-electric-blue mb-6 text-left">{title}</h2>}
          <div className="text-lg leading-relaxed space-y-4 text-left">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
