import React from 'react';
import TabContainer from '../../components/TabContainer';
import ExamCard from './components/ExamCard';

export default function Exams() {
  const exams = [
    { name: 'Audiometria', date: '01/06/2023', hour: '08:00', address: 'Rua Alegria, 123 - Centro, Jaguariúna' },
    { name: 'Toxicológico', date: '08/06/2023', hour: '18:30', address: 'Avenida Esperança, 456 - São José, Jaguariúna' },
    { name: 'Hemograma', date: '02/06/2023', hour: '07:00', address: 'Travessa Paz, 789 - Distrito, Amparo' },
    { name: 'Glicemia', date: '03/06/2023', hour: '07:30', address: 'Rua Harmonia, 321 - Subúrbio, Artur Nogueira' },
  ];

  // Ordenar os exames por data crescente
  exams.sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    const dateB = new Date(b.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <TabContainer title="Lista de Exames">
      {exams.map((exam, index) => (
        <ExamCard
          key={index}
          name={exam.name}
          date={exam.date}
          hour={exam.hour}
          address={exam.address}
        />
      ))}
    </TabContainer>
  );
}
