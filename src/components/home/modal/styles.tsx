import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { SCREEN, WINDOW } from "../../../constants/screen-constants";

export default StyleSheet.create({

    container: {
        height: SCREEN.HEIGHT,
        width: SCREEN.WIDTH,
        backgroundColor: COLORS.RGBA,
        position: 'absolute',
        justifyContent: 'flex-end',
        elevation: 6
    },

    contant: {
        height: SCREEN.HEIGHT / 1.2,
        width: SCREEN.WIDTH,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },

    viewInfo: {
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: COLORS.WHITE,
        padding: 10,
        elevation: 5
    },

    viewHeader: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },

    viewImage: {

    },

    image: {
        height: 80,
        borderRadius: 50
    },

    viewTitle: {
        flex: 1,
        marginLeft: 15,
        left: 50,
        justifyContent: 'center',
    },

    title: {
        fontSize: 25,
        fontWeight: '700'
    },

    info: {
        backgroundColor: COLORS.GRAY_LIGTH,
        marginVertical: 10,
        borderRadius: 10,
        height: WINDOW.HEIGHT / 2.5
    },

    viewText: {
        flex: 1,
        alignItems: 'center'
    },

    textInfo: {
        fontSize: 15,
        fontWeight: '500',
        margin: 8
    },

    more: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10
    },

    buttonMore: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        paddingHorizontal: 5,
        height: 50,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: COLORS.WHITE

    },

    buttonMoreSelected: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        paddingHorizontal: 5,
        height: 50,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: COLORS.DISABLE

    },

    viewButton: {
        height: WINDOW.HEIGHT / 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        width: 200,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: COLORS.WHITE

    },

    textButton: {
        fontSize: 15,
        fontWeight: '700'
    },

    viewWebView: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.BLACK_RGBA,
        backfaceVisibility: 'visible'
    },

    viewAudio: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center'
    },

    textViewWeb: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: "700"
    }
})