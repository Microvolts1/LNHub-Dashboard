'use client';

import { useStoryModal } from "@/hooks/use-story-modal";
import { Modal } from "../ui/modal";

export const StoryModal = () => {
  const storyModal = useStoryModal();

  return (
    <Modal
      title='Create a new story'
      description="What will it be name this time?"
      isOpen={storyModal.isOpen}
      onClose={storyModal.onClose}
    >
      Future create story Form
    </Modal>
  )
}