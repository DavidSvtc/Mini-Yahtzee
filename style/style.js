import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  header: {
    marginBottom: 15,
    backgroundColor: '#F08080',
    flexDirection: 'row',
    
  },
  footer: {
    marginTop: 20, 
    backgroundColor: '#F08080',
    flexDirection: 'row',
    fontFamily: 'AntonRegular',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'AntonRegular',
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#F08080",
    width: 180,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color:"white",
    fontSize: 20,
    fontFamily: 'AntonRegular',
  },
  points: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: 'center',
  },
  dicePoints: {
    flexDirection: 'row',
    width: 280,
    alignContent: 'center',
    
  },
  basicText: {
    fontSize: 23,
    textAlign: "center",
    fontFamily: 'AntonRegular',
  },

  textInput: {
    marginTop: 20,
    backgroundColor: "#e1e1e1",
    fontSize: 30
  },

  rulesText: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10
  },

  miniHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily: 'AntonRegular',
  },
  numbers: {
    flexDirection: 'column',
  },
  nbrSum: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18
  },

  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },

  smalltext: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily: 'AntonRegular',
  },

  textrest: {
    marginTop: 3,
    marginBottom: 5,
    fontSize: 17,
  },

  boldtext: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily: 'AntonRegular',
  },

  pointsaway: {
    marginTop:10,
    marginBottom:5,
    fontSize: 17
  }
 
});