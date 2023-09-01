"use client";

import { useState } from "react";
import { Story } from "@prisma/client";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useStoryModal } from "@/hooks/use-story-modal";
import { useParams, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  BookOpen,
  Check,
  ChevronsUpDown,
  Library,
  PlusCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StorySwitcherProps extends PopoverTriggerProps {
  items: Story[];
}

const StorySwitcher = ({ className, items = [] }: StorySwitcherProps) => {
  const [open, setOpen] = useState(false);
  const storyModal = useStoryModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    id: item.id,
  }));

  const currentStory = formattedItems.find(
    (item) => item.id === params.storyId
  );

  const onStorySelect = (story: { id: string; label: string }) => {
    setOpen(false);
    router.push(`/${story.id}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a story"
          className={cn("w-[200px] justify-between", className)}
        >
          <Library className="mr-2" />
          <div className="truncate">{currentStory?.label}</div>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search story..." />
            <CommandEmpty>No story found</CommandEmpty>
            <CommandGroup heading="Stories">
              {formattedItems.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => onStorySelect(item)}
                  className="text-sm"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentStory?.id === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storyModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create new story
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StorySwitcher;
