import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './RootLayout.tsx';
import MainPage from './MainPage.tsx';
import AboutPage from './AboutPage.tsx';
import NotFoundPage from './NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />, // Обработка 404 и ошибок
    children: [
      {
        index: true, // Маршрут по умолчанию (path: "/")
        element: <MainPage />,
      },
      {
        path: 'about', // Маршрут "/about"
        element: <AboutPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}