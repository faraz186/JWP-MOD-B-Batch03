import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const Image_Picker_Component = () => {
    const [images, setImages] = useState([])


    const image_picker_callback = (res)=>{

        if(res.didCancel){
            console.log('User cancelled to capture the image')

            return
        }
        else{

            setImages(res.assets)
            return

        }
    }

    const open_camera_handle = () => {
        launchCamera({includeBase64:false, mediaType:'photo'}, image_picker_callback);
    }


    const open_gallery_handle = ()=> {
        launchImageLibrary({includeBase64:false, mediaType:'photo', selectionLimit:3}, image_picker_callback)

    }
  return (<View>

    <View>
        {images.map((image) => <Image style={{width:200, height:200, resizeMode:'cover'}} source={{uri:image.uri}} />)}
    </View>

    
     <TouchableOpacity onPress={open_camera_handle}>
        <Text style={{fontSize:25}}>
           Open Camera
        </Text>
    </TouchableOpacity>
     <TouchableOpacity onPress={open_gallery_handle}>
        <Text style={{fontSize:25}}>
           Open Gallery
        </Text>
    </TouchableOpacity>

  </View>
  )
}

