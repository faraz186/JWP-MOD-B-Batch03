import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { primary_color } from '../utils/app_theme'

export const Signup = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex:1, paddingBottom:20}}>
    <ScrollView>
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Image resizeMode='cover' height={350} source={{ uri: 'https://img.freepik.com/premium-vector/useful-tips-abstract-concept-vector-illustration_107173-29003.jpg?w=740' }} />


      <View style={{ paddingHorizontal: 20, gap: 10 }}>

        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          Signup
        </Text>
        <View style={{ gap: 15 }}>

          <View>
            <Text>
              Name
            </Text>
            <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }} />
          </View>
          <View>
            <Text>
              Email
            </Text>
            <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }} />
          </View>
          <View>
            <Text>
              Password
            </Text>
            <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }} />
          </View>




          <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity style={{ backgroundColor: primary_color, paddingVertical: 15, borderRadius: 30, width:120 }}>
              <Text style={{ textAlign: 'center', color: 'white', flexWeight: 'bold' }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>




        </View>


      </View>

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

