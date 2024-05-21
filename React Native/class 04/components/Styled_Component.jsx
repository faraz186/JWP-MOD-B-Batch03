import { StyleSheet, Text, View } from "react-native"

const Styled_Component = () => {

    return <View style={{flex:1, flexDirection:'row'}}>

        <View style={[styles.container_01,styles.common_styles]}>

            <Text style={styles.title}>
                Styled Component 01
            </Text>


        </View>
        <View style={[styles.container_02, styles.common_styles, {backgroundColor:'white'}]}>

            <Text style={styles.title}>
                Styled Component 02
            </Text>

        </View>
        <View style={[styles.container_03, styles.common_styles]}>

            <Text style={styles.title}>
                Styled Component 01
            </Text>


        </View>
    </View>
}

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: 'black',
    //     // height:200,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flex: 1

    // },
    container_01: {
        flex: 2,

        backgroundColor:'blue',


    },
    container_02: {
        flex: 3,
        backgroundColor:'green'

    },
    container_03: {
        flex: 1,
        backgroundColor:'red',
        

    },
    common_styles:{
        justifyContent:'center',
        alignItems:'center'
    }
    // title: {
    //     color: 'white',
    //     fontSize: 30
    // }


})

export { Styled_Component }
