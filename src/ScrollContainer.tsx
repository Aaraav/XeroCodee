import React, { useEffect, useRef, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollInstanceRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollInstanceRef.current = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        // Add any other Locomotive Scroll options here
      });

      return () => {
        // Cleanup on component unmount
        if (scrollInstanceRef.current) {
          scrollInstanceRef.current.destroy();
          scrollInstanceRef.current = null;
        }
      };
    }
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollContainer;
