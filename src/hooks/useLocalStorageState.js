import { useState, useEffect } from "react";

/**
 * Will set the value in local storage and load the state with the value when the app loads for the first time
 * @param {Array} initialState the initial value of the state to be loaded when there are no saved value in local storage
 * @param {string} key name of the key to be saved as in the local storage
 * @returns {Object []} array including 'value' and 'setValue'
 * @author Anik Paul
 */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
