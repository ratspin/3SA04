import React from 'react'
import { FlatList, View, Text, StyleSheet ,ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'ตรัง', code: '92000' ,pic:require('../img/ตรัง.jpg')}, 
    { place: 'กันตัง', code: '92110' ,pic:require('../img/กันตัง.jpeg')}, 
    { place: 'นาโยง', code: '92170' ,pic:require('../img/นาโยง.jpg')}, 
    { place: 'วังวิเศษ', code: '92220' ,pic:require('../img/วังวิเศษ.jpg')},
    { place: 'สิเกา', code: '92150' ,pic:require('../img/สิเกา.jpg')},
    { place: 'ห้วยยอด', code: '92130' ,pic:require('../img/ห้วยยอด.jpg')},
    { place: 'ปะเหลียน', code: '92140' ,pic:require('../img/ปะเหลียน.jpg')},
    { place: 'หาดสำราญ', code: '92120' ,pic:require('../img/หาดสำราญ.jpg')},
    { place: 'รัษฎา', code: '92160' ,pic:require('../img/รัษฎา.jpg')},
    { place: 'ย่านตาขาว', code: '92140' ,pic:require('../img/ย่านตาขาว.jpg')},
]

const ZipItem = ({place, code, navigation,pic}) => (
    // <View style={styles.background}>
    <TouchableHighlight onPress={() => 
    {navigation.navigate('Weather', {zipCode: code})}}>
        <View style={styles.zipItem,styles.Text}>
            <ImageBackground source={pic} style={styles.backgrounditem}>
                    <Text style={{ fontSize: 27, color: 'white' }}>{place}</Text>
                    {/* <Text style={{ fontSize: 20, color: 'white' }}>{code}</Text> */}
            </ImageBackground>
        </View>
    </TouchableHighlight>
    // </View>
)

export default function ZipCodeScreen(){ 
    const navigation = useNavigation()
    return ( 
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>  
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({item}) => <ZipItem {...item} 
                navigation={navigation} />}
            /> 
        </ImageBackground>       
    )
}

const styles = StyleSheet.create({
    zipItem: {
        alignItems: 'center', 
        paddingTop: 10, 
        paddingBottom: 10,
    },
    Text: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '10%'
    },
    background: {
        backgroundColor: '#CCFFFF',
        // marginLeft: 20,
        // marginRight: 20,
        // margin: 3,
        // borderRadius: 50,
    },
    // container: { 
    //     flex: 1, 
    //     alignItems: 'center', 
    //     width: '100%', 
    //     height: '100%' 
    // },
    backgrounditem:{
        height:150,
        width:415,
        padding:55,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
    },
}) 