import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import Home from './Home';
import Perfil from './Perfil';
import Pesquisar from './pesquisar';
import Novo from './Novo';
import Notificacao from './Notificação';
import BotaoNew from '../Componentes/BotaoNew';




const tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <tab.Navigator
        screenOptions={{
            tabBarStyle: {
            backgroundColor: 'black',
            },
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '250',
              color: '#FFFF',
            },
            
            tabBarActiveBackgroundColor: "#808080",
            tabBarLabelPosition: "below-icon"
  
          }}
        >
            <tab.Screen name="Tela inicial" component={ Home } 
                options={{
                    tabBarIcon:({color, size})=>(<AntDesign name="home" size={size} color="#DCDCDC"/>),
              }}
            />

            <tab.Screen name="Perfil" component={ Perfil }
                options={{
                  tabBarIcon:({color, size})=>(<AntDesign name="user" size={size} color="#DCDCDC" />),
            }}
            />

            <tab.Screen name="Novo" component={ Novo }
              options={{
                tabBarLabel:"",
                tabBarIcon:({color, size}) => (<BotaoNew size={size} color={color} />),                   
              }}
            />

            <tab.Screen name="Pesquisa" component={ Pesquisar } 
                options={{
                  tabBarIcon:({color, size})=>(<AntDesign name="search1" size={size} color="#DCDCDC" />),
            }}
            />

            <tab.Screen name="notificação" component={ Notificacao } 
              options={{
                tabBarIcon:({color, size})=>(<AntDesign name="bells" size={size} color="#DCDCDC"/>),
                tabBarBadge: 1,
          }}
            />
        </tab.Navigator>
    )

}

const style = StyleSheet.create({
  teste:{
      width: 60,
      height: 60,
      backgroundColor: "blue",
      borderRadius: 30,
      alignItems: "center",
      justifyContent:"center",
      marginBottom: 40
  }

})