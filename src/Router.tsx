import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import Login from '@pages/login';
import Home from '@pages/home';

// const Home = lazy(() => import('@pages/home'));

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index={true} path="home" element={<Home />} />
//     </Route>,
//   ),
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: 'home',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
