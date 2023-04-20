import { Button } from "@mantine/core"
import Home from "./Home"
import Test from "./Test"
import { Routes, Route, Link } from "react-router-dom"


function App() {

  // function sayHi(): void {
  //   alert("Hello World!")
  // }

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">test page</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">
        Soon to look a lot like Reddit
      </h1>
      <Button
        className="bg-blue-600"
        onClick={sayHi}
      >
        Mantine Button
      </Button> */}
    </>
  )
}

export default App
