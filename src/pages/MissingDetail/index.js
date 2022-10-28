import React, { useState, useEffect } from 'react';
import PagerView from 'react-native-pager-view';
import { useDispatch, useSelector } from 'react-redux';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

import Modal from '../../components/Modal';
import Loading from '../../components/loading';
import { handleDial } from '../../utils/functions';
import { getMissingPersonPhoto } from '../../store/middleware/missingPerson.middleware';

import styles from './styles';

const MissingDetail = ({ route }) => {
  const [showModalHistory, setShowModalHistory] = useState(false);
  const AnimatedPager = Animated.createAnimatedComponent(PagerView);

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.genericReducer);
  const { missingPersonHistoric, photosMissingPerson } = useSelector(state => state.missingPersonReducer);

  const { person: missingPerson } = route?.params;

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

  const photos = [
    {
      id: 1,
      url: 'https://static.vecteezy.com/ti/vetor-gratis/t2/4607791-cara-de-homem-emotiva-icone-sorridente-personagem-masculino-de-camisa-azul-ilustracao-isolado-no-branco-feliz-humano-psicologico-retrato-emocoes-positivas-usuario-avatar-para-app-web-design-vetor.jpg',
    },
  ];

  const handleGetMissingPersonPhotos = async () => {
    await dispatch(getMissingPersonPhoto(`?pessoas_desaparecidas_id=${missingPerson?.id}&tipo=image`));
  };

  useEffect(() => {
    handleGetMissingPersonPhotos();
  }, [missingPerson]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <AnimatedPager style={styles.wrapperPhoto} initialPage={0} onPageScroll={handler}>
          {photosMissingPerson.length > 0
            ? photosMissingPerson.map(item => (
                <View key={item.id} style={styles.wrapperPhoto}>
                  <Image style={styles.photo} source={{ uri: item.conteudo }} />
                </View>
              ))
            : photos.map(item => (
                <View key={item.id} style={styles.wrapperPhoto}>
                  <Image style={styles.photo} source={{ uri: item.url }} />
                </View>
              ))}
        </AnimatedPager>

        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.text}>{missingPerson?.nome}</Text>
          <View style={styles.separator} />

          <Text style={styles.label}>Data Nascimento</Text>
          <Text style={styles.text}>
            {missingPerson?.data_nascimento && missingPerson?.data_nascimento.split('-').reverse().join('/')}
          </Text>
          <View style={styles.separator} />

          <Text style={styles.label}>Data Desaparecimento</Text>
          <Text style={styles.text}>
            {missingPerson?.data_desaparecimento && missingPerson?.data_desaparecimento.split('-').reverse().join('/')}
          </Text>
          <View style={styles.separator} />

          <Text style={styles.label}>Local Desaparecimento</Text>
          <Text style={styles.text}>{missingPerson?.local_desaparecimento}</Text>
          <View style={styles.separator} />

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
