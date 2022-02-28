import { Box, FlatList, Image, Text } from "native-base";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const Grid = ({ list ,navigation}) => {
  const renderitems = ({ item: item }) => {
    return (
      <TouchableOpacity
        style={gridstyle.card}
        onPress={() => {
          navigation.navigate({
            name: "details",
            params: {
              id: item.id,
            },
          });
        }}
      >
        <Image alt="img" source={{ uri: item.image }} style={gridstyle.image} />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        style={gridstyle.grid}
        data={list}
        renderItem={renderitems}
        keyExtractor={(_, index) => `${index}`}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};
export default Grid;

const gridstyle = StyleSheet.create({
  grid: {
    paddingHorizontal: 30,
  },
  image: {
    width: "50%",
    height: "50%",
   
  },
  card: {
    flex: 2,
    height: 219,
  },
});
