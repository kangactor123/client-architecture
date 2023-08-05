import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '@core/styles/global.tsx';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';

//react-query default option 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path="/" element={<></>} /> */}
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Suspense fallback={'...'}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
