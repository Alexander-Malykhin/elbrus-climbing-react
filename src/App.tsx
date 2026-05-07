import { RouterProvider } from 'react-router-dom'
import { router } from '@routes/router.tsx'
import '@scss/main.scss'

const App = () => <RouterProvider router={router} />

export default App