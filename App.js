import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {  Provider } from 'react-redux'
import {store, persistor} from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import AppStack from './src/Routes/AppStack'

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App
