import React, { useEffect } from "react"
import { 
    TouchableOpacity,
    View,
    Image,
    Text,
 } from 'react-native'
import { iconButtonStyle } from "./styles"

interface ButtonIconStyle{
    Icon: any,
    Text: string
}

export const ButtonIcon: React.FC<ButtonIconStyle> = (props: ButtonIconStyle)=>
{
    
    return(
        <TouchableOpacity style={iconButtonStyle.container}>
            <View style={iconButtonStyle.iconWrapper}>
                <Image style={iconButtonStyle.icon} source={props.Icon}/>
            </View>
            <Text style={iconButtonStyle.title}>
                {props.Text}
            </Text>
        </TouchableOpacity>
    )
}