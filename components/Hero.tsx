// Hero.tsx
import Image from 'next/image';
import HeroImage from '../public/images/hero-image.jpg';

const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <section className="relative overflow-hidden min-h-screen min-w-full flex flex-col lg:flex-row items-center justify-between px-6 py-20 bg-white">
      {/* Gradient background blob */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-orange-100 to-orange-500 blur-3xl opacity-60"></div>

      {/* Left content */}
      <div className="flex-1 text-left max-w-xl z-10">
        <div className="mb-4 inline-flex items-center text-sm font-medium bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
          <span className="mr-2 text-xs font-bold">01</span> Purpose
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black mb-6">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          {subtitle}
        </p>
      </div>

      {/* Right image */}
      <div className="flex-1 mt-10 lg:mt-0 max-w-md mx-auto lg:mx-0 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={HeroImage}
            alt="Atlas Robot"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;