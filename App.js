import react from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './pages/Routes';
import Login from './pages/Login';

export default function App() {
    let logado = true;
    if(logado){
      return(        
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      )
    }
    else{
      return(
        <Login/>
      )
    }
}
;
