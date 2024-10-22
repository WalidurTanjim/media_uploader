import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './components/Home'
import Upload from './components/Upload'
import SecureUpload from './components/SecureUpload'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/upload', element: <Upload></Upload>},
        {path: '/secureUpload', element: <SecureUpload></SecureUpload>}
      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
