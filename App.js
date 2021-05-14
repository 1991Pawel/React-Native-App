import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';
import Header from './components/header';
import RoomsList from './components/roomList';

// Initialize Apollo Client

const token = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MjMxOTQyMTksImlhdCI6MTYyMDc3NTAxOSwiaXNzIjoiY2hhdGx5IiwianRpIjoiNDk5Y2JmOGMtZGM1Yi00MjFlLWI2ZTEtN2Q2NzFkYTExZjJiIiwibmJmIjoxNjIwNzc1MDE4LCJzdWIiOiI2OGExYmE4ZC01MWE1LTQzYjYtYmEzOS01NzVjOWVmZWEyMGQiLCJ0eXAiOiJhY2Nlc3MifQ.CBFEmWzenI8TUDzJfJkDfBJWfTXVBkJ-QOKh-AFfPTyl3-f62flLFSsMWxjivW2NzDaYfmNiWI1Tmkgfg9mMzw`;

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

export default function App() {
  const rooms = [
    {
      id: 0,
      name: 'room first',
    },
    {
      id: 1,
      name: 'room secound',
    },
    {
      id: 2,
      name: 'room third',
    },
  ];

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Header />
        <FlatList
          data={rooms}
          renderItem={(room) => <RoomsList room={room} />}
        />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));
