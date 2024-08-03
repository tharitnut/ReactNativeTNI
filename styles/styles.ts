import { StyleSheet } from "react-native";

const stylesProfile = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
    borderColor: "#191970",
    borderWidth: 2,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 5,
  },
  profileName: {
    color: "#00008b",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const stylePractice = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop:50
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
    marginBottom:75
  },
});

const stylesLogin = StyleSheet.create({ 
  container: { 
    justifyContent: "center", 
    padding: 20, 
    marginTop: 50, 
    backgroundColor: '#ffffff', // ตงคาสพนหลงเปนสขาว 
    borderRadius: 10, // เพมความมนใหกบขอบคอนเทนเนอร 
    elevation: 3, // เพมเงาใหกบคอนเทนเนอร (เฉพาะ Android) 
    width: '100%', // ตงความกวางของ container ให้เต็มหน้าจอ 
  }, 
  input: { 
    height: 45, // เพมความสงของ TextInput 
    borderColor: "gray", // เปลยนสขอบเปนสเทาออน 
    borderWidth: 1,  
    borderRadius: 8, // เพมความมนใหกบขอบ TextInput 
    marginBottom: 15, // เพมระยะหางดานลางระหวาง TextInput 
    paddingHorizontal: 15, // เพมระยะหางภายใน TextInput 
    backgroundColor: "#f9f9f9", // ตงคาสพนหลงของ TextInput 
  },  
}); 

export { stylesProfile, stylePractice,stylesLogin };
