import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LoadingComponent } from 'components/Loading/Loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from 'store/authContext';
import 'assets/styles/tailwind.css';
import 'assets/styles/index.css';
import { RouterComponent } from 'Routes';
import { Toaster } from 'sonner';
import './index.css'


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Suspense >
            <RouterComponent />
            <Toaster />
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));