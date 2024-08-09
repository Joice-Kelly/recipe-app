import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import {styles} from './style'

export default function CreateRecipeScreen() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState('');
 
  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleChangeIngredient = (index, value) => {
    const newIngredients = ingredients.map((ingredient, i) => (i === index ? value : ingredient));
    setIngredients(newIngredients);
  };

  const handleSubmit = () => {
    const recipe = {
      title,
      ingredients,
      instructions,
    };
    console.log('Receita Criada:', recipe);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Informe o título da receita"
      />

      <Text style={styles.label}>Ingredientes</Text>
      {ingredients.map((ingredient, index) => (
        <View key={index} style={styles.ingredientContainer}>
          <TextInput
            style={styles.input}
            value={ingredient}
            onChangeText={(value) => handleChangeIngredient(index, value)}
            placeholder={`Informe os ingrediente ${index + 1}`}
          />
          <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveIngredient(index)}>
          <Text style={styles.removeButtonText}>Remover</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleAddIngredient}>
      <Text style={styles.buttonText}>Adicionar Ingrediente</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Descreva o modo de preparo"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

 