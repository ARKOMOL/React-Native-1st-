import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React, {useState,useEffect} from 'react'
import Country from './Country';
import { TextInput } from 'react-native-web';




export default function Countires() {
    const [countries,setCountries] = useState([]);
    useEffect (()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => {
            // console.log(data);
            setCountries(data)
        })
    },[])
  return (
    <View>
      <Text style={styles.header}>Visiting Countires: {countries.length} </Text>
     <TextInput style={styles.input}>

     </TextInput>
      <ScrollView>
            {
                countries.slice(0,10).map(country =><Country country={country}></Country>)
            }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
})