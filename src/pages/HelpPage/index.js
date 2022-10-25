import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { handleDial } from '../../utils/functions';
import styles from './styles';

const HelpPage = ({ navigation }) => {
  const dateButtonInfo = [
    { id: '1', nome: 'Policia Militar', numero: '190' },
    { id: '2', nome: 'Polícia Federal', numero: '191' },
    { id: '3', nome: 'Polícia Civil', numero: '197' },
    { id: '4', nome: 'Corpo de Bombeiros', numero: '193' },
    { id: '5', nome: 'Samu', numero: '192' },
    { id: '6', nome: 'SOS', numero: '(21) 2286-8337' },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.buttons}>
          {dateButtonInfo.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => handleDial(item?.numero)}>
              <Text style={styles.titleButton}>{item?.nome}</Text>
              <Text style={styles.descriptionButton}>{item?.numero}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Text style={styles.title}>Como agir</Text>
          <Text style={styles.description}>1. Mantenha a calma;</Text>
          <Text style={styles.description}>
            2. O primeiro lugar onde se deve procurar uma pessoa desaparecida é próximo ao local em que supostamente ela
            sumiu. Pergunte a todos aqueles que se encontram pela imediações e aqueles que estão passando pela região;
          </Text>
          <Text style={styles.description}>
            3. Faça uma rápida busca pelas delegacias de polícia, pelos hospitais e pronto-socorros;
          </Text>
          <Text style={styles.description}>
            4. Registre imediatamente o boletim de ocorrência em uma delegacia de polícia civil, dando preferência à
            delegacia especializada na proteção à criança e ao adolescente (DPCA), se existir em seu município. Não é
            necessário esperar 24 horas para registrar o boletim de ocorrência. Lembre-se de que as primeiras horas que
            sucedem o desaparecimento são vitais para garantir a localização e proteção do desaparecido.
          </Text>
          <Text style={styles.description}>
            5. Mantenha alguém no local onde a criança foi vista pela última vez, pois ela poderá retornar ao local;
          </Text>
          <Text style={styles.description}>
            6. Deixe alguém para atender o telefone indicado no cartão de identificação da criança, para centralizar
            informações;
          </Text>
          <Text style={styles.description}>
            7. Avise amigos e parentes o mais rápido possível, principalmente os de endereço conhecido da criança, para
            onde ela possa se dirigir;
          </Text>
          <Text style={styles.description}>8. Percorra os locais de preferência da criança;</Text>
          <Text style={styles.description}>9. Tenha sempre uma foto da criança atualizada;</Text>
          <Text style={[styles.description, { marginBottom: 22 }]}>
            10. Memorize a vestimenta da criança e outros detalhes para melhor descrevê-la quando precisar.
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Deveres dos Pais</Text>
          <Text style={[styles.description, { marginBottom: 0 }]}>
            {'     '}Como a família pode ajudar a polícia, levando à Delegacia uma foto recente da criança ou
            adolescente
          </Text>
          <Text style={[styles.description, { marginBottom: 0 }]}>
            {'     '}Informando todos os fatos relacionados ao desaparecimento, sem omitir nada. Isto pode ser feito por
            escrito, incluindose no relato a descrição pormenorizada da criança ou do adolescente, as roupas que estava
            trajando, o nome e endereço das últimas pessoas que a viram, fatos que podem ter motivado uma fuga e
            qualquer outra informação relevante
          </Text>
          <Text style={[styles.description, { marginBottom: 22 }]}>
            {'     '}Recolhendo e guardando objetos que a criança ou adolescente tenha manuseado, nos quais ela possa
            ter deixado impressões digitais e material biológico, como fios de cabelo com raiz, de onde se possa extrair
            o DNA. Geralmente esse material pode ser colhido no banheiro da casa ou travesseiro.
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Deveres da família</Text>
          <Text style={styles.description}>
            1. Tentar rastrear os últimos passos da pessoa desaparecida. Rede social, amigos, grupos, celular, na
            escola, no trabalho, etc.
          </Text>
          <Text style={styles.description}>
            2. Se você possui familiares que residam em outras localidades, tente entrar em contato com os mesmos, pois
            muitos desaparecidos costumam se refugiar em casas de amigos ou parentes que moram em outras localidades;
          </Text>
          <Text style={styles.description}>
            3. Converse com as últimas pessoas que tiveram contato com o desaparecido para avaliar a sua situação
            psicológica e emocional (estado de espírito) tentando obter uma possível indicação do motivo e/ou destino do
            mesmo;
          </Text>
          <Text style={styles.description}>
            4. Entre em contato com os Hospitais, Departamento Médico Legal (DML e/ou IML) para saber se o desaparecido
            não sofreu algum acidente ou foi vítima de violência;
          </Text>
          <Text style={styles.description}>
            5. Em caso de pessoas com debilidade mental, tente informar quantas vezes já desapareceu, onde foi
            encontrada, se estava recolhido a algum hospital ou casa de tratamento;
          </Text>
          <Text style={styles.description}>
            6. Após, registre a ocorrência de desaparecimento da pessoa na delegacia mais próxima, fornecendo a maior
            quantidade de informação possível, se possível, levando consigo uma foto da pessoa desaparecida;
          </Text>
          <Text style={styles.description}>
            7. Anote o telefone da Delegacia e o nome do investigador que ficará responsável pelo caso. Mantenha contato
            e disponibilize as informações que ele pedir.
          </Text>
          <Text style={styles.description}>
            8. Procure o jornal da sua cidade. Peça publicação do desaparecimento. Faça o mesmo telefonando para as
            rádios e peça divulgação.
          </Text>
          <Text style={styles.description}>9. Faça cartazes e distribua em locais movimentados da cidade.</Text>
          <Text style={styles.description}>10. Avise amigos, divulgue na rede social.</Text>
          <Text style={styles.description}>
            11. Após o seu cadastro no Desaparecidos do Brasil, acompanhe o caso, através do nosso email.{' '}
          </Text>
          <Text style={styles.description}>
            12. Assim que localizado, avise que a pessoa foi encontrada para darmos baixa no cadastro. Faça o mesmo nos
            demais locais onde pediu ajuda.
          </Text>
          <Text style={[styles.description, { marginBottom: 22 }]}>
            <Text style={styles.bold}>Importante</Text> Os voluntários fazem pesquisas que são pagas e os telefonemas
            tem custos. Colabore!
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Deveres dos Pais</Text>
          <Text style={[styles.description, { marginBottom: 0 }]}>
            {'     '}De acordo com o art. 208 do ECA (parágrafo segundo), os órgãos de investigação competentes deverão
            também comunicar os Departamentos de Polícia Federal e da Polícia Rodoviária Federal, bem como portos,
            aeroportos, rodoviária e empresas de transporte interestadual e internacionais, para evitar o deslocamento
            da criança ou adolescente para fora do estado e do país.
          </Text>
          <Text style={[styles.description, { marginBottom: 0 }]}>
            {'     '}Proceder toda investigação possível, impedindo que a ação de maus elementos ou a retirada dela da
            cidade/estado/país.
          </Text>
          <Text style={[styles.description, { marginBottom: 22 }]}>
            {'     '}Proceder toda investigação possível, impedindo que a ação de maus elementos ou a retirada dela da
            cidade/estado/país.
          </Text>
        </View>

        <View>
          <Text style={styles.title}># Dica</Text>
          <Text style={styles.description}>
            1. Tire o RG (Identidade) da criança o mais cedo possível. Mantenha sempre uma foto 3x4 atualizada a cada
            ano. Prevenção salva vidas.
          </Text>
          <Text style={styles.description}>2. Ligar para pessoas proximas como amigos e familiares.</Text>
          <Text style={styles.description}>3. Não esperar 24 ou 48 como geralmente é sugerido.</Text>
          <Text style={styles.description}>4. Registar boletim de ocorrência.</Text>
          <Text style={styles.description}>5. Divulgar nas redes sociais fotos.</Text>
          <Text style={[styles.description, { marginBottom: 22 }]}>
            6. Ligar para hospitais da região, IMLS e delegacias
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Obrigatório</Text>
          <Text style={[styles.description, { marginBottom: 5 }]}>
          {'  '}Quando  ocorrer a localização da pessoa desaparecida, o comunicante do desaparecimento deverá retornar à delegacia de polícia na qual foi comunicado o desaparecimento, a fim de dar ciência às autoridades policiais, que providenciarão a baixa junto ao sistema informatizado.
          </Text>
        </View>

        <View>
          <Text style={[styles.footer, { marginBottom: 22 }]}>
          O <Text style={styles.title}>Programa SOS Crianças Desaparecidas</Text> fica localizado na Rua Voluntários da Pátria, n°120, Botafogo, CEP: 22270-010 - Tel: (21) 2286-8337 / 2334-8000 / 2334-8008
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HelpPage;
