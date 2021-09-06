import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Card, Paragraph, Caption } from 'react-native-paper';
import { TimeController } from './TimeController';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { View } from 'react-native';
import { StyleSheet } from "react-native";
import { COLORS } from '../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        margin:10
    },
    content: {
        justifyContent:"space-between", 
        flexDirection:"row"
    },
    interactionContainer:{ 
        justifyContent:"flex-end", 
        flexDirection:"row"
    },
    score:{ 
        marginRight:10
    }
});

export function PostCard({data:{title,id,url,thumbnail, author,score, created, num_comments}}){
    
    const navigation = useNavigation();

    function handleOnPress(){
        navigation.navigate("Online",{url,title})
    }
    return(
        <Card 
            key={id} 
            style={styles.container} 
            onPress={handleOnPress}
        >              
            <Card.Title 
                title={title}
                subtitle={author}
                titleNumberOfLines={10}
            />
            <Card.Cover source={{ uri: thumbnail}} />
            <Card.Content style={styles.content}>
                <Caption >
                    <TimeController unixTime={created} />
                </Caption>
                <View style={styles.interactionContainer}>
                    <Paragraph style={styles.score}>
                        <Entypo 
                            name="thumbs-up" 
                            size={12} 
                            color={COLORS.orange}
                        />
                        {score}
                    </Paragraph>
                    <Paragraph>
                        <FontAwesome 
                            name="comments-o" 
                            size={12} 
                            color={COLORS.orange}
                        /> 
                        {num_comments}
                    </Paragraph>
                </View>
            </Card.Content>
        </Card>
    )
}