import {createContext , useContext , useState} from "react"


const UserContext = createContext()

const UserProvider = (props) =>{
    
    const [user, setUser] = useState(null)
    const [searchTerm, setSearchTerm] = useState('');

    const login = async (username, password) =>{

        const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        } )
        if(response.ok){
            const toke = await response.json()
            setUser(true)
            return toke
        }
    }
    const logout = () =>{

        setUser(null)
    }
    const register = async (newUser) => {
        const response = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        if (response.ok) {
          const data = await response.json();
          setUser(true); // simula inicio de sesión automático
          return data;
        }
      };
    
    return(
        <UserContext.Provider value={{ login, logout, user, searchTerm,setSearchTerm, register }}>
            {props.children}

        </UserContext.Provider>
    )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth}