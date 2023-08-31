'use client';

import Heading from "@/components/ui/heading";
import { Story } from "@prisma/client";

interface SettingsFormProps {
  initialData: Story;
}

const SettingsForm: React.FC<SettingsFormProps> = ({initialData}) => {
  return (
    <div className="flex items-center justify-between">
      <Heading
        title="Settings"
        description="Manage your story preferences"
      />
    </div>
  )
}

export default SettingsForm