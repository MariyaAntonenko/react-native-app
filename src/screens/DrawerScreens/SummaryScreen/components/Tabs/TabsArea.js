import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ArticlesList} from '../../../ArticlesScreen/components/ArticlesList';
import {CartonsList} from '../CartonsList';
import {TabBar} from './TabBar';

const Tab = createMaterialTopTabNavigator();

export const TabsArea = () => {
  return (
    <Tab.Navigator
      screenOptions={{swipeEnabled: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Cartons" component={CartonsList} />
      <Tab.Screen name="Articles" component={ArticlesList} />
    </Tab.Navigator>
  );
};
