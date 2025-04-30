import React from 'react';
import RotesPage from './routes/RotesPage.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <RotesPage />
    </BrowserRouter>
  );
}

export default App;
