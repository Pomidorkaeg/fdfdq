import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '@/utils/assetUtils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  useEffect(() => {
    // Preload next section images
    const images = [
      'lovable-uploads/10641be5-36c7-4f6d-a5b4-ee39048e40ac.png',
      'lovable-uploads/382be63e-ead7-422c-b229-31831c415198.png'
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = getAssetUrl(src);
    });
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Optimized background image loading */}
      <div
        className="absolute inset-0 z-0 bg-fc-darkGreen/50"
        style={{
          backgroundImage: `url(${getAssetUrl('lovable-uploads/e711e51e-481c-438c-987e-2aa5f999290a.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          willChange: 'transform', // Optimize GPU acceleration
          transform: 'translateZ(0)' // Force GPU acceleration
        }}
      ></div>
      
      {/* Optimized gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-fc-darkGreen/80 to-fc-green/75 z-10"
        style={{ willChange: 'opacity' }}
      ></div>
      
      {/* Content with improved animation performance */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          style={{ 
            willChange: 'transform, opacity',
            transform: 'translateZ(0)'
          }}
        >
          Футбольный клуб "Гудаута"
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к нашему футбольному сообществу
        </p>
        <Link to="/team">
          <Button 
            size="lg"
            className="bg-fc-yellow text-fc-darkGreen hover:bg-fc-yellow/90 transition-colors"
          >
            Наша команда <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
