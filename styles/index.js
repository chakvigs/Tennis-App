/* The shared global stylesheet */
import {Dimensions} from 'react-native'
const screen = Dimensions.get("screen");

const globalStyles = {
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    padding: 5,
    marginTop: 5,
    fontSize: 20,
  },
  button: {
    marginTop: 10,
    padding: 13,
    backgroundColor: 'gray',
    width: screen.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  smallButton:{
    backgroundColor: "lightgreen",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
  }
}

export default globalStyles;