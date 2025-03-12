import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ItemInput from "@/components/ItemInput";

export default function Bai3() {
  const [email, setEmail] = useState(""); // State lưu dữ liệu input
  const [pass, setPass] = useState(""); // State lưu dữ liệu input

  return (
    <View style={styles.container}>
      <ItemInput
        placeholder="Nhập vào email"
        value={email}
        onTextChange={(text) => setEmail(text)} // Cập nhật state
      />
      <ItemInput
        placeholder="Nhập vào email"
        value={pass}
        onTextChange={(text) => setPass(text)} // Cập nhật state
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
