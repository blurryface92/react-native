import { View, Text, SafeAreaView ,StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const List = () => {
    const [count, setCount] = React.useState(0);
    const onPress = () => {
        setCount(count + 1);
    };
    const clear = () => {
        setCount(0);    
    }
    

  return (
    <SafeAreaView style={list.container}>
        <Text style={list.Count}>{count}</Text>
        <View style={list.btnContainer}>
        <TouchableOpacity style={list.btn} onPress={onPress}>
        <Text style={list.text}>Press Here</Text>
      </TouchableOpacity>
        <TouchableOpacity style={list.btn} onPress={clear}>
        <Text style={list.text}>Clear</Text>
      </TouchableOpacity>
        </View>
        
      


    </SafeAreaView>
      
  );
};
const list = StyleSheet.create({
    btnContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        marginTop:20,

    },
    Count:{
        fontSize:120,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    btn:{
        backgroundColor:"black",
        padding:10,
        margin:10,
        borderRadius:10,

    },
    text:{
        textAlign:'center',
        color:"white",
    },
    

});
export default List;
