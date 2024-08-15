import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider} from 'react-redux'
import store from './redux/store.jsx'
// import { AuthProvider } from './context/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
