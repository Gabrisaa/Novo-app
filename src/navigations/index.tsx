import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./login.navigations";
{/* erro aq por causa de algo inexperado(???)*/}
export default function Navigation() {
    return(
<NavigationContainer>
< LoginNavigation/>
</NavigationContainer>
    )
 }