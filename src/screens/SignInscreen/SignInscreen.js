import React, {useState} from 'react'
import { View, Text, Image, useWindowDimensions} from 'react-native'
import CustomInput from '../components/CustomInput/CustpmInput'

    const SignInscreen = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const {height} = useWindowDimensions();

        return (
            <View style={styles.root}>
                <Text>Sign</Text>
                <CustomInput placeholder="Username" />
                <CustomInput />
            </View>
        );
    };

    const styles = StyleSheet.create({
        root:{
            alignItems: 'center',
            padding: 20,
        },
    });

export default SignInscreen;