import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function UIHeader({ iconLeft, iconRight, title }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.iconLeft}>
        {iconLeft ? (
          <TouchableOpacity style={styles.buttonLeft}>
            <Image source={iconLeft} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View style={styles.textCenter}>
        <Text>{title}</Text>
      </View>
      <View style={styles.iconRight}>
        <TouchableOpacity>
          <Image source={iconRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
  },
  iconLeft: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  iconRight: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  textCenter: {
    flex: 2,

    justifyContent: "center",
    alignItems: "center",
  },

  buttonLeft: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 16,
  },
});
