import { Provider } from 'react-redux'
import { wrapper } from '@/redux/store/store'
import '@/styles/globals.css'
import '@/styles/style.scss'

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Component {...props}></Component>
    </Provider>
  )
}

export default App
