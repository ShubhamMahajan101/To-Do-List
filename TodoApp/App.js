// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ToDoList from './ToDoList';
// import APIList from './src/APIList';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="To-Do List" component={ToDoList} />
//           <Stack.Screen name="API List" component={APIList} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import ToDoListScreen from './screens/ToDoListScreen';
import PostsScreen from './screens/PostsScreen';
import DataListScree from './screens/DataListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ToDoList">
          <Stack.Screen name="ToDoList" component={ToDoListScreen} options={{ title: 'To-Do List' , headerShown: false }} />
          <Stack.Screen name="Posts" component={PostsScreen} options={{ title: 'Posts List',  headerShown: false }} />
          <Stack.Screen name="DataListScree" component={DataListScree} options={{ title: 'Data ListScreen', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
