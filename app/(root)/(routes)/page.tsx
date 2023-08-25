'use client';

import { useEffect } from "react";

import { useStoryModal } from "@/hooks/use-story-modal";


export default function Home() {
  const onOpen = useStoryModal((state) => state.onOpen);
  const isOpen = useStoryModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen()
    }
  }, [isOpen, onOpen]) 
  /*Recommended(unless u can't) to always use primitive type(int, boolean,...) for dependency array in useEffect */

  return (
    <div className="p-4">
      Root page
    </div>
  )
}
