import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  
  background-color: whitesmoke;
  `;

export const Content = styled.View`
  width: 100%;
  `;

export const AddNewArea = styled.View`
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;

  padding: 0 20px;
  border-radius: 30px;
  margin-bottom: 20px;
`;

export const AddNewInput = styled.TextInput`
  flex: 1;
  width: 100%;

  padding: 0 20px;
  border-radius: 30px;
  border-width: 2px;
  border-color: gray;
  background-color: whitesmoke;
`;

export const TasksArea = styled.FlatList``;

export const LoadingIcon = styled.ActivityIndicator``;
