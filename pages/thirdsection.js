import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { TouchableOpacity, ScrollView } from "react-native";

import {
  StyledText,
  StyledView,
  StyledButtonText,
  StyledButtonStyles,
} from "../styles/StyledComp";

function ThirdScreen() {
  const [getValue, setGetValue] = useState("");
  const [articulo, setArticulo] = useState([{ name: "" }]);

  const getValueFunction = () => {
    AsyncStorage.getItem("articuloDelaLista").then((value) =>
      setGetValue(value)
    );
    const newArticulo = {
      name: getValue,
    };
    setArticulo([...articulo, newArticulo]);
  };

  return (
    <StyledView>
      <TouchableOpacity onPress={getValueFunction}>
        <StyledButtonStyles>
          <StyledButtonText>Actualizar</StyledButtonText>
        </StyledButtonStyles>
      </TouchableOpacity>
      <StyledText>Lista de articulos</StyledText>
      <ScrollView>
        {articulo.map((item) => {
          return <StyledText>{item.name}</StyledText>;
        })}
      </ScrollView>
    </StyledView>
  );
}

export default ThirdScreen;
