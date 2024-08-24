import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatListCallBackend = (): React.JSX.Element => {
  //state for user & load
  const [data, setData] = useState<User[]>([]); //calls form backend
  const [loading, setLoading] = useState(true);

  //useEffect for API when component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //_renderItem for FlatList
  const _renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {loading ? ( //ถ้ายังโหลดข้อมูลอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FlatListCallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#c5ff91",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
