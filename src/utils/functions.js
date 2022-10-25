import { Linking } from 'react-native';

export const CalcIdade = data => {
  var dataSplit = data?.split('-');
  var d = new Date();
  var ano_atual = d.getFullYear();
  var mes_atual = d.getMonth() + 1;
  var dia_atual = d.getDate();
  dataSplit[0] = +dataSplit[0];
  dataSplit[1] = +dataSplit[1];
  dataSplit[2] = +dataSplit[2];
  var quantos_anos = ano_atual - dataSplit[0];

  if (mes_atual < dataSplit[1] || (mes_atual == dataSplit[1] && dia_atual < dataSplit[2])) {
    quantos_anos--;
  }

  return quantos_anos < 0 ? 0 : quantos_anos;
};

export const handleDial = (value = '') => {
  var numsStr = parseInt(value.replace(/[^0-9]/g, ''));
  Linking.openURL(`tel:${numsStr}`);
};

export const calcDaysFound = (data1, data2) => {
  const diffInMs = new Date(data1) - new Date(data2);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays === 0 || diffInDays < 2) {
    return '1 dia';
  } else {
    return diffInDays + ' dias';
  }
};
