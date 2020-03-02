import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '60%',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionLabel: {
    marginLeft: 16,
    fontSize: 22,
    fontWeight: '600',
  },
});
