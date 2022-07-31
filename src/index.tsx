import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// App
import './index.scss';
import App from './App';
import { configStore } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = configStore();
const persistor = persistStore(store);

root.render(
    <React.StrictMode>
        <Provider store= { store }>
            <PersistGate 
                persistor={ persistor }>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);