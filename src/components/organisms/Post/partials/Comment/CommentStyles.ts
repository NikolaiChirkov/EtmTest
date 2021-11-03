import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../utils/Colors';

export const CommentStyles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.Background,
    flexDirection: 'column',
  },
  name: { color: Colors.Main, fontSize: 14, fontWeight: '700' },
  body: { color: Colors.Text, fontSize: 12, fontWeight: '700' },
});
