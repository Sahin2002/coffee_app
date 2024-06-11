import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from './src/theme/colors';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './src/Screens/Home.Screen';
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = async ()=>{
    if(fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  }
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaView>
           <Home />
      </SafeAreaView>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_dark,
 
  },
});
