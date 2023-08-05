import { RouteObject } from 'react-router-dom';
import Login from '@pages/login';
import Home from '@pages/home';
import Layout from '@components/Layout/Layout';

export type CustomRouteObject = {
  children?: CustomRouteObject[];
  label?: string;
  hidden?: boolean;
} & RouteObject;

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/login',
        element: <Login />,
        children: [],
      },
      // { path: '*', element: <NoMatch /> },
    ],
  },
];
export default routes;
