import { Text, TouchableOpacity, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


export const Geo_Location_Component = () => {

    const access_location_handle = () => {

        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );


    }


    return <View>

        <TouchableOpacity onPress={access_location_handle}>
            <Text style={{ fontSize: 25 }}>
                Access Location
            </Text>
        </TouchableOpacity>

    </View>


}