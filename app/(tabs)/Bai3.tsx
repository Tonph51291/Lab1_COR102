import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ItemInput from "@/components/ItemInput";

export default function Bai3() {
  const [email, setEmail] = useState(""); // State lưu dữ liệu input
  const [pass, setPass] = useState(""); // State lưu dữ liệu input
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const checkMail = () => {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setErrorEmail("Email không được để trống");
    } else if (!emailRegex.test(email)) {
      setErrorEmail("Email không hợp lệ");
    } else {
      setErrorEmail("");
    }
  };

  const checkPass = () => {
    if (!pass) {
      setErrorPass("Mật khẩu không được để trống");
    } else if (pass.length < 6) {
      setErrorPass("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
      setErrorPass("");
    }
  };
  return (
    <View style={styles.container}>
      <ItemInput
        placeholder="Nhập vào email"
        value={email}
        onTextChange={(text) => {
          checkMail();
          setEmail(text);
        }} // Cập nhật state
        title="Email"
        error={errorEmail}
      />
      <ItemInput
        title="Pass word"
        placeholder="Nhập vào password"
        value={pass}
        onTextChange={(text) => {
          setPass(text);
          checkPass();
        }} // Cập nhật state
        error={errorPass}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
