import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { dark } from "../../assets/ContantsColor";

function ProfileBoard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../../assets/profile-icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.loremIpsum}>
            Name: FullName{"\n"}Age: 00{"\n"}RelationShip: none{"\n"}contact:
            info
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // paddingTop: 10
  },
  rect: {
    height: 158,
    borderRadius: 45,
    shadowColor: "rgba(0,0,0,3)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: dark.red,
    flexDirection: "row"
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "rgba(131,26,35,1)",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 77,
    width: 155,
    fontSize: 16,
    marginLeft: 22,
    marginTop: 27
  },
  imageRow: {
    height: 130,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 23,
    marginTop: 14
  }
});

export default ProfileBoard;
