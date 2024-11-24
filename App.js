import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Salam kenal saya raka sandhheo rambani dengan NPM 223510641</Text>

      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', 
  },
  centerText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 50, 
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'brown', 
  },
  box2: {
    backgroundColor: 'grey', 
  },
});

export default App;
