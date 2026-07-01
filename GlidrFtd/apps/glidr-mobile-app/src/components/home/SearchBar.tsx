import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function SearchBar({
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <View style={styles.container}>

      <Feather
        name="search"
        size={22}
        color="#999"
      />

      <TextInput
        placeholder="Search products..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />

    </View>
  );
}

const styles = StyleSheet.create({

container:{

flexDirection:"row",

alignItems:"center",

backgroundColor:"#F5F5F5",

marginHorizontal:20,

marginTop:24,

paddingHorizontal:18,

height:58,

borderRadius:16,

},

input:{

flex:1,

marginLeft:12,

fontSize:16,

color:"#1A1A1A",

}

});