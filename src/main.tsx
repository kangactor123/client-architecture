import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '@core/styles/global.tsx';
import { RouterProvider } from 'react-router';

import router from './Router';

//react-query default option 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

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
