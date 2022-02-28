import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersProvider from "./src/context";
import Home from "./src/components/home";
import Details from "./src/components/productdetails";
import COLORS from "./src/colors/colors";
const stack = createNativeStackNavigator();
const App = () => {
  return (
    <UsersProvider>
      <NativeBaseProvider>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />
        <NavigationContainer>
          <stack.Navigator initialRouteName="home">
            <stack.Screen  name="home" component={Home} />

            <stack.Screen name="details" component={Details} />
          </stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UsersProvider>
  );
};
export default App;
