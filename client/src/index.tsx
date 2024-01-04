import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Auth } from './features/auth/auth';
import { Personal } from './pages/personal-accaount';
import { Profile } from './pages/profile';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Personal />
  },
  {
    path: Paths.login,
    element: <Login />
  },
  {
    path: Paths.register,
    element: <Register />
  },
  {
    path: `${Paths.profile}/:id`,
    element: <Profile />,
  },
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
