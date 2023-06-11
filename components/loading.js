import { View, Text, Dimensions, Platform } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { theme } from "../theme";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const Loading = () => {
  return (
    <View
      style={{ height, width }}
      className="-mt-6 flex-row items-center justify-center h-full"
    >
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={theme.background}
      />
    </View>
  );
};

export default Loading;
