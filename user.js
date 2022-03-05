/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

const User = ({navigation, route}) => {
    const [list, setList] = useState([
        {id: 1, name:""},
        {id: 2, name:""},
        {id: 3, name:""},
        {id: 4, name:""},
        {id: 5, name:""}
    ])
    return (
        <View style={{flex: 1}}>
            <ScrollView 
                        style={{
                            flex:1,
                            backgroundColor:'lightgrey'                            
                        }}
                        horizontal={true}
                        >
                
                {list.map((t) => 
                    <TouchableOpacity style={{
                                            height: 130, 
                                            width: 330, 
                                            backgroundColor: "white",
                                            borderRadius: 8,
                                            marginLeft: 20, 
                                            marginTop: 20

                                            
                                            }}
                                            disabled={true}
                                            
                                            >
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Image source={require('./image/istockphoto-1087552256-612x612.jpg')} resizeMode="stretch" style={{width:100, height:100, alignSelf:'center'}}/>
                        </View>
                        <View style={{flex: 1 , flexDirection:'column', justifyContent:'center', alignContent:'center'}}>
                            <View style={{margin:3, padding: 4}}><Text style={{fontSize:22}}>Cashback</Text></View>
                            <View style={{margin:3, padding: 2}}><Text style={{fontSize:15}}>On every payment</Text></View>
                            <View style={{margin:3, padding: 3}}><Text style={{fontSize:11}}>use Code 11123</Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
                )}
                
                
            </ScrollView>
            <View style={{flex: 2,marginBottom:4, flexDirection: 'column', backgroundColor:'lightgrey'}}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 4,marginRight: 4, padding: 3}}>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 2}}><Icon name="mobile" size={50} color="orange"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>Recharge</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon1 name="network" size={40} color="lightblue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>Data</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginLeft: 4,marginRight: 4, padding: 3}}>
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginLeft: 4,marginRight: 4, padding: 3}}>
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginLeft: 4,marginRight: 4, padding: 3}}>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , margin: 3, justifyContent:'center', alignContent: 'center'}}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Icon name="user" size={40} color="blue"/></View>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf:'center', padding: 4}}><Text style={{fontWeight:'bold'}}>User</Text></View>
                    </View>
                </View>
            </View>  
        </View>
    )
};

export default User;


const Style = StyleSheet.create({
    cardStyle:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        fontSize:23,
        fontStyle:'normal',
        color:'red'

    }
}
)
