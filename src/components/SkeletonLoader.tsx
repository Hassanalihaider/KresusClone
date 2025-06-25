import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '../styles/homestyles';


type SkeletonLoaderProps = {
  type: 'card' | 'row';
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type }) => {
  if (type === 'card') {
    return (
      <View style={styles.card}>
        <View style={styles.headerLines}>
          <View style={styles.shortLine} />
          <View style={styles.mediumLine} />
          <View style={styles.mediumLine} />
        </View>
        <View style={styles.iconRow}>
          {[...Array(5)].map((_, i) => (
            <View key={i} style={styles.squareIcon} />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.rowCard}>
      <View style={styles.avatar} />
      <View style={styles.textBlock}>
        <View style={styles.line} />
        <View style={styles.lineHalf} />
      </View>
      <View style={styles.button} />
    </View>
  );
};

export default SkeletonLoader;