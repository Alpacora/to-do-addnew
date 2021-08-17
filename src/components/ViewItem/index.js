import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

import {
  ItemModal,
  ModalOverlay,
  ModalContent,
  CloseModalArea,
  CloseModal,
  ModalDetailsArea,
  ModalTitle,
  DefaultButton,
} from './styled';

export function ViewItem({ active, closeModal, item }) {
  if(!item){

    return <AppLoading/>;
  }

  return (
    <ItemModal
      animationType='slide'
      visible={active}
      transparent={true}
      statusBarTranslucent={true}
    >
      <ModalOverlay>
        <DefaultButton onPress={() => closeModal()}>
          <CloseModalArea>
            <CloseModal />
          </CloseModalArea>
        </DefaultButton>
        <ModalContent>
          <ModalDetailsArea>
            <ModalTitle>{item.title}</ModalTitle>
          </ModalDetailsArea>
        </ModalContent>
      </ModalOverlay>
    </ItemModal>
  );
}
