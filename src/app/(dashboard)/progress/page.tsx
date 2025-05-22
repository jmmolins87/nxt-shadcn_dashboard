



'use client'


import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";


export default function ProgressPage() {
  
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if(prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 100)
    return () => {
      clearInterval(interval)
    } 
  }, [])

  return (
    <div>
      <Progress value={progress} indicatorColor={
        cn({
          "bg-red-500": progress < 50,
          "bg-yellow-500": progress >= 50,
          "bg-green-500": progress > 80,
          "bg-blue-500": progress === 100
        })
      } />
    </div>
  );
}