

'use client';


import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Loader2, 
  MailOpen 
} from "lucide-react";


export default function ButtonPage() {
  return (
    <div className="grid md:grid-cols-5 gap-2">
      <Button className="cursor-pointer">default</Button>
      <Button variant="destructive" className="cursor-pointer">destructive</Button>
      <Button variant="ghost" className="cursor-pointer">ghost</Button>
      <Button variant="outline" className="cursor-pointer">outline</Button>
      <Button variant="secondary" className="cursor-pointer">secondary</Button>
      <Button variant="link" className="cursor-pointer">link</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => { alert('Usted pulsó el botón') }} className="cursor-pointer">Click me!</Button>
      <Button variant="success" className="cursor-pointer">success</Button>
      <Button variant="success" capitalize={ false } className="cursor-pointer">success - capitalize = false</Button>
      <Button variant="outline" size="icon" className="cursor-pointer">
        <ChevronRight />
      </Button>
      <Button className="cursor-pointer">
        <MailOpen /> 
        Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}