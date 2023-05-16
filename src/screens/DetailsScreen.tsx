import React, { FC, useEffect, useRef, version } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, Alert, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { DetailsProps } from '../navigation/Navigator';
import Swiper from 'react-native-swiper';
import { Product } from '../data/Product';
import { Dimensions } from 'react-native';
import { ProductTitleCard } from '../components/ProductItemOri';
import Divider from '../common/Divider';
import SelectionCard from '../components/SelectionCard';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

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

            <ProductTitleCard name={product.name} price={product.price} origin_price={product.origin_price} />
            <Divider />
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Select color</Text>
            <SelectionCard stringList={['red', 'blue', 'green']} />
            <Divider />
        </View>
    )
}

interface ImageSwiperProps {
    images: string[];
}

const ImageSwiper = ({ images }: ImageSwiperProps) => {

    return (
        <View style={[styles.swipeContainer]}>
            <Swiper showsButtons loop={true}>
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
        padding: 20,
        backgroundColor: 'white',
    },

    text: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: "bold",
        textAlign: "center",
    },

    swipeContainer: {
        height: SCREEN_HEIGHT * 3 / 7,
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
