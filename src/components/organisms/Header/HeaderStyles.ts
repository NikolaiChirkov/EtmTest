import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/Colors';

export const HeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: Colors.Background,
  },
  icon: { width: 24, height: 24, resizeMode: 'contain' },
  text: {
    marginLeft: 12,
    textDecorationColor: Colors.Text,
    fontSize: 24,
    fontWeight: '700',
  },
});
