import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{margin: 20}}>
                <Card.Title>
                    Contact Information
                </Card.Title>
                <Card.Divider />
                <Text>
                    1 Nucamp Way 
                </Text>
                <Text>
                    Seattle, WA 98001     
                </Text>
                <Text style= {{marginBottom: 10}}>
                    U.S.A.
                </Text>
                <Text>
                    Phone: 1-206-555-1234    
                </Text>
                <Text>
                    Email: campsites@nucamp.co
                </Text>
            </Card>
        </ScrollView>
    );
};

export default ContactScreen;



// const RenderCampsite = ({ campsite }) => {
//     if (campsite) {
//         return (
//             <Card containerStyle={{ padding:0 }}>
//                 <Card.Image source={campsite.image}>
//                     <View style={{ justifyContent: 'center', flex: 1  }}>
//                         <Text
//                             style={{
//                                 color: 'white',
//                                 textAlign: 'center',
//                                 fontSize: 20
//                             }}
//                         >
//                             {campsite.name}
//                         </Text>
//                     </View>
//                 </Card.Image>
//                 <Text style={{ margin:20 }}>{campsite.description}</Text>
//             </Card>
//         );
//     }
//     return <View />;
// };
