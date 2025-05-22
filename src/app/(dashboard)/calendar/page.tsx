

'use client'

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";


export default function CalendarPage() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])
  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short"
  })
  
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-3 gap-3">
        <Calendar
          mode="single"
          selected={ date }
          onSelect={ setDate }
          disabled={( date ) => date.getDate() === 0 || date.getDate() === 6 }
          className="rounded-md border shadow"
        />
        <Calendar
          mode="single"
          selected={ date }
          onSelect={ setDate }
          disabled={( date ) => date > new Date()}
          className="rounded-md border shadow"
        />
        <Calendar
          mode="multiple"
          selected={ multipleDate }
          onSelect={ setMultipleDate }
          className="rounded-md border shadow"
        />
      </div>

        <div>
          <h1 className="text-3xl mt-4">Información</h1>
          <div className="border-b"></div>
          <p className="mt-2">Día de hoy: <strong>{ smallDate }</strong></p>
          {
            multipleDate?.length === 0 
            ? (<p className="text-red-500 mt-2">No hay días marcados</p>)
            : (<p className="mt-2">Días marcados: <strong> {multipleDate?.map((date) => date.toLocaleDateString()).join(", ")}</strong></p>)
          }
        </div>
    </div>
  );
}