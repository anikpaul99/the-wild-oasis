import { useEffect, useRef } from "react";

/**
 * Will be executed when a click happens outside of the selected element. e.g. closing the element when a click happens outside of the element.
 * @param {func} handler Function to be executed when a click happens outside of the element.
 * @param {boolean} listenCapturing Whether listen for the event in capturing phase or bubbling phase. By default will listen for the event in capturing phase. If you want to listen for the event in bubbling phase then set 'listenCapturing' to 'false'.
 * @returns {Object} ref is returned as a result of calling 'useRef()' hook, which will be used to select the element manually.
 * @author Anik Paul
 */
export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log(ref.current);
          console.log(e.target);
          console.log(ref.current.contains(e.target));
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
