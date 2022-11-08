import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Themes } from "../../assets/Themes";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

export default function TrackItem({
  imageUrl,
  songTitle,
  artist,
  album,
  duration,
  preview_url,
  external_url,
  navigation,
}) {
  return (
    <View style={[styles.item]}>
      <View
        style={{
          width: "5%",
          justifyContent: "center",
          paddingBottom: "5%",
          marginRight: "2%",
        }}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("Song preview", { url: preview_url })
          }
        >
          <Ionicons
            name="play-circle"
            size={20}
            color={Themes.colors.spotify}
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          />
        </Pressable>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate("Song details", { url: external_url })
        }
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <View style={{ borderColor: "green", width: "25%" }}>
          <Image
            style={{
              width: 70,
              height: 70,
              marginLeft: "5%",
              marginBottom: "15%",
              justifyContent: "center",
              resizeMode: "contain",
            }}
            source={{ uri: imageUrl }}
          />
        </View>
        <View
          style={{ width: "35%", flexDirection: "column", paddingRight: "2%" }}
        >
          <Text numberOfLines={1} style={styles.textSection}>
            {songTitle}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.textSection, { color: Themes.colors.gray }]}
          >
            {artist}
          </Text>
        </View>
        <View style={{ width: "22%" }}>
          <Text numberOfLines={1} style={styles.textSection}>
            {album}
          </Text>
        </View>
        <View>
          <Text numberOfLines={1} style={styles.textSection}>
            {" "}
            {millisToMinutesAndSeconds(duration)}{" "}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
  },
  textSection: {
    color: Themes.colors.white,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
});
