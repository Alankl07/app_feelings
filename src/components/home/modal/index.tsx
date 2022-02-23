import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, AppState } from "react-native";
import { Feather } from '@expo/vector-icons'
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from './styles';
import { HomeModalInterface } from "../../../interfaces/homeModal-interface";
import * as Speech from "expo-speech";
import { COLORS } from "../../../constants/colors";
import { SCREEN } from "../../../constants/screen-constants";

const HomeModal = ({ setOpenModal, feelingSelected }: HomeModalInterface) => {

    const [mode, setMode] = useState('')

    useEffect(() => {
        const ac = new AbortController();
        AppState.addEventListener('change', loadApp);
        return () => ac.abort();
    }, [])

    function loadApp() {
        if (AppState.currentState != 'active') {
            stopSpeak()
        }

        if (AppState.currentState == 'active') {
            setMode('')
        }
    }

    function speak() {
        setMode('audio')
        if (feelingSelected) {
            Speech.speak(feelingSelected.info, {
                language: 'pt-br'
            })
        }
    }

    function stopSpeak() {
        Speech.stop()
    }

    function setWidthImage() {
        if (feelingSelected?.name == 'Amor') return { width: 90 }
        return { width: 80 }
    }

    function findMoview() {
        if (feelingSelected?.movie != '') return true
        return false
    }

    function heigth_movie(){
        if(SCREEN.HEIGHT <= 534) return 150
        return 200
    }

    function componentInfo() {
        if (mode == 'movie') {
            stopSpeak()
            return (
                <View style={styles.viewWebView} >
                    <Text style={[styles.textViewWeb, { color: COLORS.WHITE }]} >Carregando video ...</Text>
                    <YoutubeIframe
                        height={heigth_movie()}
                        play={true}
                        videoId={feelingSelected?.movie}
                    />
                </View>
            )
        }

        if (mode == 'audio') {
            return (
                <View style={styles.viewAudio} >
                    <Text style={[styles.textViewWeb, { color: COLORS.BLACK }]}>Reproduzindo...</Text>
                </View>
            )
        }

        stopSpeak()
        return (
            <ScrollView>
                <View style={styles.viewText} >
                    <Text style={styles.textInfo}>{feelingSelected?.info}</Text>
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.contant}>
                <View style={styles.viewInfo} >
                    <View style={styles.viewHeader}>
                        <View style={styles.viewImage} >
                            <Image style={[styles.image, setWidthImage()]} source={feelingSelected?.image} />
                        </View>
                        <View style={styles.viewTitle} >
                            <Text style={styles.title} >{feelingSelected?.name}</Text>
                        </View>
                    </View>
                    <View style={styles.info} >
                        {componentInfo()}
                    </View>
                    <View style={styles.more} >
                        <TouchableOpacity style={mode == 'read' || !mode ? styles.buttonMoreSelected : styles.buttonMore} onPress={() => setMode('read')} >
                            <Feather name="file-text" size={24} color="black" />
                        </TouchableOpacity>

                        {findMoview() && <TouchableOpacity style={mode == 'movie' ? styles.buttonMoreSelected : styles.buttonMore} onPress={() => setMode('movie')} >
                            <Feather name="video" size={24} color="black" />
                        </TouchableOpacity>}

                        <TouchableOpacity style={mode == 'audio' ? styles.buttonMoreSelected : styles.buttonMore} onPress={() => speak()} >
                            <Feather name="play" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewButton} >
                        <TouchableOpacity style={styles.button} onPress={() => {
                            setOpenModal(),
                                stopSpeak()
                        }} >
                            <Text style={styles.textButton} >VOLTAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeModal;