import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import Icon from '@/assets/images/avatar.png'
import Taski from '@/assets/images/taski'
import Marker from '@/assets/images/marker'
import Delete from '@/assets/images/delete'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Main() {
    let [array, setArr] = useState([])

    useEffect(()=>{
        getData()
    },[])
    async function getData() {
        const value = await AsyncStorage.getItem('task')
        if(value != null){
            const data = JSON.parse(value)
            setArr(data)
        }
        else{
            return 0
        }
    }
    return (
        <View style={{ alignItems: 'center', paddingTop: 38, paddingLeft: 26, paddingRight: 26, width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <Taski />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <Text style={style.text1}>John</Text>
                    <Image source={Icon} />
                </View>
            </View>
            <View style={{ width: '100%' }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={style.text2}>Welcome,<Text style={{ color: '#007FFF' }}>John</Text>.</Text>
                    <Text style={style.text3}>You’ve got {array.length} tasks to do.</Text>
                </View>
            </View>
            <View style={{ gap: 16, width: '100%' }}>
                {array.map(el =>
                    !el.isDone ? <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                            <TouchableOpacity onPress={async () => {
                                const flags = array.map(elem => {
                                    if (elem == el) {
                                        if (elem.isDone == true) return { ...elem, isDone: false }
                                        else return { ...elem, isDone: true }
                                    }
                                    else return elem
                                })
                                setArr(flags)
                                await AsyncStorage.setItem('task', JSON.stringify(flags))
                            }}><View style={{ borderWidth: 2, borderColor: '#C6CFDC', width: 24, height: 24, borderRadius: 7 }}></View></TouchableOpacity>
                            <Text style={style.text1}>{el.title}</Text>
                        </View>
                        <TouchableOpacity>...</TouchableOpacity>
                    </View> : <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                            <TouchableOpacity onPress={async () => {
                                const flags = array.map(elem => {
                                    if (elem == el) {
                                        if (elem.isDone == true) return { ...elem, isDone: false }
                                        else return { ...elem, isDone: true }
                                    }
                                    else return elem
                                })
                                setArr(flags)
                                await AsyncStorage.setItem('task', JSON.stringify(flags))
                            }}><View style={{ borderWidth: 2, borderColor: '#C6CFDC', width: 24, height: 24, borderRadius: 7, backgroundColor: '#C6CFDC', justifyContent: 'center'}}><Marker/></View></TouchableOpacity>
                            <Text style={[style.text1, {color: '#8D9CB8'}]}>{el.title}</Text>
                        </View>
                        <TouchableOpacity onPress ={async () => {
                            const temp = array.filter(elem =>{
                                if (elem == el) {
                                    return false
                                }
                                else return true
                            })
                            setArr(temp)
                            await AsyncStorage.setItem('task', JSON.stringify(temp))
                        }}><Delete/></TouchableOpacity>
                    </View>)}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    text1: { fontFamily: 'UrbanistMedium', fontSize: 16, fontWeight: 600, color: '#3F3D56' },
    text2: { fontFamily: 'UrbanistBold', fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#3F3D56' },
    text3: { fontFamily: 'UrbanistMedium', fontSize: 16, fontWeight: 500, color: '#8D9CB8', marginBottom: 4 },
    button: { fontFamily: 'UrbanistSemiBold', fontSize: 18, fontWeight: 600, color: '#007FFF', borderRadius: 12, paddingRight: 16, paddingLeft: 16, backgroundColor: '#F5F7F9' }
})
