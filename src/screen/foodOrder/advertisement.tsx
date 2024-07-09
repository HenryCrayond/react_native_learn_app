import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const imgBg = 'https://henceforthsolutions.com/wp-content/themes/henceforthsolutions/assets/images/talabat/platform-image.png'

const AddContainer = styled.View`
  flex:1;
  postion:relative;
`;

const TitleText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  text-align:center;
  width:50%;
  color: #030302;
`;

const SubTtleText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width:60%;
  text-align:center;
  color: #878787;
`;

const BtnText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #ffff;
`;

export const BottomButton = ({ handlepress = () => { }, label }: any) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight style={styles.button} onPress={handlepress}>
        <BtnText>{label}</BtnText>
      </TouchableHighlight>
    </View>
  );
};

const Advertisement = ({ navigation }: any) => {

  const handlepress = () => {
    navigation.navigate('Home')
  }

  return (
    <LinearGradient
      colors={['#F6E5E0', '#F7F7F7']}
      start={{ x: 1.6, y: 0.2 }}
      end={{ x: 1, y: 1.3 }}
      locations={[0, 5]}
      style={styles.bgContainer}>
      <AddContainer>
        <StatusBar animated={true} backgroundColor="#f5e3df" barStyle={'dark-content'} />
        <View style={styles.imgContainer}>
          <ImageBackground source={{ uri: imgBg }} style={{ flex: 1, width: '100%' }} />
        </View>
        <View style={styles.textContainer}>
          <TitleText>Tasty the joy of Delevery</TitleText>
          <SubTtleText style={{ marginTop: 20 }}>Unlock the world of culinary delights, right at your fingertips</SubTtleText>
        </View>
        <BottomButton handlepress={handlepress} label={'Get Started'} />
      </AddContainer>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 6,
  },

  bgContainer: {
    flex: 1
  },

  textContainer: {
    flex: 4,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 28,
    alignItems: 'center',
  },

  button: {
    width: '90%',
    backgroundColor: '#ED714D',
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 16,
    display: "flex",
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
  },
});

export default Advertisement