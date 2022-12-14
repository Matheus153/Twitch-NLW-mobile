import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'



export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        {fontLoaded ? <Home/> : <Loading/>}
    </Background>
  );
}


