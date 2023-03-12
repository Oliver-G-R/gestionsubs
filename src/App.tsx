import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { globalStyle } from './constants/style';
import { SubContextProvider } from './context/SubContext';
import { ListCardSub } from './components/ListCardSub';
import { HeaderAcrions } from './components/HeaderAcrions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <AppState>
        <SafeAreaView style={globalStyle.container}>
            <HeaderAcrions/>
            <ListCardSub/>
        </SafeAreaView >
          <Footer/>
        <StatusBar  style='light' />
    </AppState>
  );
}

interface AppStateProps  {
  children: JSX.Element[]
}

const AppState = ({ children }:AppStateProps) => (
    <SubContextProvider>
      {
        children
      }
    </SubContextProvider>
)


