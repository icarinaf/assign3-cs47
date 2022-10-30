import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";
import { Images } from "../../assets/Themes";

export default function SpotifyAuthButton({ handleClick }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={(event) => handleClick()}
        style={{ flexDirection: "row" }}
      >
        <Image style={styles.imageStyle} source={Images.spotify} />
        <Text
          style={{
            color: "white",
            fontFamily: "Helvetica-Bold",
            fontSize: 13,
          }}
        >
          {"  "}
          CONNECT WITH SPOTIFY
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.spotify,
    borderRadius: 9999,
    paddingHorizontal: "4%",
    paddingVertical: "2%",
  },
  imageStyle: {
    height: "100%",
    width: "4%",
  },
});
