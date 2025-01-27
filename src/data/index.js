import { useState, useEffect } from 'react';

export { default as Intro } from '../components/Intro';
export { default as About } from '../components/About.jsx';
export { default as Contact } from '../components/Contact.jsx';

export function useIsVisible(ref){
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {     
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });
        if(ref.current != null){
        observer.observe(ref.current);
        }
        

      return () => {
        observer.disconnect();
      }
    }, [ref]);
    
    return isIntersecting;
}
