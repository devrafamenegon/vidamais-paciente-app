import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabContainer from '../../components/TabContainer';
import Colors from '../../constants/Colors';
import MedicineCard from './components/MedicineCard';

type MedicineData = {
  name: string;
  hour: string;
  qtd: string;
  type: string;
};

export default function Medicines() {
  const medicineData: MedicineData[] = [
    { name: 'Coffee', hour: '9:00', qtd: '700', type: 'ml' },
    { name: 'Ômega 3', hour: '12:00', qtd: '1', type: 'Comprimido' },
    { name: 'Metformina', hour: '12:00', qtd: '1', type: 'Comprimido' },
    { name: 'Vitamina', hour: '15:00', qtd: '15', type: 'Gotas' },
    { name: 'Gilbenclamida', hour: '16:00', qtd: '2', type: 'Comprimidos' },
    { name: 'Zolpiden', hour: '23:00', qtd: '1', type: 'Comprimido' }
  ];

  // Sort the medication data based on whether the medication time has passed
  const sortedMedicineData: MedicineData[] = [...medicineData].sort((a, b) => {
    const hasPassedA = checkMedicationTimePassed(a.hour);
    const hasPassedB = checkMedicationTimePassed(b.hour);
    return hasPassedA ? 1 : hasPassedB ? -1 : 0;
  });

  let separatorIndex = sortedMedicineData.findIndex((medicine) => !checkMedicationTimePassed(medicine.hour));

  return (
    <TabContainer title="Lista de Remédios">
      {sortedMedicineData.map((medicine, index) => (
        <React.Fragment key={index}>
          <MedicineCard
            name={medicine.name}
            hour={medicine.hour}
            qtd={medicine.qtd}
            type={medicine.type}
          />
          {index === separatorIndex && <View style={styles.separator} />}
        </React.Fragment>
      ))}
    </TabContainer>
  );
}

function checkMedicationTimePassed(medicationTime: string): boolean {
  const currentTime = new Date();
  const [currentHour, currentMinute] = currentTime.toLocaleTimeString('en-US', { hour12: false }).split(':').map(Number);
  const [medicationHour, medicationMinute] = medicationTime.split(':').map(Number);

  if (currentHour > medicationHour || (currentHour === medicationHour && currentMinute >= medicationMinute)) {
    return true; // Medication time has passed
  } else {
    return false; // Medication time has not passed yet
  }
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.light.line,
    marginBottom: 16,
  },
  // Your other styles here
});
