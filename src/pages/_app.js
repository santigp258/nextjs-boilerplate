import '@/styles/globals.css'
import {Provider} from 'react-redux';
import {store, persistor} from '@/store/store';
import {PersistGate} from 'redux-persist/integration/react';

/**
 * Main Component
 * @param Component
 * @param pageProps
 * @returns {JSX.Element}
 * @constructor
 */
function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  );
}

export default MyApp
