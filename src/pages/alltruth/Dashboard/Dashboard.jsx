import React,{useContext} from 'react';
import { View, Text } from 'react-native';
import Btn from '../../../components/Button';
import { AuthContext } from '../../../context/AuthContext';
import { dark } from '../../../assets/ContantsColor';
import Icon from 'react-native-vector-icons/Ionicons';
import Base from '../../../components/pageBase';

const Dashboard = () => {
  const auth = useContext(AuthContext);
    return (
        <Base>
          <Text style={{color: "black"}}>Dashboard Screen  <Icon name="airplane-outline" size={30} color={dark.sky} /></Text>
        </Base>
      );
}

export default Dashboard