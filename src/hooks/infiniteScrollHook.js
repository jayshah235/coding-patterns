import { useCallback, useRef } from "react";

export const useIntersectionObserver = (callback) => {
  const observer = useRef(null);

  const ref = useCallback(
    (node) => {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback();
      });
      if (node) observer.current.observe(node);
    },
    [callback]
  );
  return ref;
};
