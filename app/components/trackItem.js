import { StyleSheet, Text, View, Image } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Themes } from "../../assets/Themes";

export default function TrackItem({
  index,
  imageUrl,
  songTitle,
  artist,
  album,
  duration,
}) {
  return (
    <View style={[styles.item]}>
      <View style={{ width: "5%" }}>
        <Text style={[styles.textSection, { color: Themes.colors.gray }]}>
          {index}
        </Text>
      </View>
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
        style={{ width: "35%", flexDirection: "column", paddingRight: "3%" }}
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
      <View style={{ width: "20%" }}>
        <Text numberOfLines={1} style={styles.textSection}>
          {" "}
          {album}{" "}
        </Text>
      </View>
      <View>
        <Text numberOfLines={1} style={styles.textSection}>
          {" "}
          {millisToMinutesAndSeconds(duration)}{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  textSection: {
    color: Themes.colors.white,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
});
