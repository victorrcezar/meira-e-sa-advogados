import React, { useRef, useEffect, useState } from 'react';
import { SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-12 md:py-16 px-4 md:px-8 border-b border-gray-100 last:border-0 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-3 relative inline-block">
            {title}
            <span className={`absolute -bottom-2 left-0 h-1 bg-gold-500 rounded-full hidden md:block transition-all duration-1000 delay-300 ${isVisible ? 'w-12' : 'w-0'}`}></span>
          </h2>
          {subtitle && (
            <p className={`text-gray-500 text-lg md:text-xl font-light mt-4 max-w-3xl transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};