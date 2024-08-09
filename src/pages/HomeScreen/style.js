import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,  
    overflow: 'hidden',
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',  
  },
  textContainer: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333', 
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    opacity: 0.8,  
  },
  buttonSaved: {
    backgroundColor: '#ff6f61',
  },
  buttonNotSaved: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#ffffff',
    marginLeft: 5,
    fontWeight: '500',
  },
});