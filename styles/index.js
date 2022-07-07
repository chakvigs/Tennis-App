/* The shared global stylesheet */
import {Dimensions} from 'react-native'
const screen = Dimensions.get("screen");

const globalStyles = {
  textInput: {
    borderWidth: 1,
    borderColor: '#dbd9d9',
    width: 200,
    padding: 10,
    marginVertical: 5,
    fontSize: 20,
    borderRadius: 10,
    color: '#F9F9F9'
  },
  button: {
    padding: 10,
    backgroundColor: '#6FC34A',
    width: screen.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  smallButton:{
    backgroundColor: '#6FC34A',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#F9F9F9'
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F9F9F9'
  },
}

export default globalStyles;