import { RouteObject } from 'react-router';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export type CustomRouteObject = {
  children?: CustomRouteObject[];
  label?: string;
  hidden?: boolean;
} & RouteObject;

const menu: CustomRouteObject[] = [
  //   {
  //     path: '/',
  //     element: <div>hi route</div>,
  //     children: [{ index: true, element: <Navigate to="sample" replace /> }],
  //   },
  //   {
  //     path: '*',
  //     element: <Navigate to="/not-found" replace />,
  //   },
];

function App() {
  return <Wrapper>hi</Wrapper>;
}

export default App;
