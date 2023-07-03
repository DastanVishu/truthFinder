import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { dark } from "../../assets/ContantsColor";
// import Svg, { Ellipse } from "react-native-svg";

function FrequentlyCalles(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <Text style={styles.gggggg}>Most Frequently called</Text>
            <Text style={styles.callNumberName}>
              Name: yeash{"\n"}number: 0000000000{"\n"}number of calls: 00{"\n"}
              Time Duration: 000hr
            </Text>
          </View>
          <View style={styles.rect3}>
            <View style={styles.ellipseStack}>
              {/* <Svg viewBox="0 0 102.17 97.66" style={styles.ellipse}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(218,199,199,1)"
                  cx={51}
                  cy={49}
                  rx={51}
                  ry={49}
                ></Ellipse>
              </Svg> */}
              <Text style={styles.pie}>Pie</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  rect: {
    // width: 349,
    // height: 120,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius:18,
        shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 10,
    shadowOpacity: 0.38,
    shadowRadius: 20
  },
  rect2: {
    flex: 3,
    backgroundColor: dark.red,
    // height: ,
    // width: 199,
    borderRadius: 16,
  },
  gggggg: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 167,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 8
  },
  callNumberName: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 68,
    width: 167,
    marginLeft: 8
  },
  rect3: {
    flex: 2,
    // backgroundColor: "rgba(255,255,255,1)",
    height: 116,
    width: 150
  },
  ellipse: {
    top: 0,
    left: 0,
    // width: 102,
    height: 98,
    position: "absolute"
  },
  pie: {
    top: 32,
    left: 35,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 34,
    width: 33,
    fontSize: 20
  },
  ellipseStack: {
    width: 102,
    height: 98,
    marginTop: 9,
    marginLeft: 22
  },
  rect2Row: {
    height: 116,
    flexDirection: "row",
    flex: 1
  }
});

export default FrequentlyCalles;
