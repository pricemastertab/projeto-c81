import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Tab from "./TabNavigation";
import CreatePost from "../screens/CreatePost"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={Tab} ></Drawer.Screen>
            <Drawer.Screen name="Perfil" component={CreatePost} ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;