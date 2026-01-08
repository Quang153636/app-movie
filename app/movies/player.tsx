import { View, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { useRef, useEffect } from "react";

export default function Player() {
    const { url } = useLocalSearchParams();
    const videoRef = useRef(null);

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                style={styles.video}
                source={{ uri: url as string }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    video: {
        width: "100%",
        height: "100%",
    },
});
