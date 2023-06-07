import React, { useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native-animatable';
import { AuthContext } from '../../contexts/AuthContext';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from './components/ListItem';
import getToday from '../../utils/getToday';
import getGreeting from '../../utils/getGreeting';

export default function Home({ navigation }: {navigation: any}) {
  const { user } = useContext(AuthContext);

  const sendToSettingScreen = () => {
    navigation.navigate('Settings');
  }

  const sendToMedicineScreen = () => {
    navigation.navigate('Medicines');
  };

  const sendToConsultationScreen = () => {
    navigation.navigate('Consultations');
  };

  const sendToExamScreenScreen = () => {
    navigation.navigate('Exams');
  };

  return(
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{ getGreeting() }, {user.name.split(' ')[0]}!</Text>
          <Text style={styles.todayDate}>{ getToday() }</Text>
        </View>
        
        <TouchableOpacity onPress={sendToSettingScreen} style={styles.settings}>
          <Image
            source={require('../../assets/icons/Settings.png')}
            style={{ width: 24, height: 24 }}
            resizeMode='center'
            animation="bounceIn" // Adicione uma animação ao pressionar o botão
            duration={500} // Defina a duração da animação em milissegundos
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>Próximos compromissos ↓</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../../assets/icons/Medicines.png')}
            style={styles.cardIcon}
            resizeMode='center'
          />
          <Text style={styles.cardHeaderText}>8:00</Text>
        </View>
        <ListItem
          title="Tomar"
          name="Cálcio B12"
          actionText="Veja sua Lista de Remédios"
          additionalInfo="8:00"
          onPress={sendToMedicineScreen}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../../assets/icons/Consultations.png')}
            style={styles.cardIcon}
            resizeMode='center'
          />
          <Text style={styles.cardHeaderText}>Hoje</Text>
        </View>
        <ListItem
          title="Ir ao"
          name="Neurologista"
          actionText="Veja sua Lista de Consultas"
          additionalInfo="Hoje"
          onPress={sendToConsultationScreen}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../../assets/icons/Exams.png')}
            style={styles.cardIcon}
            resizeMode='center'
          />
          <Text style={styles.cardHeaderText}>Hoje</Text>
        </View>
        <ListItem
          title="Fazer"
          name="Audiometria"
          actionText="Veja sua Lista de Exames"
          additionalInfo="Hoje"
          onPress={sendToExamScreenScreen}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '8%',
    backgroundColor: Colors.light.background,
  },
  header: {
    height: 60,
    marginTop: 32,
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.text,
  },
  todayDate: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.textDetail,
  },
  settings: {},
  headerText: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.text,
  },
  card: {
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  cardIcon: {
    width: 24, 
    height: 24
  },
  cardHeaderText: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    textDecorationLine: 'underline',
    color: Colors.light.textDetail,
  }
});