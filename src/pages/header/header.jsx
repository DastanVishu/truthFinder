import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { dark } from '../../assets/ContantsColor';
import SelectDropdown from 'react-native-select-dropdown'

const Header= ({props}) => {
    console.log(props)
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
return (
    <SafeAreaView>
        <View style={{
            ...styles.container,
        }}>
            <View style={styles.flexContainer}>
                <Row>
                    <Col numRows={1}>
                        <Image source={require("../../assets/icon.png")} style={{ marginHorizontal:10, height:50, width:40}} />
                    </Col>
                    <Col numRows={3}>
                    <Text style={styles.text}>{props.route.name}</Text>
                    </Col>
                    <Col numRows={2}>
                        <SelectDropdown
                            // search
                            defaultButtonText='Target'
                            buttonStyle={{
                                width: "100%",
                                backgroundColor: dark.white,
                            }}
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            renderDropdownIcon={isOpened => {
                                return <Icon name={isOpened ? 'chevron-up-outline' : 'chevron-down-outline'} color={'#444'} size={18} />;
                              }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        />
                    </Col>
                </Row>
                
            </View>
        </View>
    </SafeAreaView>
)
}
const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
)

// RN Code
const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: dark.white,
        height: 56,
        shadowColor: dark.themeColor,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    flexContainer: {
        flex: 1,
        marginHorizontal: "auto"
    },
    row: {
        borderColor:  "#fff",
        flexDirection: "row",
        height: "100%"
    },
    "1col":  {
        flex:  1,
        justifyContent: 'center',
        padding: 2,
      },
    "2col":  {
        flex:  2,
        justifyContent: 'center',
        padding: 2,
    },
    "3col":  {
        flex:  3,
        justifyContent: 'center',
        padding: 2,
    },
    text: {
        color: dark.themeColor
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})


export default Header;