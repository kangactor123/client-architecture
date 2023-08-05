import { Outlet, RouteObject, useLocation, useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { useEffect } from 'react';

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
  const navigate = useNavigate();
  const location = useLocation();

  // 토큰 없으면 로그인으로 라우팅
  // useEffect(() => {
  //   navigate('/login');
  // }, [location.pathname]);

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default App;
