import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/pages/HomeScreen/index'
import CreateRecipeScreen from './src/pages/CreateRecipesScreen/index'
import FavoritesScreen from './src/pages/FavoritesScreen/index'
import CategoriesScreen from './src/pages/CategoriesScreen/index'

const Tab = createBottomTabNavigator();

const getTabScreenOptions = (label, iconName) => ({
  tabBarLabel: label,
  tabBarIcon: ({ color, size }) => {
    return <Icon name={iconName} size={size} color={color} />;
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Destaques" 
          component={HomeScreen} 
          options={getTabScreenOptions('Destaques', 'home')} 
        />
        <Tab.Screen 
          name="Criar Receita" 
          component={CreateRecipeScreen} 
          options={getTabScreenOptions('Criar Receita', 'book-edit')} 
        />
        <Tab.Screen 
          name="Favoritos" 
          component={FavoritesScreen} 
          options={getTabScreenOptions('Favoritos', 'star')} 
        />
        <Tab.Screen 
          name="Categorias" 
          component={CategoriesScreen} 
          options={getTabScreenOptions('Categorias', 'clipboard-list')} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
