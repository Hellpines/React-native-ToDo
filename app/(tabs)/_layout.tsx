import { Tabs } from "expo-router"
import Icon1 from '@/assets/images/icon1'
import Icon2 from '@/assets/images/icon2'
import Icon3 from '@/assets/images/icon3'
import Icon4 from '@/assets/images/icon4'

export default function TabLayout(){
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#007FFF',
            
        }}>
            <Tabs.Screen name="index" options={{title : 'ToDo', headerShown: false, tabBarIcon: Icon1 }}/>
            <Tabs.Screen name="create" options={{title : 'Create', headerShown: false, tabBarIcon: Icon2}}/>
            <Tabs.Screen name="search" options={{title : 'Search', headerShown: false, tabBarIcon: Icon3}}/>
            <Tabs.Screen name="done" options={{title : 'Done', headerShown: false, tabBarIcon: Icon4}}/>
        </Tabs>
    )
}