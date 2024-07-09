import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import StarGray from '../../../assets/image/star-gray.png';
import ActiveNotify from '../../../assets/image/notification-active.png';
import ActiveDelete from '../../../assets/image/delete-active.png';
import ActiveHeart from '../../../assets/image/hear-active.png';
import ActiveHome from '../../../assets/image/home-active.png';
import { DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


export default function ProfileComponet() {
  const profile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
  const navigation = useNavigation()
  const Screens = [
    {
      icon: ActiveHome,
      Name: "Home",
      route: "Home"
    },
    {
      icon: ActiveNotify,
      Name: "Notifications",
      route: "notify"
    },
    {
      icon: ActiveDelete,
      Name: "Delete",
      route: "delete"
    },
    {
      icon: ActiveHeart,
      Name: "Life",
      route: "life"
    },
  ]

  const DrawerLayout = ({ icon, label, route }: any) => {
    return (

      <DrawerItem icon={() => <View style={styles.iconContainer}><Image source={icon} style={{ height: 20, width: 20 }} /></View>} label={label} onPress={() => navigation.navigate(route)}
      />
    )
  }

  const DrawerItems = () => (Screens.map((item) => (
    <DrawerLayout icon={item.icon} label={item.Name} route={item.route} />
  )))

  return (
    <View>
      <View style={styles.profileContainer}>
        <Image source={{ uri: profile }} style={{ height: 50, width: 50, borderRadius: 50 }} />
        <View>
          <Text style={styles.title}>Henry Dyson J</Text>
          <View style={{ ...styles.profileContainer, padding: 0, gap: 10, marginTop: 4 }}>
            <Image source={StarGray} style={{ height: 18, width: 18 }} />
            <Text>{`( 4.9 )`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.hairline}></View>
      <View>
        <DrawerItems />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 14,
    display: "flex",
    flexDirection: "row",
    gap: 10
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: "#02111A",
    textAlign: "center"
  },

  hairline: {
    backgroundColor: '#D9DBDD',
    height: 1,
    width: '100%',
    marginTop: 3
  },

  iconContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 40,
    width: 40,
    backgroundColor: '#ED714D',

  }

});