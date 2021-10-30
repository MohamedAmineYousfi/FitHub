import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Coachs = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
            onPress={() => navigation.navigate('Coeaches')}
            style={{ fontSize: 26, fontWeight: "bold" }}
            >Coachs Are here</Text>
        </View>
    )
}

export default Coachs

const styles = StyleSheet.create({})