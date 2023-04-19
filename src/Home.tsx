import React from 'react'
import { Button } from "@mantine/core"

export default function Home() {
  function sayHi(): void {
    alert("Hello World!")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Soon to look a lot like Reddit
      </h1>
      <Button
        className="bg-blue-600"
        onClick={sayHi}
      >
        Mantine Button
      </Button>
    </div>
  )
}
