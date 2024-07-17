import { StrictMode, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from 'store';
import ErrorBoundary from 'components/ErrorBoundary';
import { PAGES } from 'routes';

const router = createBrowserRouter(PAGES);
const queryClient = new QueryClient();

export default function App() {
  return (
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
    </StrictMode>
  );
}
