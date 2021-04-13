import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationRoutes from './routes/application-routes';
import store from './store/store-config';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <ApplicationRoutes />
      </Router>
    </ReduxProvider>
  );
}

export default App;
