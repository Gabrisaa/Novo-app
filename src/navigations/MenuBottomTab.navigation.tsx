import React from "react";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from '@expo/vector-icons';


type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Slide1" components={ScreenSlide1}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={20} color="black" />
                    )
                }}
            />
                <Tab.Screen name="Slide2" components={ScreenSlide2}
                 options={{
                    tabBarIcon: () => (
                        <Ionicons name="chatbubble" size={20} color="black" />
                    )
                }}
                />
        </Tab.Navigator>
    )
}





