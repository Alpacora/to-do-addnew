import styled from 'styled-components/native';
import { RectButton, LongPressGestureHandler } from 'react-native-gesture-handler';

export const LongPressContainer = styled(LongPressGestureHandler)``;

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;

  background-color: ${({checked}) => checked ? '#eaeaea' : 'whitesmoke'};
  `;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const LeftArea = styled.View`
  flex: 1;
  `;

export const RightArea = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const Title = styled.Text`
`;

export const DefaultButton = styled.TouchableOpacity``;

export const DeleteItem = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
  align-items: flex-start;
  background-color: orange;
`;

export const CheckedSwipe = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
  align-items: flex-start;
  background-color: gray;
`;
