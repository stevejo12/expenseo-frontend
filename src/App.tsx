import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/routes';

import './App.css';

// https://www.behance.net/gallery/162192067/Expense-Management-SaaS-Software-Design-Admin-Portal?tracking_source=search_projects%7CExpense+app
function App() {
  return (
    <div className="app">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
