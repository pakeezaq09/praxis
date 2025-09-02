import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  className?: string;
  isVisible: boolean;
  duration?: number;
}

export default function Counter({ target, suffix = "", className = "", isVisible, duration = 2000, ...props }: CounterProps) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      let start = 0;
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCurrent(target);
          clearInterval(timer);
        } else {
          setCurrent(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration, hasStarted]);

  return (
    <div className={className} {...props}>
      {current}{suffix}
    </div>
  );
}
