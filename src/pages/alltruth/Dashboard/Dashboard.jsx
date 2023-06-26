import React,{useContext} from 'react';
import { View, Text } from 'react-native';
import Btn from '../../../components/Button';
import { AuthContext } from '../../../context/AuthContext';
import { dark } from '../../../assets/ContantsColor';

const Dashboard = () => {
  const auth = useContext(AuthContext);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: "black"}}>Dashboard Screen</Text>
          <Btn textColor={dark.white} bgColor={dark.sky} btnLabel="Logout" Press={()=> auth.logout() } />
        </View>
      );
}

export default Dashboard