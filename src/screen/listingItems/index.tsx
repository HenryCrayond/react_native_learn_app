import React, { useState } from 'react';
import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import LeftArrow from '../../../assets/image/left-arrow.png';
import PinLocation from '../../../assets/image/location-pin.png';
import Locaton from '../../../assets/image/location.png';
import Conduct from '../../../assets/image/profile.png';
import Start from '../../../assets/image/star-svg.png';
import Leg from '../../../assets/image/leg.png';
import menu1 from '../../../assets/image/menu_1.png';
import menu2 from '../../../assets/image/menu_2.png';
import menu3 from '../../../assets/image/menu_3.png';
import menu4 from '../../../assets/image/menu_4.png';
import Increase from '../../../assets/image/plus-circle.png';
import Decreacse from '../../../assets/image/minus-circle.png';
import arrow1 from '../../../assets/image/arrow-right-1.png';
import arrow2 from '../../../assets/image/arrow-right-2.png';
import Decreacse0 from '../../../assets/image/minus-circle-0.png';



const Henry = 'https://img.freepik.com/free-vector/chicken-premium-quality-banner-with-chicken-chef-cartoon-charact_1308-87545.jpg'

const Container = styled.View`
  background-color: #EFF3F6;
  flex: 1;
  gap: 16px;
`;

const CardTopView = styled.View`
  background-color: #fff;
  height: 40%;
  padding: 24px;
  border-radius: 0 0 18px 18px;
`;

const CardBttomView = styled.View`
  background-color: #fff;
  height: 60%;
  padding: 16px 24px;
  border-radius: 18px 18px 0px 0px;
  position: relative;
`;

const LocationView = styled.View`
  margin-top:24px;
  display: flex;
  flex-direction:row;
  gap:16px;
`;

const RowDireection = styled.View`
  display: flex;
  align-items: center;
  flex-direction:row;
  gap:16px;
`;

const PageHeadingText = styled.Text`
  color: #02111A;
  font-size:16px;
  font-weight:700;
`;

const SubTitle = styled.Text`
  color: #4E585E;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

const CenterView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const ChipView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  padding:10px 16px;
  border:1px solid #D9DBDD;
  border-radius:50px
`;

const StyledText = styled.Text`
        color: "#ffff";
`;

const MenuCardtView = styled.View`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin-bottm:20px
`;

const DATA = [
    {
        id: '1',
        title: 'Combo',
        icon: "🍗"
    },
    {
        id: '2',
        title: 'Special',
        icon: "👍"
    },
    {
        id: '3',
        title: 'Drinks',
        icon: "🍵"
    },
    {
        id: '4',
        title: 'Sanveg',
        icon: "🥪"
    },
];

const Ratings = [
    {
        title: "4.8",
        label: 'Check Reviews',
        icon: Start
    },
    {
        title: "2.69km",
        label: 'Distance',
        icon: PinLocation
    },
    {
        title: "1k+ratings",
        label: 'Good taste',
        icon: Conduct
    }
]

const MenuData = [
    {
        id: '1',
        dishName: 'Super Family Package',
        items: ['2 cheken wings', '2 raice'],
        price: '$12.00',
        icon: menu1,
        count: 10
    },
    {
        id: '2',
        dishName: 'Chicken Super Combo',
        items: ['1 cheken large', '2 raice'],
        price: '$18.00',
        icon: menu2,
        count: 6
    },
    {
        id: '3',
        dishName: 'Checken Streak Large',
        items: ['2 cheken wings', '2 raice'],
        price: '$ 12.00',
        icon: menu3,
        count: 0
    },
    {
        id: '4',
        dishName: 'Special Full Checken',
        items: ['2 cheken wings', '2 raice'],
        price: '$ 12.00',
        icon: menu4,
        count: 9
    },
    {
        id: '5',
        dishName: 'Super Family Package',
        items: ['2 cheken wings', '2 raice'],
        price: '$12.00',
        icon: menu1,
        count: 2
    },
    {
        id: '6',
        dishName: 'Chicken Super Combo',
        items: ['1 cheken large', '2 raice'],
        price: '$18.00',
        icon: menu2,
        count: 0
    },
    {
        id: '7',
        dishName: 'Checken Streak Large',
        items: ['2 cheken wings', '2 raice'],
        price: '$ 12.00',
        icon: menu3,
        count: 5
    },
    {
        id: '8',
        dishName: 'Special Full Checken',
        items: ['2 cheken wings', '2 raice'],
        price: '$ 12.00',
        icon: menu4,
        count: 0
    },
    {
        id: '9',
        dishName: 'Super Family Package',
        items: ['2 cheken wings', '2 raice'],
        price: '$12.00',
        icon: menu1,
        count: 10
    },
    {
        id: '10',
        dishName: 'Chicken Super Combo',
        items: ['1 cheken large', '2 raice'],
        price: '$18.00',
        icon: menu2,
        count: 8
    },
];

const BottomButton = () => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <RowDireection>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: "600" }}>$45.00</Text>
                    <ChipView style={{ backgroundColor: "#EAB0A7", borderColor: "#CB341C" }}>
                        <Text style={{ color: '#CB341C', fontSize: 14, fontWeight: "500" }}>1 Food Selected</Text>
                    </ChipView>
                </RowDireection>
                <RowDireection style={{ gap: 0 }}>
                    <Image source={arrow2} style={{ height: 20, width: 12 }} />
                    <Image source={arrow1} style={{ height: 20, width: 12 }} />
                </RowDireection>
            </TouchableOpacity>
        </View>
    );
};

const Chip = ({ title, icon, color, handleSelectMenu }: any) => (
    <Pressable onPress={handleSelectMenu}>
        <ChipView style={{ marginLeft: 10, backgroundColor: color }}>
            <SubTitle style={{ color: color === '#ffff' ? '#4E585E' : "#ffff", fontWeight: 500 }}>{title}</SubTitle>
            <SubTitle style={{ marginLeft: 8 }}>{icon}</SubTitle>
        </ChipView>
    </Pressable>
);

const ListMenuItem = ({ dishName, icon, items, count, price, handleIncrease, handleDecrease }: any) => (
    <MenuCardtView style={{ marginBottom: 20 }}>
        <RowDireection style={{ justifyContent: "space-between", width: "100%" }}>
            <Image source={icon} style={{ height: 70, width: 70, borderRadius: 8 }} />

            <View>
                <PageHeadingText style={{ fontSize: 16, marginBottom: 10 }}>{dishName}</PageHeadingText>
                <RowDireection style={{ gap: 1 }}>
                    {items?.map((list: string, i: number) => (
                        <SubTitle key={i} style={{}}>{list}</SubTitle>
                    ))}
                </RowDireection>
                <SubTitle style={{ color: "#EFB63F", marginTop: 10 }}>{price}</SubTitle>
            </View>

            <RowDireection style={{ gap: 10 }}>
                <Pressable onPress={handleDecrease}>
                    <Image source={count == 0 ? Decreacse0 : Decreacse} style={{ height: 22, width: 22, borderRadius: 8 }} />
                </Pressable>
                <PageHeadingText>{count}</PageHeadingText>
                <Pressable onPress={handleIncrease}>
                    <Image source={Increase} style={{ height: 20, width: 20, borderRadius: 8 }} />
                </Pressable>
            </RowDireection>
        </RowDireection>
    </MenuCardtView>
);

const ListingItems = ({navigation}) => {
    const [selectItem, setSelectitem] = useState(['Combo'])
    const [listMenu, setListMenu] = useState<any>(MenuData)

    const handleSelectAll = () => {
        if (selectItem?.length > 1) {
            setSelectitem([''])
        } else {
            setSelectitem(DATA?.map((val) => val.title))
        }
    }

    const handleSelectMenu = (id: string) => {
        const findTitle = DATA.filter((val) => val.id !== id)
        if (findTitle) {
            setSelectitem(findTitle.map((val) => val.title))
        } else {
            setSelectitem((prev) => ([...prev, ...findTitle]))
        }
    }

    const handleIncrease = (id: string) => {
        const addCount = listMenu.map((val: any) => {
            val.id == id ?  val.count = val.count + 1 : val.count
            return val;
        })
        setListMenu(addCount)

    }

    const handleDecrease = (id: string) => {
        const lessCount = listMenu.map((val: any) => {
            val.id == id ? val.count = val.count - 1 : val.count
            return val;
        })
        setListMenu(lessCount)
    }


    return (
        <Container>
            <StatusBar animated={true} backgroundColor="#fff" barStyle={'dark-content'} />
            <CardTopView>
                <RowDireection>
                    <Pressable onPress={()=>navigation.goBack()}>
                    <Image source={LeftArrow} style={{ height: 20, width: 26 }} />
                    </Pressable>
                    <PageHeadingText>Merchant Deatil</PageHeadingText>
                </RowDireection>
                <LocationView>
                    <Image source={{ uri: Henry }} style={{ height: 60, width: 60, borderRadius: 8 }} />
                    <View>
                        <PageHeadingText style={{ fontSize: 20, marginBottom: 10 }}>Chicken Lalapan Gresik</PageHeadingText>
                        <RowDireection>
                            <Image source={Locaton} style={{ height: 20, width: 14, borderRadius: 8 }} />
                            <SubTitle>4831,kilder Boynoton Beach, Florida 334</SubTitle>
                        </RowDireection>
                    </View>
                </LocationView>
                <View style={{ ...styles.hairline, marginTop: 14 }}></View>
                <CenterView style={{ flexDirection: "row", marginTop: 18 }}>
                    {
                        Ratings?.map((items, i, { length }) => (
                            <>
                                <View key={i}>
                                    <RowDireection>
                                        <Image source={items.icon} style={{ height: 20, width: 16 }} />
                                        <PageHeadingText style={{ fontSize: 20, marginLeft: -6 }}>{items?.title}</PageHeadingText>
                                    </RowDireection>
                                    <SubTitle style={{ marginTop: 10 }}>{items?.label}</SubTitle>
                                </View>
                                {length !== i + 1 && <View style={{ ...styles.vartiline }}></View>}
                            </>
                        ))
                    }
                </CenterView>
                <View style={{ ...styles.hairline, marginTop: 14 }}></View>
                <RowDireection style={{ gap: 6, marginTop: 20 }}>
                    <Pressable onPress={handleSelectAll}>
                        <ChipView style={{ backgroundColor: "" }}>
                            <SubTitle style={{ color: "#4E585E" }}>All</SubTitle>
                        </ChipView>
                    </Pressable>
                    <FlatList
                        data={DATA}
                        horizontal
                        renderItem={({ item }) => <Chip title={item.title} icon={item.icon} color={selectItem?.includes(item?.title) ? "#CE4B36" : "#ffff"} handleSelectMenu={() => handleSelectMenu(item.id)} />}
                        keyExtractor={item => item.id}
                    />
                </RowDireection>
            </CardTopView>

            <CardBttomView>
                <RowDireection style={{ marginBottom: 20 }}>
                    <PageHeadingText>Combo</PageHeadingText>
                    <Image source={Leg} style={{ height: 24, width: 24 }} />
                </RowDireection>
                <View>
                    <FlatList
                        data={listMenu}
                        renderItem={({ item }) => <ListMenuItem dishName={item.dishName} icon={item.icon} items={item.items} count={item.count} price={item.price} handleIncrease={() => handleIncrease(item.id)} handleDecrease={() => handleDecrease(item.id)} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <CardBttomView>
                    <View style={styles.hairline} />
                </CardBttomView>
                <BottomButton />
            </CardBttomView>
        </Container>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 28,
        alignItems: 'center',
    },
    button: {
        width: '90%',
        backgroundColor: '#CB341C',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        display: "flex",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    hairline: {
        backgroundColor: '#D9DBDD',
        height: .5,
        width: '100%',
        marginTop: 3
    },
    vartiline: {
        backgroundColor: '#D9DBDD',
        width: 1,
        height: '100%',
        marginHorizontal: 10
    },
});

export default ListingItems;