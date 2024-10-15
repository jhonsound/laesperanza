import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Importar la función para deserializar el token

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuth, setisAuth] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsAuth(true);
            const userData = JSON.parse(localStorage.getItem('user'));
            setUser(userData);
        }
    }, []);

    const setUserData = (token, user) => {
        const userData = jwtDecode(token);
        localStorage.setItem('token', token);
        setUser(user);
        setIsAuth(true);
    };

    const setIsAuth = () => {
        setisAuth(!isAuth);
    };
    const getUserData = () => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        setIsAuth(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuth, setUserData, getUserData, logout, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };