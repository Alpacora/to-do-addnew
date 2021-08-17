import { StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';

export const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '25px' : 0};
`;

