import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.opacity = '1';
    };

    const handleMouseOut = () => {
      cursor.style.opacity = '0';
    };

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
        cursor.classList.add('custom-cursor--link');
      }
    };

    const handleLinkLeave = () => {
      cursor.classList.remove('custom-cursor--link');
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleLinkHover);
    document.addEventListener('mouseout', handleLinkLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleLinkHover);
      document.removeEventListener('mouseout', handleLinkLeave);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;