

'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Check } from "lucide-react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
]


export default function ComboboxPage() {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  
  // Ejercicio 2
  const [open2, setOpen2] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)

  return (
    <div className="grid md:grid-cols-4 gap-3">
      <Popover open={ open } onOpenChange={ setOpen }>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={ open }
            className="justify-between">
            {
              value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select framework..."
            }
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {
                  frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}>
                      <Check className={cn("mr-2 h-4 w-4",value === framework.value ? "opacity-100" : "opacity-0")}/>
                      { framework.label }
                    </CommandItem>
                  ))
                }
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Ejercicio 2 */}

      <Popover open={open2} onOpenChange={setOpen2}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {
                  statuses.map((status) => (
                    <CommandItem
                      key={ status.value }
                      value={ status.value }
                      onSelect={( value ) => {
                        setSelectedStatus(
                          statuses.find(( priority ) => priority.value === value ) ||
                          null
                        )
                        setOpen( false )
                      }}>
                      { status.label }
                    </CommandItem>
                  ))
                }
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}