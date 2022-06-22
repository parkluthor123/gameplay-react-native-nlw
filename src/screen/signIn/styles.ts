import { StyleSheet, PixelRatio } from "react-native";
import { theme } from "../../global/styles/theme";
import { normalize } from "../../components/Helper";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    image:{
        width: '100%',
        height: normalize(360, 100),
    },
    title:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: normalize(40, 5),
        marginBottom: 16,

    },
    subtitle:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign:'center',
        marginBottom: normalize(64, 6)
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 50
    }
});