import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import HomeModal from "../../components/home/modal";
import { FEELINGS } from "../../constants/feeling";
import { Feeling } from "../../interfaces/feeling-interface";

import styles from './styles';


const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const [feelingSelected, setFeelingSelected] = useState<Feeling>()

    function openModalInfo(feeling: Feeling){
        console.log(feeling)
        setOpenModal(true)
        setFeelingSelected(feeling)
    }

    return (
        <View style={styles.container} >
            <View style={styles.viewTitle} >
                <Text style={styles.title}>SENTIMENTOS</Text>
            </View>
            <ScrollView contentContainerStyle={styles.flatList}>
                <View style={styles.viewCards} >
                    {
                        FEELINGS.map((feeling: Feeling, i) => (
                            <TouchableOpacity onPress={() => openModalInfo(feeling)} key={i} style={styles.card} >
                                <View style={styles.viewImage} >
                                    <Image style={styles.image} source={feeling.image} />
                                </View>
                                <View style={styles.viewName} >
                                    <Text style={styles.name} >{feeling.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>

            {openModal && <HomeModal feelingSelected={feelingSelected} setOpenModal={() => setOpenModal(false)}/>}
        </View>
    )
}

export default Home;