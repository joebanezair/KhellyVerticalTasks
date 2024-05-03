import { View, Text, ImageBackground, Alert, ScrollView} from 'react-native'
import React from 'react'
import AppDesign from '../design/StyleSheetD'
import jsontext from '../jsonsdata/MyData.json'
import imgback from '../images/back.png'
import imgcool02 from '../images/cool01.png'
import logo from '../images/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavigationIcon from '../components/navigationIcons/NavigationIcon'
import CoinsCredit from '../components/navigationIcons/CoinsCredit'
import Icon from 'react-native-vector-icons/Entypo'
import * as Progress from 'react-native-progress';
import imageBack from '../images/Free.png'
import ReactNativeModal from 'react-native-modal'
import { useState } from 'react'

const PageView = () => {
  const handleButtonPress = (buttonName) => {
    Alert.alert(`Button ${buttonName} pressed`);
  };

  const NavigationData = [
    {id: 1, label: 'Help?', onclick: ()=>{}},
    {id: 1, label: 'About us', onclick: ()=>{}},
    {id: 1, label: 'Log out', onclick: ()=>{}},
  ];

  const iconNavigationData = [
    {
      iconPressed: () => {},
      iconName: 'reply',
      iconColor: '#fff',
      size: 20
    },
    {
      iconPressed: () => {},
      iconName: 'wallet',
      iconColor: '#fff',
      size: 20
    },
    {
      iconPressed: () => {},
      iconName: 'star',
      iconColor: '#fff',
      size: 20
    }
  ]
  // 
  const currentNoble = 10;
  const nobleLevel = 1;
  const spend = jsontext.GlobalJson.Spend + currentNoble + jsontext.GlobalJson.SpendContinue + nobleLevel;
  // 
  const helpSettings = [
    {
      iconPressed: () => {},
      iconName: 'help-with-circle',
      iconColor: '#17A9FD',
      size: 20
    },
    {
      iconPressed: () => {},
      iconName: 'cog',
      iconColor: '#17A9FD',
      size: 20
    }
  ]

  const coinsNavigate = [
    {
      iconPressed: () => {},
      iconName: 'credit',
      iconColor: '#fff',
      Text:'2800',
      size: 20
    },
    {
      iconPressed: () => {},
      iconName: 'database',
      iconColor: '#fff',
      Text:'1900',
      size: 20
    }
  ]


  const coinsNavigate01 = [
    {
      iconPressed: () => {
        toggleModal();
      },
      iconName: 'typing',
      iconColor: '#fff',
      Text:'',
      size: 40
    },
    {
      iconPressed: () => {},
      iconName: 'v-card',
      iconColor: '#fff',
      Text:'',
      size: 40
    },
    {
      iconPressed: () => {},
      iconName: 'swarm',
      iconColor: '#fff',
      Text:'',
      size: 40
    }
  ]

  const threeRightButton = [
    {
      id: 1,
      buttonPressed: ()=>{},
      btnname:'Welfare'
    },
    {
      id: 2,
      buttonPressed: ()=>{},
      btnname:'Integral'
    },
    {
      id: 3,
      buttonPressed: ()=>{},
      btnname:'Goto Mall'
    },
  ]

  // 
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(true);
  };
  const toggleModal01 = () => {
    setModalVisible(false);
  };
  // 

  const dataBottomPurchase = [
    {id: 1, label: 'Item 01'},
    {id: 2, label: 'Item 02'},
    {id: 3, label: 'Item 03'},
    {id: 4, label: 'Item 04'},
    {id: 5, label: 'Item 05'},
    {id: 6, label: 'Item 06'},
    {id: 7, label: 'Item 07'},
    {id: 8, label: 'Item 08'},
    {id: 9, label: 'Item 09'},
    {id: 10, label: 'Item 10'},
  ]

  const noble01 = jsontext.GlobalJson.no1
  const noble02 = jsontext.GlobalJson.no2

  return (<>
  
    <ImageBackground source={imgback} style={{ flex: 1 }}>
      <View style={AppDesign.NavigationConTop}>
        <View style ={{width: '50%'}}>
          <View style={AppDesign.NavigationIconContainerLeft}>
            {helpSettings.map((iconData, index) => (
              <NavigationIcon key={index} {...iconData} />
            ))}
          </View>
        </View>
        <View style ={{width: '50%'}}>
          <View style={AppDesign.NavigationIconContainer}>
            {iconNavigationData.map((iconData, index) => (
              <NavigationIcon key={index} {...iconData} />
            ))}
          </View>
        </View>
      </View>

      <View style={AppDesign.coinMainCredits}>
        <View style={{width: '50%'}}>
          <View style={AppDesign.conPrivilage}>
           <Icon name='game-controller' color='#ffff' size={18} style={{padding: 5}} />
           <Text style={AppDesign.conText}>{jsontext.GlobalJson.Privilages}</Text>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={AppDesign.containerCoins}>
          {coinsNavigate.map((iconData, index)=>( 
              <CoinsCredit key={index} {...iconData} />
            ))}
          </View>
        </View>
      </View>
      
      
      <View style={AppDesign.containerNavTop}>
          <View>
            <View style={AppDesign.nobleContainer}>
            <Text style={AppDesign.textPrivilege}>{jsontext.GlobalJson.Current + currentNoble}</Text>
          </View>
            
          <View style={AppDesign.imageContainer}>
            <View style={AppDesign.app}>
              <View  style={AppDesign.imageContentMain}>
                
                <View style={AppDesign.imageContent}>
                  <ImageBackground source={logo} style={AppDesign.imageC01} />
                </View>

                <View>
                  <View style={AppDesign.progressBarHolder}>
                    <Progress.Bar style={{borderRadius: 0}} progress={0.4} width={300} />
                  </View>
                </View>

                <View style={AppDesign.imageContent01}>
                  <View style={AppDesign.imageContent011}>
                    {threeRightButton.map((item, index)=>(
                      <TouchableOpacity style={AppDesign.btnConR} key={index}>
                        <Text style={AppDesign.btnRtext}>{item.btnname}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

              </View>
            </View>

          </View>

           {/* <View>
              <Text style={AppDesign.bottomPrivSpend}>{spend}</Text>
           </View> */}
          </View>

      </View>

      <View style={AppDesign.imageContentEdit}>
        <View style={AppDesign.flex01}>
          <View style={{width: '50%'}}>
            <View style={AppDesign.flex0101}>
            <Text style={{color: 'white', fontSize: 14, letterSpacing: 1, fontWeight: 'normal'}}>
              {noble01 +' '+ nobleLevel +' '+ noble02}
            </Text>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <View style={AppDesign.flex0102}>
             <TouchableOpacity>
              <Icon name='cog' size={20} color={'white'} style={{}} />
             </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={AppDesign.divID01}>
            {coinsNavigate01.map((iconData, index)=>( 
              <TouchableOpacity key={index} style={AppDesign.wrapper01} onPress={iconData.iconPressed}>
                <View style={{alignSelf:'center'}}><CoinsCredit {...iconData} /></View>
                <View>
                  <Text style={{color:'white', fontWeight: 'bold', textAlign: 'center'}}>
                      V{nobleLevel}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </View>
      <View style={{marginLeft: 10, marginRight: 10, marginTop: 1}}>
        <Text style={AppDesign.bottomPrivSpend}>{spend}</Text>
      </View>

      <ScrollView>
        {dataBottomPurchase.map((item, index)=>(
         <ImageBackground style={AppDesign.imageback01} key={index}>
           <View style={AppDesign.bodyContent}>
            <View style ={AppDesign.PlayerProfileContainer}>
              <Text style={AppDesign.productcontentLabel}>{item.label}</Text>
            </View>
          </View>
         </ImageBackground>
        ))}
      
        <View style={AppDesign.containerNavTop}>
          <View style={AppDesign.buttonNavigation}>
            {NavigationData.map((item, index)=>(
              <TouchableOpacity style={AppDesign.buttonDesign} key={index}>
                <Text style={AppDesign.textButton}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

     </ScrollView>
    </ImageBackground>

    {/* <ReactNativeModal isVisible={isModalVisible}>
      <View style={{ flex: 1 }}>
        <Text style={{color: 'white'}} >{jsontext.GlobalJson.Honors}</Text>
        <View>
          <TouchableOpacity style={{backgroundColor:'red'}} onPress={toggleModal01}>
            <Text style={{color:'white', fontWeight: 'bold'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal> */}

  </>)
}

export default PageView