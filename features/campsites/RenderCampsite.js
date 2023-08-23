import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';
import { useState } from 'react';

const RenderCampsite = (props) => {
    const { campsite } = props;
    if (campsite) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={{ uri: baseUrl + campsite.image }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                    
                    {/* made edits here */}
                        <Text
                            style={styles.cardText}
                        >
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
                    <View style={styles.cardRow}>
                        <Icon style={styles.icon}/>
                    </View>

                <cardRow style={styles.cardRow}>
                    <View>
                    </View>
                </cardRow>  
                
                <cardText style={styles.cardText}>
                    <View>
                    </View>
                </cardText>

            </Card>
        );
    }
    return <View />;
};

const styles = StyleSheet.create({
        cardContainer: {
            padding: 0,
            margin: 0,
            marginBottom: 20
        }
        cardRow {
            alignItems:'center',
            justifyContent:'center',
            flex: 1,
            flexDirection: 'row',
            margin: 20
        }
        cardText {
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowOffset:{ width: -1, height: 1 },
            textShadowRadius: 20,
            textAlign: 'center',
            color: 'white',
            fontSize: 20
        }
        icon {
            name:{ props.onShowModal ? 'pencil' },
            type:'font-awesome',
            color:'#5637DD',
            raised,
            reverse,
            onShowModal={() => setShowModal(!showModal)}
        }
    }
);

export default RenderCampsite;

