import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface SectionCardProps {
  title: string;
  location: string;
  time?: string;
  transport?: string;
  image?: string;
  buttonTitle?: string;
  timeEnd?: string;
  tenKhachSan?: string;
  onClick?: () => void;
}
export default function ItemBai2({
  title,
  location,
  time,
  transport,
  image,
  buttonTitle,
  timeEnd,
  tenKhachSan,
  onClick,
}: SectionCardProps) {
  console.log(image);
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
      {title == "Lịch trình" ? (
        <View style={styles.container}>
          {location && (
            <>
              <ItemText textTitle="Địa điểm" textName={location} />{" "}
            </>
          )}

          {time && (
            <>
              <ItemText textTitle="Thời gian" textName={time ?? ""} />{" "}
            </>
          )}

          {transport && (
            <>
              <ItemText
                textTitle="Phương tiện di chuyển"
                textName={transport ?? ""}
              />{" "}
            </>
          )}

          {timeEnd && (
            <>
              <ItemText textTitle="Thời gian" textName={timeEnd} />
            </>
          )}

          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 200 }}
          />
        </View>
      ) : (
        <View style={styles.container}>
          {tenKhachSan && (
            <>
              <ItemText
                textTitle="Tên khách sạn"
                textName={tenKhachSan ?? ""}
              />{" "}
            </>
          )}
          {location && (
            <>
              <ItemText textTitle="Địa điểm" textName={location} />{" "}
            </>
          )}

          {time && (
            <>
              <ItemText textTitle="Thời gian" textName={time ?? ""} />{" "}
            </>
          )}

          <Button title={"" + buttonTitle} onPress={onClick} />
        </View>
      )}
    </View>
  );
}

const ItemText = ({
  textTitle,
  textName,
}: {
  textTitle: string;
  textName: string;
}) => (
  <View style={{ marginVertical: 10 }}>
    <Text style={styles.title}>{textTitle}</Text>
    <Text style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}>
      {textName}
    </Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textTitle: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    color: "gray",
    fontSize: 18,
  },
});
