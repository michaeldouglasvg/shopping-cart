import { auth } from "../firebaseconfig/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks"
import { Children, createContext } from "react"

// initiallixng the context for the data

const UsersignupContext = createContext(null);

const CartDefault = () => {
 cart = {}

 for( let i = 1; i < CardProducts.length + 1; i++){
  cart[i] = 0;
 }

 return cart;
}

export const SignupContext = ({ children }) => {

 const[cartDefault, setCartDefault] = useState(CartDefault())

 const addToCart = (itemID) => {
  return 
 }

 return <UsersignupContext>{children}</UsersignupContext>
}