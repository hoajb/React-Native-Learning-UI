import React, { useEffect, useRef, version } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, Alert, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { DetailsProps } from '../navigation/Navigator';
import Swiper from 'react-native-swiper';
import { Product } from '../data/Product';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const DetailsScreen = ({ navigation, route }: DetailsProps) => {
    const { product } = route.params
    console.log(product)

    return (
        <View style={styles.container}>
            <ImageSwiper
                images={[
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ]} />
        </View>
    )
}

interface ImageSwiperProps {
    images: string[];
}

const ImageSwiper = ({ images }: ImageSwiperProps) => {

    return (
        <View style={[styles.swipeContainer]}>
            <Swiper showsButtons loop={false}>
                {images.map((url, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={{ uri: url }} style={styles.image} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    text: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: "bold",
        textAlign: "center",
    },

    swipeContainer: {
        height: height * 3 / 7,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        marginBottom: 50,
        aspectRatio: 3 / 2,
        borderRadius: 0,
        resizeMode: 'contain'
    },

});

export default DetailsScreen
