import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#000C38',
      alignItems: 'center',
    },
    songTitleContainer: {
      backgroundColor: '#000C38',
      width: "100%",
    },
    playerContainer: {
      backgroundColor: '#000C38',
      paddingTop: '20%',
      width: "100%",
    },
    progressContainer: {
      backgroundColor: '#000C38',
      width: "100%",
      alignContent: 'center',
      paddingTop: '10%',
    },
    timeContainer: {
      backgroundColor: '#000C38',
      width: "92%",
      alignContent: 'center',
      flexDirection: 'row',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    progressLeft: {
      backgroundColor: '#000C38',
      width: "100%",
      alignContent: 'center',
    },
    progressRight: {
      backgroundColor: '#000C38',
      width: "50%",
      alignItems: 'right',
    },



    top: {
      flex: 5, 
      backgroundColor: '#000C38',
      width: '100%',
      padding: '10%',
    },
    controlContainer:{
      backgroundColor: '#000C38',
      alignItems: 'center',
      paddingTop: '5%',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    bottom: {
      flex: 4, 
      backgroundColor: '#202324',
      width: '100%',
      padding: '10%',
    },
  
    title: {
      fontFamily: 'Fraunces',
      fontWeight: '100',
      fontSize: 30,
      color: '#D2CEC8',
    },
    body: {
      fontFamily: 'SourceSansPro',
      fontWeight: '100',
      fontSize: 25,
      color: '#D2CEC8',
    },
    duration: {
      fontFamily: 'SourceSansPro',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#D2CEC8',
    },
    
  });