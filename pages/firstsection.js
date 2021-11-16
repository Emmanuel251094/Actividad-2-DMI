//Alumno:Andres Emmanuel Reyes Jines
//Matricula:140854
import React, { useState } from "react"; 
import {TouchableOpacity } from "react-native";
import {
  StyledText,
  StyledView,
  StyledNotValid,
  StyledValid,
  StyledNormalText,
  StyledButtonText,
  StyledButtonStyles,
  StyledTextP,
} from "../styles/StyledComp";

function FirtsScreen() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const increaseCounter = () => {
    if (counter < 1000) {
      setCounter((current) => current + 1);
    }
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter((current) => current - 1);
    }
  };

  const autoincrement = () => {
    if (counter < 1000) {
      for (var i = 0; i < 999 - counter; i++) {
        setCounter((current) => current + 1);
      }
    }
  };

  const reset = () => {
    setCounter((current) => (current = 0));
  };

  const visibleText = () => {
    setName("140854 Andres Reyes");
    setTimeout(() => {
      setName("");
    }, 5000);
  };

  return (
    <StyledView>
      
      <StyledText>Practica 1 Contador</StyledText>
      <StyledText>{counter}</StyledText>

      <TouchableOpacity onPress={visibleText}>
        <StyledButtonStyles>
          <StyledText>
            <StyledButtonText>Name</StyledButtonText>
          </StyledText>
        </StyledButtonStyles>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={decreaseCounter}>
        <StyledButtonStyles>
          <StyledText>
            <StyledButtonText>Disminuir</StyledButtonText>
          </StyledText>
        </StyledButtonStyles>
      </TouchableOpacity>
      <TouchableOpacity onPress={increaseCounter}>
        <StyledButtonStyles>
          <StyledText>
            <StyledButtonText>Aumentar</StyledButtonText>
          </StyledText>
        </StyledButtonStyles>
      </TouchableOpacity>

      
      
      <TouchableOpacity onPress={reset}>
        <StyledButtonStyles>
          <StyledText>
            <StyledButtonText>Reset</StyledButtonText>
          </StyledText>
        </StyledButtonStyles>
      </TouchableOpacity>

      <TouchableOpacity onPress={autoincrement}>
        <StyledButtonStyles>
          <StyledText>
            <StyledButtonText>Auto</StyledButtonText>
          </StyledText>
        </StyledButtonStyles>
      </TouchableOpacity>

      

      {counter > 999 || counter < 0 ? (
        <StyledText>
          <StyledNormalText>
            <StyledNotValid>{"Fuera de Limite"}</StyledNotValid>
          </StyledNormalText>
        </StyledText>
      ) : (
        <StyledText>
          {counter < 20 ? (
            <StyledValid> Datos Validos</StyledValid>
          ) : (
            <StyledNotValid>Datos Invalidos</StyledNotValid>
          )}
        </StyledText>
      )}

    
      <StyledText>
        <StyledTextP>{name}</StyledTextP>
      </StyledText>
    </StyledView>
  );
}
export default FirtsScreen;
