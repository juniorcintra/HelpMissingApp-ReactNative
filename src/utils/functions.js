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
