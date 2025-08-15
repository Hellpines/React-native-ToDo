import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Taski from '@/assets/images/taski'
import Icon from '@/assets/images/avatar.png'
import NotFound from '@/assets/images/notfound'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Delete from '@/assets/images/delete'
import Marker from '@/assets/images/marker'

export default function Done() {
    const [arr, setArr] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        const value = JSON.parse(await AsyncStorage.getItem('task')) || []
        const result = value.filter((el: any) => el.isDone != false)
        setArr(result)
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 33 }}>
                <Text style={{ fontFamily: 'UrbanistMedium', fontSize: 16, fontWeight: 700 }}>Completed Tasks</Text>
                <TouchableOpacity style={{ color: 'red', fontFamily: 'UrbanistMedium', fontSize: 16, fontWeight: 600 }}>Delete all</TouchableOpacity>
            </View>
            <View style={{width: '100%', gap: 20}}>
                {arr.map(el =>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <TouchableOpacity onPress={() => {
                            const flags = arr.map(elem => {
                                if (elem == el) {
                                    if (elem.isDone == true) return { ...elem, isDone: false }
                                    else return { ...elem, isDone: true }
                                }
                                else return elem
                            })
                            setArr(flags)
                        }}><View style={{ borderWidth: 2, borderColor: '#C6CFDC', width: 24, height: 24, borderRadius: 7, backgroundColor: '#C6CFDC', justifyContent: 'center' }}><Marker /></View></TouchableOpacity>
                        <Text style={[style.text1, { color: '#8D9CB8' }]}>{el.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        const temp = arr.filter(elem => {
                            if (elem == el) {
                                return false
                            }
                            else return true
                        })
                        setArr(temp)
                    }}><Delete /></TouchableOpacity>
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