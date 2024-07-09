import React, { useState } from 'react'
import { View, StyleSheet, Image, TextInput, FlatList, Pressable } from 'react-native'
import styled from 'styled-components/native';
import Location from '../../../assets/image/location-pin_alt.png'
import MenuAlt from '../../../assets/image/menu-alt.png'
import Drop from '../../../assets/image/dropdown.png'
import Filter from '../../../assets/image/filter_active.png'
import Search from '../../../assets/image/search.png'
import menu1 from '../../../assets/image/menu_1.png';
import menu2 from '../../../assets/image/menu_2.png';
import menu3 from '../../../assets/image/menu_3.png';
import menu4 from '../../../assets/image/menu_4.png';
import Star from '../../../assets/image/ratings.png';
import LinearGradient from 'react-native-linear-gradient';

const profile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"

const HomeContainer = styled.View`
  flex:1;
  background-color:#F7F7F7;
  padding:24px;
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
  font-size: 14px;
  font-weight: 600;
  line-height: 34px;
  text-align:center;
  color: #030302;
`;

const SideDrower = styled.Pressable`
  display:flex;
  justify-content:center;
  align-items:center;
  height:40px;
  width:40px;
  border-radius:50px;
  background-color:#fff;
`;

const TitleText = styled.Text`
  font-size: 26px;
  font-weight: 600;
  line-height: 34px;
  text-align:start;
  width:80%;
  color: #030302;
`;

const ChipView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  padding:4px 4px;
  padding-right:10px;
  border:1px solid #D9DBDD;
  border-radius:50px;
  gap:6px;
`;

const MenuData = [
  {
    id: '1',
    Name: 'Hyderabadi Biriyani',
    dishName: 'Chicken',
    km: '25',
    icon: menu1,
  },
  {
    id: '2',
    Name: 'Bombay Biriyani',
    dishName: 'Chicken Fry',
    km: '15',
    icon: menu2,
  },
  {
    id: '3',
    Name: 'Chicken Biriyani',
    dishName: 'Checken gril',
    km: '2',
    icon: menu3,
  },
  {
    id: '4',
    Name: 'AR Biriyanai',
    dishName: 'Full Checken',
    icon: menu4,
    km: '5',

  },
  {
    id: '5',
    Name: 'Mutton Biriuani',
    dishName: 'Checken',
    icon: menu1,
    km: '6',
  },
  {
    id: '6',
    Name: 'Biriyani',
    dishName: 'Checken',
    icon: menu1,
    km: '28',
  },
];

export const Chip = ({ title, icon, color, handleSelectMenu }: any) => (
  <Pressable onPress={handleSelectMenu}>
    <ChipView style={{ backgroundColor: color, marginRight: 10 }}>
      <SideDrower>
        <Image source={icon} style={{ height: 30, width: 30, borderRadius: 50 }} />
      </SideDrower>
      <TopText style={{ color: color === '#ffff' ? '#4E585E' : "#ffff", fontWeight: 500 }}>{title}</TopText>
    </ChipView>
  </Pressable>
);

const Cardlisting = ({ title, icon, km, handleSelectMenu }: any) => (
  <Pressable onPress={handleSelectMenu}>
    <View style={{ ...styles.cardList, marginRight: 20 }}>
      <Image source={icon} style={{ height: 180, width: 200, borderRadius: 10 }} />
      <TopText style={{ textAlign: "left" }}>{title}</TopText>
      <RowsContainer style={{ gap: 4 }}>
        <Image source={Star} style={{ height: 14, width: 14 }} />
        <Image source={Star} style={{ height: 14, width: 14 }} />
        <Image source={Star} style={{ height: 14, width: 14 }} />
        <Image source={Star} style={{ height: 14, width: 14 }} />
        <Image source={Star} style={{ height: 14, width: 14 }} />
      </RowsContainer>
      <RowsContainer>
        <TopText style={{ color: '#4E585E', fontWeight: 500 }}>{`${km} km`}</TopText>
        <TopText style={{ color: '#4E585E', fontWeight: 500 }}>{`${Math.round(km / 60 * 100)} min delivery`}</TopText>
      </RowsContainer>
    </View>
  </Pressable>
);

const HomeScreen = ({ navigation }: any) => {

  const [formValue, setFormValues] = useState({ search: "" });

  const handeChangeText = (e: string, key: string) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: e
    }))
  }

  const handleSelectMenu = () => {
    navigation.navigate('ViewOrder')
  }
  return (
    <LinearGradient
      colors={['#F6E5E0', '#F7F7F7']}
      start={{ x: 1.6, y: 0.2 }}
      end={{ x: 1, y: 1.3 }}
      locations={[0, 5]}
      style={styles.bgContainer}>
      <HomeContainer>
        <NavContainer>
          <Image source={{ uri: profile }} style={{ height: 50, width: 50, borderRadius: 50 }} />
          <RowsContainer>
            <Image source={Location} style={{ height: 20, width: 20, borderRadius: 50 }} />
            <TopText>Canada</TopText>
            <Image source={Drop} style={{ height: 12, width: 20, borderRadius: 50 }} />
          </RowsContainer>
          <SideDrower onPress={() => navigation.openDrawer()}>
            <Image source={MenuAlt} style={{ height: 20, width: 20, borderRadius: 50 }} />
          </SideDrower>
        </NavContainer>

        <View style={{ marginTop: 20 }}>
          <TitleText>Ready to order your favirote food?</TitleText>
        </View>

        <View style={{ ...styles.inputRoot, marginTop: 20 }}>
          <SideDrower style={styles.search}>
            <Image source={Search} style={{ height: 40, width: 40, borderRadius: 50 }} />
          </SideDrower>
          <TextInput
            placeholder='Seacrh your car'
            style={styles.inputStyle}
            onChangeText={(e) => handeChangeText(e, 'search')}
          />
          <SideDrower style={styles.filter}>
            <Image source={Filter} style={{ height: 20, width: 20, borderRadius: 50 }} />
          </SideDrower>
        </View>

        <View style={{ marginTop: 20 }}>
          <FlatList
            data={MenuData}
            horizontal
            renderItem={({ item }) => <Chip title={item.dishName} icon={item.icon} color={['Chicken']?.includes(item?.dishName) ? "#ed714d" : "#ffff"} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <RowsContainer>
            <TitleText style={{ fontSize: 16 }}>Popular food?</TitleText>
            <TopText style={{ color: "#737272" }}>See all</TopText>
          </RowsContainer>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={MenuData}
              horizontal
              renderItem={({ item }) => <Cardlisting title={item.Name} icon={item.icon} km={item.km} handleSelectMenu={handleSelectMenu} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </HomeContainer>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1
  },
  inputStyle: {
    height: 62,
    borderStartWidth: 1,
    borderLeftWidth: 1,
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 50,
    borderColor: "#ffff",
    backgroundColor: "#ffff",
    paddingLeft: 70,
    color: "#02111A",
    fontSize: 14,
    fontFamily: "NotoSans-Regular"
  },

  filter: {
    backgroundColor: '#ED714D',
    height: 56,
    width: 56,
    position: "absolute",
    right: 4,
    top: 3
  },

  search: {
    height: 56,
    width: 56,
    position: "absolute",
    left: 4,
    top: 3,
    zIndex: 100
  },

  inputRoot: {
    position: "relative"
  },

  cardList: {
    padding: 20,
    borderRadius: 14,
    backgroundColor: "#ffff",
    shadowColor: "black"
  }
})

export default HomeScreen