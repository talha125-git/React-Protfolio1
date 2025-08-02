import { useEffect, useState } from 'react';

export default function useScrollReading() {
  const [calculatedHeight, setCalculatedHeight] = useState(0);

  useEffect(() => {
    const updateScrollReading = () => {
      const scrollCurrentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCalculatedHeight(Number((scrollCurrentProgress / scrollHeight).toFixed(2) * 100));
      }
    };

    window.addEventListener('scroll', updateScrollReading);
    return () => {
      window.removeEventListener('scroll', updateScrollReading);
    };
  }, []);

  return calculatedHeight;
}
