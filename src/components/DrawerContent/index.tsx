import React from "react"
import { 
  Section, 
  LogoSection, 
  AppName, 
  Logo, 
  MenuItem, 
  LabelMenuItem 
} from "./styles"

import { 
  DrawerContentScrollView, 
  DrawerContentComponentProps 
} from "@react-navigation/drawer"

import { 
  AntDesign,
  Octicons,
  Feather
} from "@expo/vector-icons"

import Theme from "../../Theme/theme"

const DrawerContent: React.FC <DrawerContentComponentProps> = props => {
  const { themeText, theme } = Theme()
  return (
    <DrawerContentScrollView>
      <LogoSection>
          <Logo 
            source={require("../../img/covid.png")} 
            resizeMode="center"
            style={{height: 60}}
          />
          <AppName style={{color: themeText}}>COVID-19 Tracker</AppName>
      </LogoSection>
      <Section>
        <MenuItem onPress={() => props.navigation.navigate("Home")}>
          <AntDesign name="home" size={22} color={themeText} />
          <LabelMenuItem 
            style={{color: themeText}}
          >
            Rastreador COVID-19
          </LabelMenuItem>
        </MenuItem>

        <MenuItem 
          onPress={() => props.navigation.navigate("PreventMethods")}
        >
          <Feather name="shield" size={22} color={themeText} />
          <LabelMenuItem
            style={{color: themeText}}
          >
            Métodos de Prevenção
          </LabelMenuItem>
        </MenuItem>

        <MenuItem onPress={() => props.navigation.navigate("About")}>
          <Octicons name="info" size={22} color={themeText} />
          <LabelMenuItem
            style={{color: themeText}}
          >
            Sobre
          </LabelMenuItem>
        </MenuItem>

      </Section>
    </DrawerContentScrollView>
  )
}

export default DrawerContent