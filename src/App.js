import React from 'react';
import RotesPage from './routes/RotesPage.jsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <RotesPage />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
