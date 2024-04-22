import { useContext } from "react"
import { MyContext } from "./AuthProvider"

const useAuth = () => {
    return useContext(MyContext);
}

export default useAuth