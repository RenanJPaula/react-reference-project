import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ApplicationRoutes from './routes/application-routes';
import { store, persistor } from './store/store-config';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ApplicationRoutes />
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
