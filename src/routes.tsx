import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Theme from "./Theme/theme"

import Home from "./screens/Home"
import About from "./screens/About"
import PreventMethods from "./screens/PreventMethods"

import DrawerContent from "./components/DrawerContent"

const Drawer = createDrawerNavigator()

const Routes = () => {
  const { theme } = Theme()
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props}/>}
        initialRouteName="Home"
        drawerStyle={{width: 300, backgroundColor: theme}}
        sceneContainerStyle={{backgroundColor: theme}}
      >
        <Drawer.Screen name="Home" component={ Home } />
        <Drawer.Screen name="PreventMethods" component={ PreventMethods } />
        <Drawer.Screen name="About" component={ About } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Routes