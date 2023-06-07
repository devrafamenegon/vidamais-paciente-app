import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../../../constants/Colors';
import calculateTimeUntilMedication from '../../../../utils/getRemaining';

type CardProps = {
  name: string,
  hour: string,
  qtd: string,
  type: string,
}

export default function MedicineCard(props: CardProps) {
  const [hoursUntilMedication, minutesUntilMedication] = calculateTimeUntilMedication(props.hour).split(':')
  
  function checkMedicationTimePassed(medicationTime: string) {
    const currentTime = new Date();
    const [currentHour, currentMinute] = currentTime.toLocaleTimeString('en-US', { hour12: false }).split(':').map(Number);
    const [medicationHour, medicationMinute] = medicationTime.split(':').map(Number);

    if (currentHour > medicationHour || (currentHour === medicationHour && currentMinute >= medicationMinute)) {
      return true; // Medication time has passed
    } else {
      return false; // Medication time has not passed yet
    }
  }

  const medicationHourPassed = checkMedicationTimePassed(props.hour)

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerMedicine, medicationHourPassed ? styles.fontColorMedicinePassed : styles.headerMedicine]}>{props.name}</Text>
        <Text style={[styles.headerHour, medicationHourPassed ? styles.fontColorMedicinePassed : styles.headerHour]}>{props.hour}</Text>
      </View>
      <View style={styles.description}>
        <Text style={[styles.descriptionQtd, medicationHourPassed ? styles.fontColorMedicinePassed : styles.descriptionQtd]}>{props.qtd} {props.type}</Text>
        <Text style={styles.descriptionRemaining}>{`em ${hoursUntilMedication}h e ${minutesUntilMedication} minutos`}</Text>
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
  headerMedicine: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.detail,
  },
  headerHour: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.text,
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  descriptionQtd: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.text,
  },
  descriptionRemaining: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.textDetail,
  },
  fontColorMedicinePassed: {
    color: Colors.light.textDetail,
  }
})