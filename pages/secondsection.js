//Alumno:Andres Emmanuel Reyes Jines
//Matricula:140854


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
      alert("Informacion almacenada Correctamente");
    } else {
      alert("Escriba nombre del Producto");
    }

  };

  return (
    <StyledView>
      <StyledNormalText>Informacion de Producto</StyledNormalText>
      <TextInput 
      placeholder="Ingrese nombre del articulo" 
      value={articulo}
      onChangeText={onChangeText}/>

      <TouchableOpacity onPress={buttonPressed}>
        <StyledButtonStyles>
          <StyledButtonText>
            Guardar
          </StyledButtonText>
        </StyledButtonStyles>
      </TouchableOpacity>

    </StyledView>
  );
}

export default SecondScreen;

