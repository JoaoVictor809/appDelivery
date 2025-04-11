import { Text, View, FlatList, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Styles from '../assets/styles/forYouStyle';
import Icon from 'react-native-vector-icons/FontAwesome6'; 

export default function forYou(){
    const [fontsLoaded] = useFonts({
        'Poppins_Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins_Bold': require('../assets/fonts/Poppins-Bold.ttf')
      });
    
      useEffect(() => {
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View style={Styles.containerForYou}>
            <View style={Styles.boxImgFotYou}>
                <Image
                style={Styles.imgForYou001} 
                source={require('../assets/images/imgForYou001.jpg')} />
            </View>
            <View style={Styles.containerTitle}>
                <View>
                    <Text>
                        Taco Bell
                    </Text>
                    <View>
                    <Icon name="clock" solid size={13} color={'#64646A'} />
                        <Text>                  
                            25  min • Leve • De Tia Max 
                        </Text>
                    </View>

                </View>
                
                <View style={Styles.buttonGo}>
                    <Icon name='arrow-right' solid size={16} color={'#fff'}/>
                </View>
            </View>
        </View>
    );
}