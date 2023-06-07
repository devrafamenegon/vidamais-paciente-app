import { format, Locale } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function getToday() {
  const dataAtual = new Date();
  const formatoData = "EEEE, d 'de' MMMM";
  const dataFormatada = format(dataAtual, formatoData, { locale: ptBR as Locale });

  return dataFormatada
}
