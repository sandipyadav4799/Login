import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import logo from '../../../assets/images/logo.jpeg';

const Splashscreen = () => {
    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
            <h2>Autonomous Group</h2>
            <Text>Join with the world</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: '35%',
    },
    logo: {
        width: '40%',
        maxWidth: 120,
        maxHeight: 100,
    }
})

export default Splashscreen