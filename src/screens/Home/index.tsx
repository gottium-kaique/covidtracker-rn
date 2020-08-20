import React, { useEffect, useState } from "react"
import { Text, View, useColorScheme } from "react-native"

import { 
  Content, 
  Section, 
  Header, 
  HeaderText,
  Card,
  Title,
  CardTitle,
  CardDeaths,
  CardRecovered
} from "./styles"

import Theme from "../../Theme/theme"

import axios from "../../services/api"
import numberFormater from "../../utils/numberFormater"

import { 
  AntDesign, 
  MaterialCommunityIcons 
} from "@expo/vector-icons"

const Home: React.FC = () => {
  const [deaths, setDeaths] = useState(0)
  const [cases, setCases] = useState(0)
  const [recovered, setRecovered] = useState(0)
  const [lastUpdate, setLastUpdate] = useState(0)

  const { theme, themeText } = Theme()

  useEffect(() => {
    (async () => {
      const response = await axios.get("/br")
      const { data } = response
      setDeaths(data.deaths)
      setCases(data.cases)
      setRecovered(data.recovered)
      setLastUpdate(data.last_update)
    })()
  })

  const date = new Date(lastUpdate).toLocaleDateString()
  const time = new Date(lastUpdate).toLocaleTimeString()

  return (
    <Content>
      <Header>
        <AntDesign name="medicinebox" color={ themeText } size={30} />
        <HeaderText>COVID-19 Tracker</HeaderText>
      </Header>
      <Section>
        <Title style={{color: themeText}}>Brasil</Title>
        <Card>
          <CardTitle>{numberFormater(cases)}</CardTitle>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <MaterialCommunityIcons 
              name="skull-outline" 
              size={20} 
              color={themeText}
              style={{marginRight: 5, marginBottom: -10,}}
            />
            <CardDeaths style={{color: themeText}}>
              Mortes: { numberFormater(deaths) }
            </CardDeaths>
          </View>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <AntDesign 
              name="medicinebox" 
              size={20} 
              color={themeText}
              style={{marginRight: 5}}
            />
            <CardRecovered 
              style={{color: themeText}}
            >
              Recuperados: {numberFormater(recovered)}
            </CardRecovered>
          </View>
        </Card>
        <Section style={{flexDirection: "row"}}>
          <AntDesign 
            name="clockcircleo" 
            size={18} 
            style={{marginRight: 5, color: theme}}
          />
          <Text style={{fontSize: 16, color: theme}}>Atualizado em {date} às {time}.</Text>
        </Section>
      </Section>
    </Content>
  )
}

export default Home