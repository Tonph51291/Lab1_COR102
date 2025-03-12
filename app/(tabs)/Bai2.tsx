import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemBai2 from "@/components/ItemBai2";

export default function Bai2() {
  const hanldChiTiet = () => {
    alert("Da nhan vao chi tiet");
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "#D3D3D3",
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 20,
      }}
    >
      <ItemBai2
        title="Lịch trình"
        location="Hồ Tràm, Vũng Tàu"
        time="09:00 AM - 12:00 AM, 12/12/2024"
        transport="Xe bus"
        image="https://statictuoitre.mediacdn.vn/thumb_w/640/2017/amanpulo-pamalican-island-philippines-conde-nast-traveller-1dec15-pr-1024x683-1499525260896.jpg"
        timeEnd="21:00 - 22:00"
      />
      <ItemBai2
        title="Khách sạn"
        location="234 Quang Trung, Hồ Chí Minh"
        time="06:00 AM - 12:00 AM"
        tenKhachSan="Hồng quỳnh"
        buttonTitle="CHI TIẾT"
        onClick={hanldChiTiet}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
