import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export const profileAssets = [
    {
        title: "Edit Profile",
        icon: <AntDesign name="edit" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "My Listings",
        icon: <MaterialIcons name="sell" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "Favourites",
        icon: <FontAwesome5 name="heart" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "Orders",
        icon: <Feather name="package" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "Messages",
        icon: <AntDesign name="message" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "Payments & Earnings",
        icon: <AntDesign name="credit-card" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "Subscription / Premium",
        icon: <MaterialIcons name="subscriptions" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "Help & Support",
        icon: <Entypo name="help" size={24} color="black" />,
        route: "/(zseller)"
    },
    {
        title: "LogOut",
        icon: <MaterialIcons name="logout" size={24} color="red" />,
        route: "/(zseller)"
    }
];