import { TrashIcon } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";

import { useDispatch } from "react-redux";
import { removeUser } from "@/pages/forms/userSlice";

export default function RemoveUser({id}) {
  const dispatch = useDispatch();
  return (
    <div>
        <AlertDialog>
      <AlertDialogTrigger asChild>
      
        
        <Button variant="outline">
                    <TrashIcon className="text-red-700"/>
                  </Button>
                 
       
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
          onClick = {() => dispatch(removeUser(id))}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      
    </div>
  )
}
