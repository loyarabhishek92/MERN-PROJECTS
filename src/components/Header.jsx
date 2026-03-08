import { NavLink } from "react-router";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="h-15 bg-blue-100">
      <div className="h-15 flex justify-between items-center mx-8 ">
        <h1 className="text-4xl font-extrabold text-blue-700">ToDoApp</h1>
        <Button className= "bg-blue-900">
          <nav>
            <NavLink to={'/addForm'}>Add Student</NavLink>
          </nav>
        </Button>
      </div>
    </div>
  )
}
