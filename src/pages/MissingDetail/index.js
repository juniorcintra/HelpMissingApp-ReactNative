import React, { useState, useCallback, useLayoutEffect } from 'react';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Loading from '../../components/loading';

import styles from './styles';

const MissingDetail = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [disappearanceDate, setDisappearanceDate] = useState(new Date());
  const [disappearanceLocation, setDisappearanceLocation] = useState('');
  const [contacts, setContacts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [photos64, setPhotos64] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalHistory, setShowModalHistory] = useState(false);

  const dispatch = useDispatch();
  const { setOptions } = useNavigation();
  const { loading } = useSelector(state => state.genericReducer);

  const dateModal = [
    {
      id: '1',
      date: '02/10/2021 15:10',
      andress: 'Centro, Resende / RJ',
      description: 'Lorem ipsum dolor sit amet. Ex tenetur omnis non consequuntur dolorem sit nemo consequatur ab',
    },
    {
      id: '2',
      date: '02/10/2021 15:10',
      andress: 'Centro, Resende / RJ',
      description: 'Lorem ipsum dolor sit amet. Ex tenetur omnis non consequuntur dolorem sit nemo consequatur ab',
    },
    {
      id: '3',
      date: '02/10/2021 15:10',
      andress: 'Centro, Resende / RJ',
      description: 'Lorem ipsum dolor sit amet. Ex tenetur omnis non consequuntur dolorem sit nemo consequatur ab',
    },
    {
      id: '5',
      date: '02/10/2021 15:10',
      andress: 'Centro, Resende / RJ',
      description: 'Lorem ipsum dolor sit amet. Ex tenetur omnis non consequuntur dolorem sit nemo consequatur ab',
    },
    {
      id: '6',
      date: '02/10/2021 15:10',
      andress: 'Centro, Resende / RJ',
      description: 'Lorem ipsum dolor sit amet. Ex tenetur omnis non consequuntur dolorem sit nemo consequatur ab',
    },
  ];

  const getDateUser = () => {
    setFullName('');
    setBirthDate(new Date());
    setDisappearanceDate(new Date());
    setDisappearanceLocation('');
    setContacts([]);
    setFeatures([]);
    setClothing([]);
    setPhotos64([]);
  };

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.6} onPress={() => setShowModalHistory(true)} style={{ marginRight: 20 }}>
          <Icon name='history' size={30} color='#000' />
        </TouchableOpacity>
      ),
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDateUser();
    }, []),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.viewUpload}>
          {photos64[0] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[0]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[1] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[1]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[2] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[2]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[3] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[3]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[4] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[4]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[5] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[5]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.form}>
          <Input
            editable={false}
            value={fullName}
            label='Nome Completo'
            placeholder='Jhoe Doe'
            autoCapitalize='words'
            onChangeText={setFullName}
          />
          <Input
            editable={false}
            placeholder='xx/xx/xxxx'
            label='Data de Nascimento'
            onChangeText={setBirthDate}
            value={format(birthDate, 'dd/MM/yyyy')}
          />
          <Input
            editable={false}
            placeholder='xx/xx/xxxx'
            label='Data de Desaparecimento'
            onChangeText={setDisappearanceDate}
            value={format(disappearanceDate, 'dd/MM/yyyy')}
          />
          <Input
            editable={false}
            placeholder='Endereço'
            value={disappearanceLocation}
            label='Local do Desaparecimento'
            onChangeText={setDisappearanceLocation}
          />

          <Text style={styles.label}>Contatos</Text>
          <ScrollView style={styles.scrollFeatures} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperButtomFeatures}>
              {contacts.map((item, index) => (
                <View key={index} style={styles.buttomFeatures}>
                  <Text style={styles.buttomTextFeatures}>{item}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <Text style={styles.label}>Características</Text>
          <ScrollView style={styles.scrollFeatures} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperButtomFeatures}>
              {features.map((item, index) => (
                <View key={index} style={styles.buttomFeatures}>
                  <Text style={styles.buttomTextFeatures}>{item}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <Text style={styles.label}>Vestimenta do Desaparecimento</Text>
          <View style={styles.wrapperClothing}>
            {clothing.map((item, index) => (
              <View key={index} style={styles.rowClothing}>
                <View style={styles.iconClothing} />
                <Text style={styles.textClothing}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      
      {/* Modal de histórico do desaparecido */}
      <Modal show={showModalHistory} setShowModal={setShowModalHistory}>
        <View style={styles.contentModalHistory}>
          <Text style={styles.TitleModalHistory}>Histórico do Desaparecido</Text>

          <FlatList
            data={dateModal}
            style={styles.flatListHistory}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separatorModalHistory} />}
            renderItem={({ item }) => (
              <View>
                <View style={styles.rowModalHistory}>
                  <Text style={styles.dateModalHistory}>{item.date}</Text>
                  <Text style={styles.andressModalHistory}>{item.andress}</Text>
                </View>
                <View>
                  <Text style={styles.descriptionModalHistory}>{item.description}</Text>
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
