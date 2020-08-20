import React from "react"
import { 
  Content, 
  Header, 
  HeaderTitle,
  Section,
  Description,
  Img,
  Social,
} from "./styles"

import { TouchableOpacity, Linking } from "react-native"
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import Theme from "../../Theme/theme"

const About = () => {
  const navigate = useNavigation()
  const { theme, themeText } = Theme()

  function goBack() {
    navigate.goBack()
  }

  async function goInstagram() {
    await Linking.openURL("http://instagram.com/gottium.academy.oficial")
  }

  async function goYoutube() {
    await Linking.openURL("https://www.youtube.com/channel/UCN6VSBFHMGZVrFWFu-R9i5Q")
  }

  return (
    <Content>
      <Header>
        <TouchableOpacity onPress={goBack} >
          <MaterialIcons 
            name="arrow-back" 
            size={24} 
            color="#00ccaa"
          />
        </TouchableOpacity>
        <HeaderTitle style={{color: themeText}}>
          Sobre
        </HeaderTitle>
      </Header>
      <Section>

        <MaterialCommunityIcons
          name="account-circle-outline" 
          size={80} 
          style={{marginBottom: 20, marginRight: 220,}}
          color="#00ccaa"
        />

        <Description style={{color: themeText}}>
          Olá, eu sou Kaique Araújo, 
          criei esse aplicativo para ajudar no combate ao covid-19,
          conscientizando as pessoas sobre o perigo do Corona Vírus, nesse
          aplicativo eu criei uma seção sobre os métodos de prevenção, e uma página
          com a quantidade de casos, mortes e casos recuperados.
        </Description>

      </Section>
      <Social>
        <TouchableOpacity onPress={goInstagram}>
          <MaterialCommunityIcons 
            name="instagram" 
            size={35} 
            style={{marginRight: 10, color: themeText}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={goYoutube}>
          <MaterialCommunityIcons 
            name="youtube" 
            size={40}
            color={themeText}
          />
        </TouchableOpacity>
      </Social>
    </Content>
  )
}

export default About