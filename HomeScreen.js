import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FeaturedJobs from './components/FeaturedJobs';

const ProfilePic = require('./assets/profile-picture.png');
const OnlineCircle = require('./assets/online-circle.png');
const SearchImage = require('./assets/search-image.png');

export default function HomeScreen({ route }) {
    
    const {name, email} = route.params

    const FeaturedJobsData = [
        {id: '1', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'Software Engineer', companyName: 'Facebook', backgroundColor: 'red', price: '$120,00', location: 'Accra, Ghana' },
        {id: '2', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Software Engineer', companyName: 'Google', backgroundColor: 'blue', price: '$120,00', location: 'Accra, Ghana' },
        {id: '3', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Software Engineer', companyName: 'Google', backgroundColor: 'green', price: '$120,00', location: 'Accra, Ghana' },
        {id: '4', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'Software Engineer', companyName: 'Facebook', backgroundColor: 'lightred', price: '$120,00', location: 'Accra, Ghana' },
        {id: '5', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Software Engineer', companyName: 'Google', backgroundColor: 'brown', price: '$120,00', location: 'Accra, Ghana' },
        {id: '6', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'Software Engineer', companyName: 'Facebook', backgroundColor: 'pink', price: '$120,00', location: 'Accra, Ghana' },
        {id: '7', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Software Engineer', companyName: 'Google', backgroundColor: 'lightblue', price: '$120,00', location: 'Accra, Ghana' },
        {id: '8', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'Software Engineer', companyName: 'Facebook', backgroundColor: 'lightgreen', price: '$120,00', location: 'Accra, Ghana' },
    ];
    
    
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: hp('3%'), fontWeight: 'bold'}}>{ name }</Text>
                    <Text style={{fontSize: hp('2.5%'), color: '#95969D'}}>{ email }</Text>
                </View>
                <View style={styles.image}>
                    <TouchableOpacity>
                    <Image source={ ProfilePic }/>
                    <Image source={OnlineCircle} style={styles.isOnline}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.search}>
                <View style={styles.searchSpace}>
                    <Image source={SearchImage}/>
                    <TextInput style={styles.searchBox} placeholder='Search a job or position' />
                </View>
                <View>
                    <TouchableOpacity>
                    <View style={styles.filter}>
                        <View>
                        <Text>|</Text>
                        <Text>O</Text>
                        </View>
                        <View>
                        <Text>O</Text>
                        <Text style={{marginLeft: wp('1%')}}>|</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.featuredJobsBox}>
                <View style={styles.featuredJobsTitle}>
                    <Text style={{fontSize:hp('3%'), fontWeight: 'bold'}}>Featured Jobs</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: hp('2%'), color: '#95969D', paddingTop: hp('0.5%')}}>See all</Text>
                    </TouchableOpacity>
                </View> 
                <FlatList
                    data={FeaturedJobsData}
                    renderItem={({ item }) => (
                        <FeaturedJobs 
                            companyLogo={item.companyLogo}
                            jobTitle={item.jobTitle}
                            companyName={item.companyName}
                            backgroundColor={item.backgroundColor}
                            price={item.price}
                            location={item.location}
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
        // backgroundColor: 'lightblue',
        paddingLeft: wp('5%'),
    },

    profile: {
        marginTop: hp('5.5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: wp('5%'),
    },

    image: {
        flexDirection: 'row',
    },

    isOnline: {
        position: 'absolute',
        top: 6,
        left: 40,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 4,
    },

    search: {
        width: wp('90%'),
        marginTop: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'yellow',
        MarginRight: 5,
        height: hp('7%'),
      },

      searchSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F3',
        width: wp('73%'),
        borderRadius: 10, 
        paddingLeft: 10,
      },

      searchBox: {
        height: 50,
        width: wp('60%'),
        padding: 10,
        fontSize: hp('2%'),
        fontWeight: 'bold',  
      }, 

      filter: {
        width: wp('13%'),
        height: hp('7%'),
        backgroundColor: '#F2F2F3',
        borderRadius: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },

    featuredJobsBox: {
        height: hp('40%'),
        // backgroundColor: 'lightgreen',
        marginTop: hp('3%'),
    },

    featuredJobsTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: wp('6%'),
    }





})