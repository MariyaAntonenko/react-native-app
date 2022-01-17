import {useEffect, useMemo, useState} from 'react';

export const useCounterIncrementer = () => {
  const [count, setCount] = useState(0);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let value = Math.random() > 0.5;
      if (value) {
        setCount(prev => prev + 1);
      }
      setError(!value);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const value = useMemo(() => ({count, isError}), [count, isError]);

  return value;
};
