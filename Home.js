import React from 'react';
import {View,  StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default function Home() {
  return (
    <View style={styles.container}>
      <Calendar
       onDayPress={day => {
       console.log('selected day', day);
     }} style={{border:'solid',borderRadius:10,paddingHorizontal:20,borderBottomColor:'grey',borderLeftColor:'grey',shadowColor: 'grey',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5}}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
