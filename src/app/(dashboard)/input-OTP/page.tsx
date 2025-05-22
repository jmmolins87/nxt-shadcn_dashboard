

'use client'

import { useState } from "react";

import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSeparator, 
  InputOTPSlot 
} from "@/components/ui/input-otp";


export default function InputOTPPage() {

  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col justify-center items-center">
      <InputOTP 
        maxLength={6}
        value={value}
        onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="mt-3">{ value }</p>
    </div>
  );
}