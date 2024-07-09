import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Heart from '../../../assets/image/heart-black.png';
import imgaes from '../../../assets/image/img_1.png';
import Arrow from '../../../assets/image/left-arrow-svgr.png';
import Minus from '../../../assets/image/minus-a.png';
import Plus from '../../../assets/image/plus-a.png';
import Star from '../../../assets/image/ratings.png';
import { BottomButton } from './advertisement';

const ViewoContainer = styled.View`
  flex:1;
  padding:20px;
`;

const NavContainer = styled.View`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
`;

const RowsContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:cenetr;
  align-items:center;
  gap:10px;
`;

const TopText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 34px;
  text-align:center;
  color: #030302;
`;
const SideDrower = styled.Pressable`
  display:flex;
  justify-content:center;
  align-items:center;
  height:44px;
  width:44px;
  border-radius:50px;
  background-color:#fff;
`;

const SubTtleText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #878787;
`;

const ChipView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px 16px;
  border:1px solid #D9DBDD;
  border-radius:50px;
`;

const TitleText = styled.Text`
  font-size: 22px;
  font-weight: 500;
  line-height: 34px;
  text-align:left;
  color: #030302;
`;

const description = "Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence.."


const ViewOrder = ({ navigation }: any) => {

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
      <ViewoContainer>
        <View style={styles.imgContainer}>
          {/* <ImageBackground source={imgaes} style={{ height: '100%', width: "100%"}}> */}
          <NavContainer>
            <SideDrower onPress={() => navigation.goBack()}>
              <Image source={Arrow} style={{ height: 20, width: 20, borderRadius: 50 }} />
            </SideDrower>
            <RowsContainer>
              <TopText>Details</TopText>
            </RowsContainer>
            <SideDrower>
              <Image source={Heart} style={{ height: 26, width: 26, borderRadius: 50 }} />
            </SideDrower>
          </NavContainer>

          <View style={{ marginTop: 14 }}>
            <TitleText>Biriyani Bliss</TitleText>
            <RowsContainer style={{ marginTop: 6 }}>
              <Image source={Star} style={{ height: 14, width: 14 }} />
              <SubTtleText>{'4.8 (108 reviews)'}</SubTtleText>
            </RowsContainer>
          </View>

          <View style={{ marginTop: 14 }}>
            <SubTtleText style={{ marginBottom: 2 }}>{'Price'}</SubTtleText>
            <TitleText style={{ fontWeight: "700" }}>$7.50</TitleText>
          </View>

          <View style={{ marginTop: 14 }}>
            <SubTtleText style={{ marginBottom: 2 }}>{'Calories'}</SubTtleText>
            <TopText style={{ textAlign: 'left' }}>450 Cal</TopText>
          </View>

          <View style={{ marginTop: 14 }}>
            <SubTtleText style={{ marginBottom: 2 }}>{'Diameter'}</SubTtleText>
            <TopText style={{ textAlign: 'left' }}>15.05 cm</TopText>
          </View>

          <RowsContainer style={{ marginTop: 14, gap: 20 }}>
            <Image source={Plus} style={{ height: 30, width: 30 }} />
            <TopText style={{ textAlign: 'left' }}>05</TopText>
            <Image source={Minus} style={{ height: 30, width: 30 }} />
          </RowsContainer>
          {/* </ImageBackground> */}
          <Image source={imgaes} style={{ height: '50%', width: '60%', position: "absolute", right: 0, top: "30%", }} />
        </View>
        <View style={styles.textContainer}>
          <SubTtleText style={{ marginBottom: 16 }}>{'Size'}</SubTtleText>
          <RowsContainer>
            <ChipView style={{ backgroundColor: "#ED714D" }}>
              <TopText style={{ marginTop: 0, color: '#fff' }}>{'Small'}</TopText>
            </ChipView>
            <ChipView>
              <TopText style={{ marginTop: 0 }}>{'Medium'}</TopText>
            </ChipView>
            <ChipView>
              <TopText style={{ marginTop: 0 }}>{'Large'}</TopText>
            </ChipView>
          </RowsContainer>
          <SubTtleText style={{ marginTop: 16 }}>{description}</SubTtleText>
        </View>
        <BottomButton handlepress={handlepress} label={'Add to Cart'} />
      </ViewoContainer>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
  },
  imgContainer: {
    flex: 6,
  },

  textContainer: {
    flex: 4,
    display: "flex",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})
export default ViewOrder