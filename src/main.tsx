import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '@core/styles/global.tsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from '@core/theme/Provider/ThemeProvider';

//react-query default option 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

// Todo: Suspense
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Suspense fallback={'...'}>
          <BrowserRouter>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
