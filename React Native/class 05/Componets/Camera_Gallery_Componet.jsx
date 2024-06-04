import { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export const Camera_Gallery_Component = () => {

    const [captured_image, setCaptured_image] = useState([])
  
    const open_camera_handle = async () => {

        const result = await launchCamera({includeBase64:false, mediaType:'photo'})
  
        if(!result.didCancel){
            const image_uri = result.assets[0].uri
            setCaptured_image(image_uri)
        }

        console.log(result)
    }




    const open_gallery_handle = async () => {

        const result = await launchImageLibrary({includeBase64:false, mediaType:'photo',selectionLimit:2 });

        if(!result.didCancel){
            const image_uri = result.assets
            setCaptured_image(image_uri)
        }
        

        console.log(result)
    }




    return <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:20, flex:1}}>

        <View>
           {captured_image.length > 0 ? captured_image.map((image)=><Image resizeMode="cover" style={{width:300, height:200}} source={{uri:image.uri}} /> ): null}
        </View>

        <View style={{gap:10}}>




            <TouchableOpacity onPress={open_camera_handle} style={{backgroundColor:'gray', paddingVertical:10, }}>
                <Text style={{fontWeight:'bold', fontSize:20, color:"white", paddingHorizontal:30}}>
                    Open Camera
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={open_gallery_handle} style={{backgroundColor:'gray', paddingVertical:10, }}>
                <Text style={{fontWeight:'bold', fontSize:20, color:"white", paddingHorizontal:30}}>
                    Open Gallery
                </Text>
            </TouchableOpacity>
        </View>

    
    </View>
}
