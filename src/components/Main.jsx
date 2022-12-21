import { Routes, Route } from "react-router-dom"
import People from "../pages/people/People"
import Show from "../pages/Show"
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main
