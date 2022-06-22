import React, { useEffect } from "react";
import { styles  } from "./styles";
import {
    View,
    Text,
    Image,
    StatusBar,
    } from 'react-native'
import illustrationImg from '../../assets/illustration.png'
import {ButtonIcon} from "../../components/ButtonIcon";
import DiscordIcon from '../../assets/discord.png'

const signIn: React.FC = ()=>{
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image source={illustrationImg} 
                resizeMode="stretch" 
                style={styles.image}/>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`} 
                    suas jogatinas {`\n`} 
                    facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon
                    Text="Entrar com o Discord"
                    Icon={DiscordIcon}
                 />
            </View>
        </View>

    )
}

export default signIn