import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/routes';

import './App.css';
import { CurrencyContext, Currency } from './context/currency';

// https://www.behance.net/gallery/162192067/Expense-Management-SaaS-Software-Design-Admin-Portal?tracking_source=search_projects%7CExpense+app
// https://dribbble.com/shots/14392698-Money-Tracker-App-Mobile-Design
function App() {
  const [currency, setCurrency] = useState(Currency.IDR); 

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <div className="app">
        <RouterProvider router={Routes} />
      </div>
    </CurrencyContext.Provider>
  );
}

export default App;
