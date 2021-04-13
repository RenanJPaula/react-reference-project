import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationRoutes from './routes/application-routes';

const App: React.FC = () => {
  return (
    <Router>
      <ApplicationRoutes/>
    </Router>
  );
}

export default App;
