


"use client"

import { Button } from "@/components/ui/button";


export default function ToastPage() {

  function toast({ description }: { description: string }) {
    // Simple implementation using window alert for demonstration
    // Replace with your preferred toast library (e.g., sonner, react-hot-toast, etc.)
    window.alert(description);
  }

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          })
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}