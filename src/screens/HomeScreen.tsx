import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import SkeletonLoader from '../components/SkeletonLoader';
import styles from '../styles/homestyles'
import { index } from '../assets';

type User = {
  id: number;
  name: string;
  role: string;
};

const FAKE_DATA = Array.from({ length: 5 });

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, name: 'Alice', role: 'Designer' },
        { id: 2, name: 'Bob', role: 'Developer' },
      ]);
      setLoading(false);
    }, 2500);
  }, []);

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.realCard}>
      <View style={styles.realContentRow}>
        <View style={styles.realAvatar} />
        <View>
          <View style={styles.realLine} />
          <View style={styles.realLineHalf} />
        </View>
      </View>
    </View>
  );

  const renderFooterItem = (tabName: string) => {
    let iconSource;
    switch (tabName) {
      case 'Home':
        iconSource = index.home;
        break;
      case 'Assets':
        iconSource = index.assets;
        break;
      case 'Trade':
        iconSource = index.trade;
        break;
      case 'Explore':
        iconSource = index.explore;
        break;
      default:
        iconSource = index.home;
    }

    return (
      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => setActiveTab(tabName)}
      >
        <Image
          source={iconSource}
          style={[
            styles.footerIcon,
            activeTab === tabName ? styles.activeFooterIcon : styles.inactiveFooterIcon
          ]}
        />
        <Text style={[
          styles.footerText,
          activeTab === tabName ? styles.activeFooterText : styles.inactiveFooterText
        ]}>
          {tabName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={index.profileicon}
            style={styles.profileIcon}
          />
          <Text style={styles.profileName}>Nate Diggity</Text>
        </View>
        <View style={styles.headerIcons}>
            <TouchableOpacity>
          <Image
            source={index.scanner}
            style={styles.headerIcon}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={index.secure}
            style={[styles.headerIcon, { marginLeft: 20 }]}
          />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList<User | undefined>
        data={loading ? FAKE_DATA.map(() => undefined) : data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index, item }) =>
          loading ? (
            <SkeletonLoader type={index % 2 === 0 ? 'card' : 'row'} />
          ) : item ? (
            renderItem({ item })
          ) : null
        }
        contentContainerStyle={styles.content}
      />

      <View style={styles.footer}>
        {renderFooterItem('Home')}
        {renderFooterItem('Assets')}
        {renderFooterItem('Trade')}
        {renderFooterItem('Explore')}
      </View>
    </View>
  );
};

export default HomeScreen;