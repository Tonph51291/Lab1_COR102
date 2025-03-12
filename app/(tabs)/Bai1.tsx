import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UIHeader from "@/components/UIHeader";

export default function Bai1() {
  return (
    <View>
      <UIHeader
        iconLeft={require("../../assets/images/leftChevron.png")}
        iconRight={require("../../assets/images/man.png")}
        title={"Home"}
      />
      <UIHeader
        iconLeft={require("../../assets/images/leftChevron.png")}
        title={"Home"}
      />
      <UIHeader iconLeft={require("../../assets/images/leftChevron.png")} />
    </View>
  );
}

const styles = StyleSheet.create({});
