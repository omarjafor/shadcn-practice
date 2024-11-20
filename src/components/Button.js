'use client'
import React from 'react'
import { Button } from "@/components/ui/button";

export default function Button2({myName, setIsOn, user}) {
  return (
    <div>
      <Button
        onClick={() => setIsOn(!myName)}
        className="px-4 py-2 font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors rounded"
      >
        {myName ? "Turn Off" : "Turn On"}

      </Button>
    </div>
  )
}
