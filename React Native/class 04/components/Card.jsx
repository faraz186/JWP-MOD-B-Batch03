import { useState } from "react"
import { Text, View } from "react-native"

const Card = () => {
    const [list, setList] = useState([
        '1',
        '2',
        '3',
        '4',
        '5',
    ])


    return <>
    <View>
        <Text>List</Text>
    </View>

    <View>
        {
            list.map((item)=>{
                return <Text>
                    {item}
                </Text>
            })
        }
    </View>
    </>


}


export {Card}