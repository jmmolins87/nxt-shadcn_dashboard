

'use client'

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";


export default function AlertDialogPage() {

  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="grid md:grid-cols-2 gap-3">

      <AlertDialog 
        onOpenChange={( open ) => { console.log( `Está abierta? ${ open }` )}}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="cursor-pointer">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => { alert('Se canceló') }} className="cursor-pointer">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => { alert('Puede Continuar') }} className="cursor-pointer">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={ openDialog }
        onOpenChange={(open) => { setOpenDialog( open ) }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenDialog( false )} className="cursor-pointer">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setOpenDialog( false )} className="cursor-pointer">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  
      <Button onClick={() => setOpenDialog( true )} className="cursor-pointer">Open Custom Dialog</Button>
      
    </div>
  );
}