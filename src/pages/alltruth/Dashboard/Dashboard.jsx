import React,{useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn from '../../../components/Button';
import { AuthContext } from '../../../context/AuthContext';
import { dark } from '../../../assets/ContantsColor';
import Icon from 'react-native-vector-icons/Ionicons';
import Base from '../../../components/pageBase';
import ProfileBoard from '../../../components/UIcomponents/ProfileBoard';
import FrequentlyCalles from '../../../components/UIcomponents/FrequentlyCalles';
import RecorderPlayer from '../../../components/UIcomponents/RecorderPlayer';

const Dashboard = (props) => {
  const auth = useContext(AuthContext);
    return (
        <Base>
          {/* <Text style={{color: "black"}}>Dashboard Screen  <Icon name="airplane-outline" size={30} color={dark.sky} /></Text> */}
          <ProfileBoard style={styles.profileBoard}></ProfileBoard>
      <FrequentlyCalles style={styles.frequentlyCalles}></FrequentlyCalles>
      <RecorderPlayer style={styles.recorderPlayer}></RecorderPlayer>
        </Base>
      );
}

const styles = StyleSheet.create({
  profileBoard: {
    height: 180,
    marginTop: 20,
  },
  frequentlyCalles: {
    height: 136,
  },
  recorderPlayer: {
    height: 169,
    marginTop: 4,
  }
});

export default Dashboard