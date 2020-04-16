import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Trivia Playing Cats   
                <Image style={styles.image} source={{uri: "https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/10/cats-transparent-png-image.png?fit=679%2C573"}}/>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 16,
        backgroundColor: 'midnightblue',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 40,
        height: 40,
    }
})

export default Header;