import { StyleSheet } from 'react-native';

export default ({ primary = 'black' }: { primary?: string } = {}): object => StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  info: {
    flex: 1,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
  },
  subtitle: {
    color: 'grey',
    lineHeight: 18,
  },
  link: {
    fontSize: 14,
    color: primary,
    textDecorationLine: 'underline',
  },
});
