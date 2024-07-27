import { StyleSheet} from 'react-native'


export default StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e6e6fa",
  },
  profileImage: {
    borderRadius:50,
    width:100,
    height:100,
    marginRight:20,
    borderColor:"#191970",
    borderWidth:2,
  },
  profileContainer: {
    flexDirection:"row",
    alignItems:"center",
    marginTop:30,
    width:"100%",
    padding:20,
    borderRadius:30,
    backgroundColor:"#f5fffa",
    elevation:5,
  },
  profileName:{
    color:"#00008b",
    fontWeight:"bold",
    fontSize:16
  },
});