import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyDataScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>My Data Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyDataScreen;
