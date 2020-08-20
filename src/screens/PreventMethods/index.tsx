import React from "react"
import { FlatList, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"

import { 
    Wrapper, 
    Content, 
    Title, 
    PreventMethod,
    Description,
    Header,
    HeaderTitle
} from "./styles"

import Theme from "../../Theme/theme"

const PreventMethods = () => {
    const navigation = useNavigation()
    const { theme, themeText } = Theme()

    function navigateGoBack() {
        navigation.goBack()
    }

    return (
      <Wrapper>
        <Header>
          <TouchableOpacity onPress={navigateGoBack}>
            <MaterialIcons 
              name="arrow-back" 
              size={24} 
              color="#00ccaa" 
            />
          </TouchableOpacity>
          <HeaderTitle style={{color: themeText}}>
            Métodos de Prevenção
          </HeaderTitle>
        </Header>
        <Content>
            <PreventMethod>
                <Title style={{color: themeText}}>
                    <MaterialCommunityIcons 
                      name="ninja" 
                      size={21} 
                      color={themeText}
                    /> Use Máscara
                </Title>
                <Description style={{color: themeText}}>
                    Usar a máscara é muito importante, 
                    pois ajuda a evitar que a pessoa passe ou pegue Corona Vírus.
                </Description>
            </PreventMethod>

            <PreventMethod>
              <Title style={{color: themeText}}>
                <MaterialIcons 
                  name="accessibility" 
                  size={24}
                  color={themeText} 
                /> Evite aglomerações
              </Title>
              <Description style={{color: themeText}}>
                Essa é a mais eficaz forma de evitar pegar Corona Vírus, os outros métodos ajudam mas 
                a chance de pegar Corona Vírus é maior.
              </Description>
            </PreventMethod>

            <PreventMethod style={{paddingBottom: 20,}}>
              <Title style={{color: themeText}}>
                <MaterialCommunityIcons 
                  name="spray-bottle" 
                  size={24}
                  color={themeText}
                /> Higiene
              </Title>
              <Description style={{color: themeText}}>
                A higiene é muito importante, 
                pois se você tem higiene você vai pegar Corona Vírus, 
                quando ter contato da mão com os olhos, ou das mãos com a boca.
                A seguir tem algumas formas de higiene necessárias: 
              </Description>
              <FlatList 
                data={[
                  {key: "Higienize as mãos."},
                  {key: "Higienize os alimentos."},
                  {key: "Higienize as Embalagens."},
                  {key: "Tire os Sapatos ao chegar em casa."}
                ]}

                renderItem={({item}) => (
                    <Description style={{color: themeText}}>• {item.key}</Description>
                )}

              />
              </PreventMethod>
          </Content>
        </Wrapper>
    )
}

export default PreventMethods