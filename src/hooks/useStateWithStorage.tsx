import { useState, useEffect } from 'react';
import { getStorage, setStorage } from '../lib/utils';

export default function useStateWithStorage(key: string, defaultValue: []) {
  const storedValue = getStorage(key);
  const initialValue = storedValue ?? defaultValue;
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setStorage(key, value);
  }, [key, value]);
  return [value, setValue];
}