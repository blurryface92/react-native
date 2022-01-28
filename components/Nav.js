import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const Nav = () => {
    return (
        <SafeAreaView style={nav.nav}>
            <Text style={nav.text}>nub counter</Text>
        </SafeAreaView>
    );
};
const nav = StyleSheet.create({
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
        borderBottomColor: 'black',
        backgroundColor:"black",
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        
    },
});
export default Nav;
  