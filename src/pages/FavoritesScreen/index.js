import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import {styles} from './style'

const mockFavorites = [
  { id: '1', title: 'Receita 1', description: 'Adicione sua receita' },
  { id: '2', title: 'Receita 2', description: 'Adicione sua receita' },
  { id: '3', title: 'Receita 3', description: 'Adicione sua receita' },
];

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState(mockFavorites);

  const handleEditRecipe = (id) => {
    console.log('Editar Receita ID:', id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity style={styles.editButton} onPress={() => handleEditRecipe(item.id)}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>Nenhuma receita favorita</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyList} 
      />
    </View>
  );
}