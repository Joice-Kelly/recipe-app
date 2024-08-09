import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, Button, Image} from 'react-native';
import {styles} from './style'
import Ionicons from '@expo/vector-icons/Ionicons';

const batatasImage = require('../../../assets/batatas.jpg');
const pratocarne = require('../../../assets/pratocarne.jpg');
const pratocomovos = require('../../../assets/pratocomovos.jpg')

const recipes = [
  {
    id: '1',
    title: 'Receita 1',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
    imageUrl: batatasImage,    
  },
  {
    id: '2',
    title: 'Receita 2',
    description: 'Odio maximus tellus augue sapien sodales malesuada.',
    imageUrl: pratocarne,
  },
  {
    id: '3',
    title: 'Receita 3',
    description: 'Ut vitae feugiat malesuada ad neque varius consequat.',
    imageUrl: pratocomovos,
  },
];

export default function HomeScreen() {
  const [savedRecipes, setSavedRecipes] = useState(new Set());

  const handleSaveRecipe = (id) => {
    setSavedRecipes((prevSaved) => {
      const newSaved = new Set(prevSaved);
      if (newSaved.has(id)) {
        newSaved.delete(id);
      } else {
        newSaved.add(id);
      }
      return newSaved;
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imageUrl } style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          style={[styles.button, savedRecipes.has(item.id) ? styles.buttonSaved : styles.buttonNotSaved]}
          onPress={() => handleSaveRecipe(item.id)}
        >
          <Ionicons name={savedRecipes.has(item.id) ? 'heart' : 'heart-outline'} size={20} color="#fff" />
          <Text style={styles.buttonText}>
            {savedRecipes.has(item.id) ? 'Salvo' : 'Salvar'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}