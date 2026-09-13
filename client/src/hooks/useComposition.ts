import { useCallback, useRef, useState } from "react";

export function useComposition() {
  const [isComposing, setIsComposing] = useState(false);
  const isComposingRef = useRef(false);

  const onCompositionStart = useCallback(() => {
    isComposingRef.current = true;
    setIsComposing(true);
  }, []);

  const onCompositionEnd = useCallback(() => {
    isComposingRef.current = false;
    setIsComposing(false);
  }, []);

  return {
    isComposing,
    isComposingRef,
    onCompositionStart,
    onCompositionEnd,
  };
}
