import styled from "styled-components/native"
import { StatusBar } from "react-native"

export const Wrapper = styled.SafeAreaView`
    margin-top: ${StatusBar.currentHeight}px;
    flex: 1;
`