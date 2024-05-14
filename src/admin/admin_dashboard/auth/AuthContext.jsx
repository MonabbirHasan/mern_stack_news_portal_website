import React, { createContext, useState, useEffect, useContext } from 'react';


// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Set initial state based on authentication status

    // Function to check token expiry
    const checkTokenExpiry = () => {
        const token = localStorage.getItem('npl'); // Assuming you store the token in localStorage
        if (!token) {
            setIsAuthenticated(false); // No token found, user is not authenticated
            return;
        }
        const tokenData =token; // Decode token payload
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        if (currentTime > tokenData.exp) {
            setIsAuthenticated(false); // Token expired
        }
    };

    useEffect(() => {
        checkTokenExpiry();
    }, []);

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem('npl');
        setIsAuthenticated(false);
        window.location.href="/admin"
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to consume AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
