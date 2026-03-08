import {createBrowserRouter} from 'react-router'
import { RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/home/Home'
import AddForm from './pages/forms/AddForm'
import UpdateForm from './pages/forms/UpdateForm'
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'addForm',
          element: <AddForm />
        },
        {
          path: 'updateForm/:id',
          element: <UpdateForm />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
