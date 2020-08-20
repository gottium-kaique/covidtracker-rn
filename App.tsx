import React from "react"
import Routes from "./src/routes"
import { Wrapper } from "./src/styles"
import { StatusBar } from "react-native"
import Theme from "./src/Theme/theme"

export default () => {
  const { theme } = Theme()

  return (
    <>
      <StatusBar 
        barStyle={ theme === "#334" ? "light-content" : "dark-content" }
        backgroundColor={ theme } 
        translucent 
      />
      <Wrapper>
        <Routes/>
      </Wrapper>
    </>
  )
}