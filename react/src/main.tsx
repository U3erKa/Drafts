import 'index.css';
import 'App.css';
import { StrictMode, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from 'store';
import ErrorBoundary from 'components/ErrorBoundary';
import { PAGES } from 'routes';
// import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter(PAGES);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ErrorBoundary fallback={'Oops...'}>
      <Suspense fallback={null}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </Provider>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
