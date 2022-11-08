import "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewPage from "./app/components/newPage";
import Main from "./app/components/main";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Song details" component={NewPage} />
        <Stack.Screen name="Song preview" component={NewPage} />
      </Stack.Navigator>
    );
  }

  return <NavigationContainer>{MyStack()}</NavigationContainer>;
}
