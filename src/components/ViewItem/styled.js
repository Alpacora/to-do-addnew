import styled from 'styled-components/native';

export const ItemModal = styled.Modal``;

export const ModalOverlay = styled.View`
flex: 1;
justify-content: flex-end;
background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseModalArea = styled.View`
  height: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CloseModal = styled.View`
  width: 50px;
  height: 4px;
  border-radius: 2px;
  background-color: white;
  `;

export const ModalContent = styled.View`
  height: 400px;
  padding: 20px 20px;
  border-top-left-radius: 30px;
  border-top-Right-radius: 30px;
  align-items: center;
  background-color: whitesmoke;
`;

export const ModalTitle = styled.Text``;

export const ModalDetailsArea = styled.View``;

export const DefaultButton = styled.TouchableOpacity`
`;
