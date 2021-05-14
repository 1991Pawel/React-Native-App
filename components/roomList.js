import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function RoomList({ room }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Text style={styles.listItem}>{room.item.name}</Text>
    </TouchableOpacity>
  );
}

const pressHandler = (id) => {
  console.log(id);
};

const styles = StyleSheet.create({
  list: {},
  listItem: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#5603AD',
    color: '#fff',
  },
});
