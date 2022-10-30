import {
  FlatList,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./app/components/spotifyAuthButton";
import TrackItem from "./app/components/trackItem";
import { Images } from "./assets/Themes";
import { useEffect, useState } from "react";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  const [count, setCount] = useState(0);

  let contentDisplayed = null;

  const handleClick = () => {
    getSpotifyAuth();
  };

  const renderTrackItem = ({ item, index }) => (
    <TrackItem
      index={index}
      imageUrl={item.album.images[1].url}
      songTitle={item.name}
      artist={item.artists[0].name}
      album={item.album.name}
      duration={item.duration_ms}
    />
  );

  useEffect(() => {
    function loopBreak() {
      setCount(count + 1);
    }
  }, []);

  if (token) {
    contentDisplayed = (
      <View style={styles.topBar}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: "5%",
          }}
        >
          <Image style={styles.imageStyle} source={Images.spotify} />
          <Text
            style={{
              color: "white",
              fontFamily: "Helvetica-Bold",
              fontSize: 20,
            }}
          >
            {"  "}My Top Tracks
          </Text>
        </View>
        <FlatList
          data={tracks}
          renderItem={(item) => renderTrackItem(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  } else contentDisplayed = <SpotifyAuthButton handleClick={handleClick} />;

  return (
    <SafeAreaView
      style={[
        styles.container1,
        { justifyContent: count === 0 ? "center" : "flex-start" },
      ]}
    >
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: Themes.colors.background,
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    padding: "4%",
  },
  imageStyle: { height: 25, width: 25 },
});
