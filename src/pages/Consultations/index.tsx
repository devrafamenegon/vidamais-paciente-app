import React from 'react';
import TabContainer from '../../components/TabContainer';
import ConsultationCard from './components/ConsultationCard';

export default function Consultations() {
  const consultations = [
    { name: 'Neurologista', date: '01/06/2023', hour: '08:00', doctorName: 'Dr. Ademir Pereira', address: 'Rua Alegria, 123 - Centro, Jaguariúna' },
    { name: 'Nutricionista', date: '08/06/2023', hour: '18:30', doctorName: 'Dra. Luiza Basculhach', address: 'Avenida Esperança, 456 - São José, Jaguariúna' },
    { name: 'Clínico Geral', date: '02/06/2023', hour: '07:00', doctorName: 'Dr. Anderson Garcia', address: 'Travessa Paz, 789 - Distrito, Amparo' },
    { name: 'Fonoaudiólogo', date: '03/06/2023', hour: '07:30', doctorName: 'Dr. Marcos Basso', address: 'Rua Harmonia, 321 - Subúrbio, Artur Nogueira' },
  ];

  // Ordenar as consultas por data crescente
  consultations.sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    const dateB = new Date(b.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <TabContainer title="Lista de Consultas">
      {consultations.map((consultation, index) => (
        <ConsultationCard
          key={index}
          name={consultation.name}
          date={consultation.date}
          hour={consultation.hour}
          address={consultation.address}
          doctorName={consultation.doctorName}
        />
      ))}
    </TabContainer>
  );
}