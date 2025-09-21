import IndexPage from '@/components/IndexPage';
import IntroBackground from '@/components/introbackground';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSearchParams } from 'expo-router/build/hooks';
const HomeScreen = () => {
  const [showIntro, setShowIntro] = React.useState(true);
  const searchParam = useSearchParams();
  const isDiverted = searchParam.get("diverted");


  React.useEffect(() => {

    setTimeout(() => {
      setShowIntro(false)
    }, 3000);




  }, []);


  if (showIntro && !isDiverted) return <IntroBackground />;




  return (
    <SafeAreaView style={{ flex: 1 }}>




      <IndexPage />


    </SafeAreaView>






  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
