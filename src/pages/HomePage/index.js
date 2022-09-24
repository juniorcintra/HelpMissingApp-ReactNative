import React, { useRef } from 'react';
import PagerView from 'react-native-pager-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

import { colors } from '../../styles/theme';
import styles from './styles';

const HomePage = () => {
  const viewPager = useRef(null);

  const handleClose = () => {};
  const handleInfo = () => {};
  const handleSucess = () => {};

  const photos = [
    { id: 1, url: 'https://images.stockfreeimages.com/10436/sfixl/104361096.jpg' },
    { id: 2, url: 'https://images.stockfreeimages.com/126/sfixl/1267396.jpg' },
    { id: 3, url: 'https://images.stockfreeimages.com/170/sfixl/1700936.jpg' },
    { id: 4, url: 'https://images.stockfreeimages.com/2714/sfixl/27141815.jpg' },
    {
      id: 5,
      url: 'https://thumbs.dreamstime.com/z/female-farmer-carries-crate-ripe-green-bell-peppers-backyard-farm-256744455.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <PagerView style={styles.container} initialPage={1} scrollEnabled={false} ref={viewPager}>
        {photos.map(item => (
          <View key={item.id} style={styles.wrapperPhoto}>
            <ImageBackground style={styles.photo} source={{ uri: item.url }}>
              <TouchableOpacity style={styles.buttonPrevPhoto} onPress={() => viewPager.current.setPage(item.id - 1)}>
                <Icon name='arrow-back-ios' size={50} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonNextPhoto} onPress={() => viewPager.current.setPage(item.id + 1)}>
                <Icon name='arrow-forward-ios' size={50} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        ))}
      </PagerView>

      <View style={styles.wrapperButton}>
        <TouchableOpacity style={[styles.button, styles.danger]} onPress={handleClose}>
          <Icon name='close' color={colors.danger} size={60} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.infor]} onPress={handleInfo}>
          <Icon name='priority-high' color={colors.infor} size={60} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.sucess]} onPress={handleSucess}>
          <Icon name='done' color={colors.sucess} size={60} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
