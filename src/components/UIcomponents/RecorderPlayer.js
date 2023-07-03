import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSlider from "./MaterialSlider";
import { dark } from "../../assets/ContantsColor";

function RecorderPlayer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect5}>
        <View style={styles.rect6}>
          <View style={styles.re6Stack}>
            <Text style={styles.re6}>Recently Recorded Call</Text>
            <Text style={styles.loremIpsum}>
              Name: yeash{"\n"}number: 0000000000000{"\n"}calling time: 00:00am
            </Text>
          </View>
        </View>
        <View style={styles.rect7}>
          <MaterialSlider style={styles.materialSlider}></MaterialSlider>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  rect5: {
    // width: 349,
    height: 149,
    backgroundColor: dark.red,
    borderRadius: 19,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 10,
    shadowOpacity: 0.63,
    shadowRadius: 10
  },
  rect6: {
    flex: 0.65,
    height: 97,
    width: 349
  },
  re6: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 26,
    width: 313,
    fontSize: 18
  },
  loremIpsum: {
    top: 25,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 313
  },
  re6Stack: {
    width: 313,
    height: 74,
    marginTop: 10,
    marginLeft: 18
  },
  rect7: {
    flex: 0.35,
    height: 52,
    width: "100%"
  },
  materialSlider: {
    height: 30,
    width: 304,
    marginTop: 13,
    marginLeft: 23
  }
});

export default RecorderPlayer;
