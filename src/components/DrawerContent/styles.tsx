import styled from "styled-components/native"
import React from "react"
import { RectButton } from "react-native-gesture-handler"
import { ViewStyle, StyleProp } from "react-native"

export const Section = styled.View`` 

export const LogoSection = styled.View`
    position: relative;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    flex-direction: row-reverse;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 6px;
`

export const Logo = styled.Image`
    left: -30px;
` 

export const AppName = styled.Text`
    font-size: 20px;
    position: absolute;
    right: 95px;
` 

export const LabelMenuItem = styled.Text`
    margin-left: 12px;
    font-size: 15px;
`

interface menuItem {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
    onPress(): any
}

export const MenuItem = styled(RectButton)`
    padding: 12px 20px;
    flex-direction: row;
    align-items: center;
`