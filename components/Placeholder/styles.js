import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0,0,0,0.5)',
  },
  button: {
    width: '50%',
    height: 40,
    borderRadius: 25,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
