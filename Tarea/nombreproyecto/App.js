import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.box1}>
      <View style={styles.box2}>
        <View style={styles.box12}>
        <View style={styles.box13}>
        <View style={styles.box14}>
          <Text style={styles.title}>GOOGLE</Text>
        </View>
        </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title}>Button 1</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1:{
    backgroundColor: 'black',
    width: 300,
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: '#2F76C6',
    width: 250,
    height: 250,
    marginBottom:30,
    borderRadius:25,
  },
  box12:{
    backgroundColor: '#DC8736',
    width: 220,
    height: 220,
    alignItems:'center',
    justifyContent:'center',
    transform: [{ translateX: 15 }, { translateY: 15 }],
    borderRadius:20,
  },
  box13:{
    backgroundColor: '#F02222',
    width: 180,
    height: 180,
    alignItems:'center',
    justifyContent:'center',
    transform: [{ translateX: 2 }, { translateY: 2}],
    borderRadius:20,
  },
  box14:{
    backgroundColor: '#210B0B',
    width: 150,
    height: 150,
    alignItems:'center',
    justifyContent:'center',
    transform: [{ translateX: 1 }, { translateY: 1 }],
    borderRadius:20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
    marginBottom: 50,
    marginTop: 20,
  },
  button:{
    borderRadius: 2,
    width: 210,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#1C1F71',
    color: 'white',
    marginBottom: 15,
    height:30,
    padding:1
  },
  title:{
    color:'white'
  }
  
  
});
