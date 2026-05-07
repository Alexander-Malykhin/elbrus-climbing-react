import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage.tsx'

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage />,
        },
    ],
    {
        basename: import.meta.env.DEV ? '/local/react-app' : '/',
    },
)