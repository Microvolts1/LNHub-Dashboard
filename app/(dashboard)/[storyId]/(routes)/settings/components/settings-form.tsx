'use client';

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Story } from "@prisma/client";
import { Trash } from "lucide-react";

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
      <Button
        variant='destructive'
        size='icon'
        onClick={() => {}}
      >
        <Trash className="h-4 w-4"/>
      </Button>
    </div>
  )
}

export default SettingsForm