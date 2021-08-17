import React, { useState, useRef, useReducer } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { State, Swipeable } from 'react-native-gesture-handler';
import {
  Container,
  Content,
  LeftArea,
  RightArea,
  Title,
  LongPressContainer,
  BlurEffect,
  DefaultButton,

  DeleteItem,
  CheckedSwipe,
} from './styles';


export function ItemList({ id, checked, title, date, hours, itemPress, update }) {
  const SwipeableRef = useRef();
  const [active, setActive] = useState(false);

  function handlerChecked() {
    setActive(!active);
    update({ id, checked });
  }

  function Remove() {
    return (
      <DeleteItem>
        <Title>Removendo...</Title>
      </DeleteItem>
    );
  }

  return (
    <Swipeable
      renderLeftActions={Remove}
      renderRightActions={() => <CheckedSwipe><Title>Modal aberto!</Title></CheckedSwipe>}
      onSwipeableRightOpen={() => { itemPress(id), SwipeableRef.current.close() }}
      ref={SwipeableRef}
    >
      <LongPressContainer
        onHandlerStateChange={(event) => {
          if (event.nativeEvent.state === State.ACTIVE) {
            itemPress(id);
          }
        }}
      >
        <Container checked={checked} onPress={() => handlerChecked()} >
          <Content>
            <LeftArea>
              <Title>{`${title} \n ${date.day}/${date.month < 10 ? '0' + date.month : date.month}/${date.year} - ${hours.hour}:${hours.minutes < 10 ? '0' + hours.minutes : hours.minutes}`}</Title>
            </LeftArea>
            <RightArea>
              {checked ?
                <MaterialIcons name="radio-button-checked" size={24} color="black" />
                :
                <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
              }
            </RightArea>
          </Content>
        </Container>
      </LongPressContainer>
    </Swipeable>
  );
}
