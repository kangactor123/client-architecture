import styled from '@emotion/styled';
import routes from './Router';
import { useRoutes } from 'react-router';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const element = useRoutes(routes);

  // 토큰 없으면 로그인으로 라우팅
  // useEffect(() => {
  //   navigate('/login');
  // }, [location.pathname]);

  return <Wrapper>{element}</Wrapper>;
}

export default App;
