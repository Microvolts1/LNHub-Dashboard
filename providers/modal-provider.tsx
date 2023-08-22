"use client";

import { StoryModal } from "@/components/modals/story-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Line 7-15(*) can be use as a trick to fix hydration error in react.

  return (
    <>
      <StoryModal />
    </>
  );
};
