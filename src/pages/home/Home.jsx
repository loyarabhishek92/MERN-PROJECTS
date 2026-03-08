
import RemoveUser from "@/components/RemoveUser";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EditIcon, MoreHorizontalIcon, TrashIcon } from "lucide-react";
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router";

export default function Home() {

  const { users } = useSelector((state) => state.userSlice);
  console.log(users);
  const nav = useNavigate();



  return (
    <div className="px-20 mt-5">
      <div className="flex justify-between">
      <h1 className="text-2xl font-extrabold uppercase text-blue-500">students details</h1>
      </div>

      <Table className= "bg-gray-50 mt-3">
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Feedback</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        {
          users.map((user, index) => {
            return <TableBody key={user.id}>
              <TableRow>
                <TableCell className="font-medium">{user.userid}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.course}</TableCell>
                <TableCell>{user.feedback}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-x-2 justify-end">
                  <Button onClick={() => nav(`/updateForm/${user.id}`)} variant="outline">
                    <EditIcon className="text-blue-700"/>
                  </Button>
                  <RemoveUser id={user.id}/>
                  
                  </div>
        
                   
                </TableCell>
              </TableRow>
            </TableBody>
          
          })
        }

      </Table>

    </div>
  )
}
