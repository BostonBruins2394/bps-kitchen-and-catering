import React from 'react';
import {ScrollView,Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import {Link} from 'expo-router';
const gold='#D6AD59';
const Tile=({title,desc,href}:{title:string,desc:string,href:any})=><Link href={href} asChild><TouchableOpacity style={s.tile}><Text style={s.gold}>{title}</Text><Text style={s.muted}>{desc}</Text></TouchableOpacity></Link>;
export default function Home(){return <ScrollView style={s.page} contentContainerStyle={{padding:22,gap:18}}>
<Text style={s.brand}>BP'S KITCHEN</Text><Text style={s.sub}>AND CATERING</Text>
<View style={s.hero}><Text style={s.kicker}>ELEVATED DINING. PERSONALIZED EXPERIENCES.</Text><Text style={s.h1}>Eat Better.{"\n"}<Text style={{color:gold}}>Live Better.</Text></Text><Text style={s.muted}>Meal plans, catering and private chef experiences.</Text></View>
<Text style={s.heading}>Explore BP's Kitchen</Text>
<Tile title="SHOP MEAL PLANS" desc="Browse weekly and monthly packages" href="/meal-plans"/>
<Tile title="CATERING" desc="Request a custom event quote" href="/catering"/>
<Tile title="PRIVATE CHEF" desc="Request an in-home dining experience" href="/private-chef"/>
<Tile title="MY ACCOUNT" desc="Customer account and order history (setup required)" href="/account"/>
<Text style={s.footer}>Serving New Jersey and New York · 201-388-3236</Text>
</ScrollView>}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#101010'},brand:{color:gold,fontSize:25,fontWeight:'900',letterSpacing:4,marginTop:20},sub:{color:'#eee',letterSpacing:4,fontSize:11},hero:{backgroundColor:'#211b12',borderColor:'#5b492b',borderWidth:1,borderRadius:20,padding:22,gap:12,marginTop:8},kicker:{color:gold,fontSize:10,letterSpacing:1.5},h1:{color:'#fff',fontSize:36,fontWeight:'800'},muted:{color:'#b8ae9d',fontSize:14,lineHeight:21},heading:{color:'#fff',fontSize:20,fontWeight:'700',marginTop:8},tile:{backgroundColor:'#1c1b19',borderColor:'#403728',borderWidth:1,borderRadius:15,padding:18,gap:7},gold:{color:gold,fontSize:16,fontWeight:'800'},footer:{color:'#8c8477',fontSize:11,textAlign:'center',marginVertical:18}});
