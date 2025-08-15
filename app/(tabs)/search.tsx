import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Taski from '@/assets/images/taski'
import Icon from '@/assets/images/avatar.png'
import NotFound from '@/assets/images/notfound'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Delete from '@/assets/images/delete'
import Marker from '@/assets/images/marker'

export default function Search() {
    let [title, setTitle] = useState('');
    let [arr, setArr] = useState([])
    async function getData() {
        const value = JSON.parse(await AsyncStorage.getItem('task')) || []
        const res = value.filter(el => el.title.includes(title) && title != '')
        setArr(res)
    }
    useEffect(() => {
        getData()
    }, [title])
    return (
        <View style={{ alignItems: 'center', paddingTop: 38, paddingLeft: 26, paddingRight: 26, width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <Taski />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <Text style={style.text1}>John</Text>
                    <Image source={Icon} />
                </View>
            </View>
            <TextInput placeholder='Search...' onChangeText={(text) => {
                setTitle(text)
                console.log(title);
            }} style={{ width: '100%', boxShadow: '0px 0px 0px 2px #007FFF80', borderRadius: 12, padding: 15 }} />
            {arr.map(el =>
                !el.isDone ? <View style={{ flexDirection: 'row',width: '100%', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row',  alignItems: 'center', gap: 16 }}>
                        <TouchableOpacity onPress={async () => {
                            const flags = arr.map(elem => {
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
                </View> : <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between', marginTop: 20, gap: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <TouchableOpacity onPress={async () => {
                            const flags = arr.map(elem => {
                                if (elem == el) {
                                    if (elem.isDone == true) return { ...elem, isDone: false }
                                    else return { ...elem, isDone: true }
                                }
                                else return elem
                            })
                            setArr(flags)
                            await AsyncStorage.setItem('task', JSON.stringify(flags))
                        }}><View style={{ borderWidth: 2, borderColor: '#C6CFDC', width: 24, height: 24, borderRadius: 7, backgroundColor: '#C6CFDC', justifyContent: 'center' }}><Marker /></View></TouchableOpacity>
                        <Text style={[style.text1, { color: '#8D9CB8' }]}>{el.title}</Text>
                    </View>
                    <TouchableOpacity onPress={async () => {
                        const temp = arr.filter(elem => {
                            if (elem == el) {
                                return false
                            }
                            else return true
                        })
                        setArr(temp)
                        await AsyncStorage.setItem('task', JSON.stringify(temp))
                    }}><Delete /></TouchableOpacity>
                </View>)}
        </View>
    )
}

const style = StyleSheet.create({
    text1: { fontFamily: 'UrbanistMedium', fontSize: 16, fontWeight: 600, color: '#3F3D56' },
})