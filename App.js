import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewPage from "./app/components/newPage";
import Main from "./app/components/main";
import { Themes } from "./assets/Themes";

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
        <Stack.Screen
          name="Song details"
          component={NewPage}
          options={{
            headerStyle: {
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle: { color: Themes.colors.white },
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Song preview"
          component={NewPage}
          options={{
            headerStyle: {
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle: { color: Themes.colors.white },
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    );
  }

  return <NavigationContainer>{MyStack()}</NavigationContainer>;
}
