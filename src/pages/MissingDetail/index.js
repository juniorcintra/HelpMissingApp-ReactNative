import React, { useState, useCallback, useLayoutEffect } from 'react';
import { format } from 'date-fns';
import PagerView from 'react-native-pager-view';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Loading from '../../components/loading';
import { handleDial } from '../../utils/functions';
import { getHistoricMissingPerson } from '../../store/middleware/missingPerson.middleware';

import styles from './styles';

const MissingDetail = ({ navigation, route }) => {
  const [showModalHistory, setShowModalHistory] = useState(false);

  const dispatch = useDispatch();
  const { setOptions } = useNavigation();
  const { loading } = useSelector(state => state.genericReducer);
  const { missingPersonHistoric } = useSelector(state => state.missingPersonReducer);
  const { user } = useSelector(state => state.userReducer);

  const { person: missingPerson, photosPerson: photosMissingPerson } = route?.params;

  console.log('detail', missingPerson);

  const AnimatedPager = Animated.createAnimatedComponent(PagerView);

  const usePagerScrollHandler = (handlers, dependencies) => {
    const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
    const subscribeForEvents = ['onPageScroll'];

    return useEvent(
      event => {
        'worklet';
        const { onPageScroll } = handlers;
        if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
          onPageScroll(event, context);
        }
      },
      subscribeForEvents,
      doDependenciesDiffer,
    );
  };

  const handler = usePagerScrollHandler({
    onPageScroll: () => {
      'worklet';
    },
  });


  useLayoutEffect(() => {
    setOptions({
      headerRight: () =>
        missingPersonHistoric.length > 0 && (
          <TouchableOpacity activeOpacity={0.6} onPress={() => setShowModalHistory(true)} style={{ marginRight: 20 }}>
            <Icon name='history' size={30} color='#000' />
          </TouchableOpacity>
        ),
    });
  }, []);

  const handleGetHistoricMissingPersons = async () => {
    await dispatch(
      getHistoricMissingPerson(
        `?pessoas_desaparecidas_id=${missingPerson?.id}&tipo_historico=vi&usuarios_id=${user?.id}`,
      ),
    );
  };

  useFocusEffect(
    useCallback(() => {
      handleGetHistoricMissingPersons();
    }, []),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <AnimatedPager style={styles.wrapperPhoto} initialPage={0} onPageScroll={handler}>
          {photosMissingPerson.map(item => (
            <View key={item.id} style={styles.wrapperPhoto}>
              <Image style={styles.photo} source={{ uri: item.conteudo }} />
            </View>
          ))}
        </AnimatedPager>

        <View style={styles.form}>
          <Text>{missingPerson?.nome}</Text>
          <Text>{missingPerson?.data_nascimento && new Date(missingPerson?.data_nascimento)}</Text>
          <Text>{missingPerson?.data_desaparecimento && new Date(missingPerson?.data_desaparecimento)}</Text>
          <Text>{missingPerson?.local_desaparecimento}</Text>

          <Text style={styles.label}>Contatos</Text>
          <ScrollView style={styles.scrollFeatures} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperButtomFeatures}>
              {missingPerson?.contatos?.split(',').map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.6} onPress={() => handleDial(item)}>
                  <View key={index} style={styles.buttomFeatures}>
                    <Text style={styles.buttomTextFeatures}>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <Text style={styles.label}>Características</Text>
          <ScrollView style={styles.scrollFeatures} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperButtomFeatures}>
              {missingPerson?.caracteristicas?.split(',').map((item, index) => (
                <View key={index} style={styles.buttomFeatures}>
                  <Text style={styles.buttomTextFeatures}>{item}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <Text style={styles.label}>Vestimenta do Desaparecimento</Text>
          <View style={styles.wrapperClothing}>
            {missingPerson?.vestimenta_desaparecimento?.split(',').map((item, index) => (
              <View key={index} style={styles.rowClothing}>
                <View style={styles.iconClothing} />
                <Text style={styles.textClothing}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Modal do histórico do desaparecido */}
      <Modal show={showModalHistory} setShowModal={setShowModalHistory}>
        <View style={styles.contentModal}>
          <Text style={styles.TitleModalHistory}>Histórico do Desaparecido</Text>

          <FlatList
            data={missingPersonHistoric}
            style={styles.flatListHistory}
            keyExtractor={item => item?.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separatorModalHistory} />}
            renderItem={({ item }) => (
              <View>
                <View style={styles.rowModalHistory}>
                  <Text style={styles.dateModalHistory}>{item?.date}</Text>
                  <Text style={styles.andressModalHistory}>{item?.andress}</Text>
                </View>
                <View>
                  <Text style={styles.descriptionModalHistory}>{item?.description}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </Modal>
      <Loading show={loading} />
    </ScrollView>
  );
};

export default MissingDetail;
