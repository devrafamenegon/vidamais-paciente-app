import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../../../constants/Colors';
import { format, isWithinInterval, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type CardProps = {
  name: string,
  hour: string,
  date: string,
  address: string,
  doctorName: string
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ConsultationCard(props: CardProps) {
  const examDate = parse(props.date, 'dd/MM/yyyy', new Date());

  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const isWithinNextWeek = isWithinInterval(examDate, { start: today, end: nextWeek });

  let formattedDate: string;
  if (isWithinNextWeek) {
    formattedDate = capitalize(format(examDate, 'EE', { locale: ptBR })); // Nome do dia da semana
  } else {
    formattedDate = format(examDate, 'dd/MM', { locale: ptBR }); // Dia e mês
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerExam}>{props.name}</Text>
        <Text style={styles.headerDateAndHour}>{formattedDate}, {props.hour}h</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionAddress}>{props.doctorName}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionAddress}>{props.address}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 24
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerExam: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.detail,
  },
  headerDateAndHour: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.text,
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  descriptionAddress: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.textDetail,
  }
})