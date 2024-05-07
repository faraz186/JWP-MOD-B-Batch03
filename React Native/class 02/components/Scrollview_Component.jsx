import { StyleSheet, View, Text, ScrollView } from "react-native"

const Scrollview_Component = () => {


    return <ScrollView >
    <View style={styles.container}>
        <Text style={styles.title}>
            List Items
        </Text>


        <View style={{gap:20}}>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
            <Text style={styles.text_style}>
            The style prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.
            </Text>
        </View>
    </View>

    
    </ScrollView>
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:20
    },
    title:{
        fontSize:30,
        fontWeight:'bold'

    },
    text_style:{
        fontSize:17,
        // color:'black'
    }
})


export {Scrollview_Component}