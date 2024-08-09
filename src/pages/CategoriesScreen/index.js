import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {styles} from './style'

const mockCategories = [
  { id: '1', name: 'Sobremesas', recipes: [
    { id: '1', title: 'Torta de Chocolate' },
    { id: '2', title: 'Pudim' }
  ]},
  { id: '2', name: 'Vegetais', recipes: [
    { id: '3', title: 'Salada Caesar' },
    { id: '4', title: 'Legumes Assados' }
  ]},
  { id: '3', name: 'Prato Principal', recipes: [
    { id: '5', title: 'Feijoada' },
    { id: '6', title: 'Strogonoff' }
  ]},
  { id: '4', name: 'Entrada', recipes: [
    { id: '7', title: 'Bruschetta' },
    { id: '8', title: 'Sopa de Cebola' }
  ]},
];

export default function CategoriesScreen() {
  const [categories] = useState(mockCategories);

  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeCard}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </View>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Text style={styles.categoryTitle}>{item.name}</Text>
      <FlatList
        data={item.recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(recipe) => recipe.id}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
