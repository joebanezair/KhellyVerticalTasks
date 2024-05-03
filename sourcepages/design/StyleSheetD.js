import { StyleSheet } from 'react-native';

const AppDesign = StyleSheet.create({
  buttonNavigation:{
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    borderColor: 'none',
    borderRadius: 0,
    backgroundColor: '#4743AF',
    borderWidth: 0,
    alignItems: 'center',
    flexWrap: 'wrap', 
  },

  //////////////////////////
  coinMainCredits:{
    borderBottomWidth: 0, 
    borderBottomColor: '#6C66ED',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  CoinsCreditTouch:{
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    marginRight: 5
  },
  containerCoins:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#4743af5a',
    padding: 5,
    borderRadius: 0,
    paddingLeft: 10, 
    paddingRight: 10,
    borderBottomColor: '#6C66ED',
    flexWrap: 'wrap', 
    alignSelf: 'flex-end',
  },

  conPrivilage:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', 
  },
  conText:{
    fontSize: 18,
    margin:2,
    marginTop: 1,
    color: '#ffff',
    fontWeight: 'bold'
  },


  NavigationConTop: {
    backgroundColor: '#0e011b',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },

  NavigationIconContainerLeft:{
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#0e011b',
    flexWrap: 'wrap', 
    alignSelf: 'flex-start'
  },

  NavigationIconContainer:{
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#0e011b',
    flexWrap: 'wrap', 
    alignSelf: 'flex-end',
  },
  NavigationTouchableOpacity:{
    padding: 10,
    marginRight:0,
    borderWidth: 0,
    borderBottomColor: '#6C66ED',
    borderRadius: 5
  },
  NavigationInsideIcon:{},
  ///////////////////////////////

  containerNavTop:{
    padding: 0,
    borderWidth: 0,
    borderColor: 'none',
    backgroundColor: '#010021',
    margin: 10,
    marginTop: 0,
  },

  imageContentMain:{
    display: 'flex',
    // flexDirection: 'row',
    padding: 5,
  },

  progressBarHolder:{
    alignSelf: 'center',
    padding: 5,
  },
  bottomPrivSpend:{
    padding: 5,
    backgroundColor: '#010021',
    textAlign: 'center',
    borderRadius: 0,
    color:'white',
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: '#17A9FD',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },

  textPrivilege:{
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 0,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#020033',
  },

  imageContent01:{
    display: 'flex',
    flexDirection:'row',
    padding: 0,
    // width: '43%',
    alignSelf: 'center',
    // borderRadius: 5,
    // margin: 5,
  },
  btnConR:{
    padding: 5,
    margin: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#020033',
    borderRadius: 0,
    // width: 168,
  },
  btnRtext:{
    color:'white',
    textAlign: 'center'
  },
  imageContent011:{
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#010021',
  },
  imageContent:{
      height: 90,
      width: 90,
      borderRadius: 0,
      margin: 5,
      marginLeft: 10,
      borderRadius: 100,
      alignSelf: 'center',
      backgroundColor: '#0700c384',
      // padding: 5,
  },

  imageC01:{
    height: '97%', 
    width: '90%', 
    borderRadius: 100,
    alignSelf: 'center', 
    marginLeft: 8
  },

  imageContentEdit:{
    backgroundColor: '#0e011b',
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    marginTop: -10,
    // marginTop: -5,
    // borderRadius: 10,
  },
  flex01:{
    display:'flex',
    flexDirection: 'row',
  },

  flex0102:{
    display: 'flex',
    alignSelf: 'flex-end',
  },
  wrapper01:{
    alignSelf: 'center',
    borderBottomColor: 'white',
    margin: 5,
    backgroundColor: '#0600ad48',
    padding: 15,
    paddingRight: 20, 
    paddingLeft: 20,
    // borderRadius: 10,
  },
  divID01:{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },

  productcontentLabel:{
    backgroundColor: '#0e011b',
    padding: 10,
    borderRadius: 50,
    borderTopLeftRadius: 0,
    paddingBottom:5,
    paddingTop: 5,
    color: '#fff',
  },
  bodyContent:{
    backgroundColor: '#020033',
    padding: 20,
    margin: 10,
    width: '94.8%',
    height: 250,
    marginBottom: 0,
    alignSelf: 'center',  
    flexWrap: 'wrap', 
  },
  imageback01:{
    // margin: 10,
    // borderRadius: 10
  },
  buttonDesign:{
    margin: 2,
    color: '#ffff',
    padding: 10,
    paddingLeft: 15, paddingRight: 15,
    backgroundColor: '#6C66ED',
    borderRadius: 0,
  },  
  textButton:{
    fontSize: 15,
    color: 'white',
    textTransform: 'capitalize',
  },

  Body: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: '100%',
    color: 'white',
  },
  rightWidth:{
    backgroundColor: 'pink',
    width: '100%',
    padding: 20
  },
  sideDrawer:{
    color: '#ffff',
    borderBottomColor: 'black',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  }, 
  btnButton:{
    padding: 10,
    color: '#fff'
  }, 
  MainViewCotainer:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  }
});

export default AppDesign;
