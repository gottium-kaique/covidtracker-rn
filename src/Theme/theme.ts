import { useColorScheme } from "react-native"

interface ThemeProps {
  theme: string
  themeText: string
}

export default function Theme(): ThemeProps {
  const theme = useColorScheme() === "dark" ? "#334" : "#fff"
  const themeText = useColorScheme() === "dark" ? "#fff" : "#334"

  return {
    theme,
    themeText,
  }
}