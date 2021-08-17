import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Content,
  AddNewArea,
  AddNewInput,
  TasksArea,
  LoadingIcon,

} from './styles';

import { ItemList } from '../../components/ItemList';
import { ItemDivider } from '../../components/ItemDivider';
import { ViewItem } from '../../components/ViewItem';
import { FakeData } from '../../utils/Data';

export function Home() {
  const [loadingList, setLoadingList] = useState(true);

  const [listData, setListData] = useState([]);
  const [listSize, setListSize] = useState(0);

  const [addNewContent, setAddNewContent] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [openedItemID, setOpenedItemID] = useState([]);

  useEffect(() => {
    // AsyncStorage.removeItem('listKey');
    // AsyncStorage.removeItem('teste');
    handlerLoadList();
  }, [])

  useEffect(() => {
    handlerSaveList();
  }, [listData])

  function handlerAddNew(newData) {
    setListData([...listData, newData]);
    setListSize(listSize + 1);
    setAddNewContent('');
  }

  async function handlerSaveList() {
    const result = await AsyncStorage.setItem('listKey', JSON.stringify(listData));
  }

  async function handlerLoadList() {
    const result = await AsyncStorage.getItem('listKey');
    if (result != null) {
      setListSize(Object.keys(JSON.parse(result)).length);
      setListData(JSON.parse(result));
    }
    else {
      console.log('Você não possui nenhuma lista salva');
    }
    setLoadingList(false);
  }

  function handlerOpenItem(item) {
    if (!modalVisible) {
      setOpenedItemID(item);
      setModalVisible(true);
    } else {
      setOpenedItemID(null);
      setModalVisible(false);
    }
  }

  function handlerUpdateItemList(item) {
    let newItem = listData;
    newItem[item.id].checked = !newItem[item.id].checked;
    setListData([...newItem]);
  }

  return (
    <Container>
      <Content>
        <AddNewArea>
          <AddNewInput
            placeholder='AddNew...'
            onSubmitEditing={() =>
              handlerAddNew({
                id: listSize,
                active: true,
                checked: false,
                title: addNewContent,
                date: { day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear() },
                hours: { hour: new Date().getHours(), minutes: new Date().getMinutes() }
              })}
            onChangeText={(v) => setAddNewContent(v)}
            value={addNewContent}
          />
        </AddNewArea>

        {loadingList ?
          <LoadingIcon size='large' color='blue' />
          :
          <TasksArea
            data={listData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemList id={item.id} checked={item.checked} title={item.title} date={item.date} hours={item.hours} itemPress={handlerOpenItem} update={handlerUpdateItemList} />
            )}
            ItemSeparatorComponent={() => <ItemDivider />}
          >
          </TasksArea>
        }

      </Content>

      <ViewItem active={modalVisible} closeModal={handlerOpenItem} item={listData[openedItemID]} />

    </Container>
  );
}
