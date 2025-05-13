import React from 'react';
import RotesPage from './routes/RotesPage.jsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import { AuthContext } from './context/AuthContext.jsx';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContext>
          <RotesPage />
        </AuthContext>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
