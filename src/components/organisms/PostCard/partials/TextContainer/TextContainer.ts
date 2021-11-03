import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../utils/Colors';

export const TextContainerStyles = StyleSheet.create({
  container: {
    flex: 9,
  },
  date: {
    color: Colors.Text,
    fontSize: 14,
  },
  title: {
    color: Colors.Text,
    fontSize: 18,
    fontWeight: '700',
  },
});
