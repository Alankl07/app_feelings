import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants/colors";
import { SCREEN } from "../../constants/screen-constants";

const width = () => {
    if(SCREEN.WIDTH <= 320) return 130

    return 150
}

export default StyleSheet.create({

    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        padding: 10
    },

    content:{
        flex: 1
    },

    viewTitle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        marginBottom: 10,
        backgroundColor: COLORS.WHITE,
        elevation: 5,
        borderRadius: 10
    },

    title:{
        fontSize: 18,
        fontWeight: '700'
    },

    flatList:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    viewCards:{
        alignItems: 'center', 
        justifyContent: 'space-between',  
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingHorizontal: 10
    },

    card:{
        width: width(),
        height: 150,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
        marginVertical: 5

    },

    viewImage:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image:{
        width: 80,
        height: 80
    },

    viewName:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },

    name:{
        fontSize: 17,
        fontWeight: '700',
        color: '#000'
    }
})