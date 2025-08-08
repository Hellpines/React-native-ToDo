import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from '@/assets/images/avatar.png'
import Taski from '@/assets/images/taski'
const arr = [{title : 'Design sign up flow'}, {title : 'Design use case page'}, {title : 'Test Wireframe'}, {title: 'Create new task UI flow'}, {title : 'Collect project assets'}, {title: 'Collect project assets'}]
export default function Main(){
    return(
        <View style={{alignItems: 'center', paddingTop: 38, paddingLeft: 26, paddingRight: 26, width: '100%'}}>
            <View style ={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}>
                <Taski/>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 14}}>
                    <Text style={style.text1}>John</Text>
                    <Image source={Icon}/>
                </View>
            </View>
            <View style={{width: '100%'}}>
                <View style={{justifyContent: 'flex-start'}}>
                    <Text style={style.text2}>Welcome,<Text style={{color: '#007FFF'}}>John</Text>.</Text>
                    <Text style={style.text3}>You’ve got 7 tasks to do.</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 13, alignItems: 'center'}}>
                    <Text style={{fontFamily: 'SpaceMono', fontSize: 14, fontWeight: 500, color: '#C6CFDC'}}>Add a note...</Text>
                    <TouchableOpacity style={style.button}>+ Create task</TouchableOpacity>
                </View>
            </View>
            <View style={{gap: 16, width: '100%'}}>
                {arr.map(el => 
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                        <View style={{borderWidth: 2, borderColor: '#C6CFDC', width: 24, height: 24, borderRadius: 7}}></View>
                        <Text style={style.text1}>{el.title}</Text>
                    </View>
                    <TouchableOpacity>...</TouchableOpacity>
                </View>)}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    text1 : {fontFamily: 'SpaceMono', fontSize: 16, fontWeight: 600, color: '#3F3D56'},
    text2 : {fontFamily: 'SpaceMono', fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#3F3D56'},
    text3 : {fontFamily: 'SpaceMono', fontSize: 16, fontWeight: 500, color: '#8D9CB8', marginBottom: 4},
    button: {fontFamily: 'SpaceMono', fontSize: 18, fontWeight: 600, color: '#007FFF',borderRadius: 12, paddingRight: 16, paddingLeft: 16, backgroundColor: '#F5F7F9'}
})