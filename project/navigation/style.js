import {StyleSheet} from 'react-native'
/*
Colours
#8ECAE6
#219EBC
#126782
#023047
#FFB703
#FD9E02
#FB8500

*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'center',
    },
    h1:{
      fontSize:26,    
    },
    h2:{
      marginTop:10,
      marginLeft:10,
    },
    input: {
      height: 40,
      width: 150,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    button: {
      height: 40,
      width: 150,
      margin:10,
      backgroundColor: '#FFB703', 
      borderRadius: 10,
      elevation: 3,
      alignItems:'center',
      justifyContent: 'center',
    },
  });

export default styles;
  