import { useState } from 'react'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-5  bg-gray-400'>
        <Button>Click</Button>
      </div>
    </>
  )
}

export default App
