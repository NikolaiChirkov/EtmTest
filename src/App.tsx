import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';
import { Header } from './components/organisms/Header';
import { Colors } from './utils/Colors';
import store from './redux/store';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerTitle: props => <Header {...props} />,
              headerStyle: { backgroundColor: Colors.Background },
              headerShadowVisible: true,
            }}
          />
          <Stack.Screen name="Post" component={PostPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
