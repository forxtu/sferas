import { useState } from 'react';

type LocalStorage<Value, HandleSetValue> = [Value, HandleSetValue];

const useLocalStorage = <Value>(
  key: string,
  initialValue: Value
): LocalStorage<Value, (value: Value) => void> => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(
    (): Value => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);

        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        return initialValue;
      }
    }
  );

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const handleSetStoredValue = (value: Value): void => {
    try {
      // Save state
      setStoredValue(value);

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error(`Set value to local storage failed: ${error}`);
    }
  };

  return [storedValue, handleSetStoredValue];
};

export default useLocalStorage;
