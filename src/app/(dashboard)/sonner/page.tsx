
'use client'

import { Button } from "@/components/ui/button";
import { toast } from "sonner";


export default function SonnerPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: `${new Date().getFullYear()}`,
            duration: 5000,
            position: 'top-right',
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Top Right Default
      </Button>
      <Button
        onClick={() =>
          toast.success("Event has been created", {
            description: `${new Date().getFullYear()}`,
            duration: 5000,
            position: 'top-left',
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Top Left Success
      </Button>
      <Button
        onClick={() =>
          toast.warning("Event has been created", {
            description: `${new Date().getFullYear()}`,
            duration: 5000,
            position: 'bottom-right',
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Bottom Right Warning
      </Button>
      <Button
        onClick={() =>
          toast.info("Event has been created", {
            description: `${new Date().getFullYear()}`,
            duration: 5000,
            position: 'bottom-left',
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Bottom Left Info
      </Button>
    </div>
  );
}