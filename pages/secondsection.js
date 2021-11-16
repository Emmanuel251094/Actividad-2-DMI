import React,  { useState }    from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity, TextInput} from "react-native";
import {
  StyledText,
  StyledView,
  StyledNormalText,
  StyledButtonText,
  StyledButtonStyles,
} from "../styles/StyledComp";



function SecondScreen() {
  
  const [articulo, onChangeText] = useState(null);

  const buttonPressed = () => {

    onChangeText(articulo);

    if (articulo) {
      AsyncStorage.setItem('articuloDelaLista', articulo);
      onChangeText('');
      alert("Dato guardado");
    } else {
      alert("ingresa un articulo");
    }

  };

  return (
    <StyledView>
      <StyledNormalText>Artículo</StyledNormalText>
      <TextInput 
      placeholder="ingresa tu articulo"
      value={articulo}
      onChangeText={onChangeText}/>

      <TouchableOpacity onPress={buttonPressed}>
        <StyledButtonStyles>
          <StyledButtonText>
            Agregar
          </StyledButtonText>
        </StyledButtonStyles>
      </TouchableOpacity>

    </StyledView>
  );
}

export default SecondScreen;
