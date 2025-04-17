
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, login as mockLogin, logout as mockLogout, currentUser } from '../utils/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  isAuthority: () => boolean;
  loginError: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(currentUser);
  const [loginError, setLoginError] = useState<string | null>(null);

  const loginHandler = async (email: string, password: string) => {
    try {
      setLoginError(null);
      // In a real app, this would make an API call
      const loggedInUser = mockLogin(email, password);
      if (loggedInUser) {
        setUser(loggedInUser);
        // Store user info in localStorage for persistence
        localStorage.setItem('fixit_user', JSON.stringify(loggedInUser));
        return loggedInUser;
      } else {
        setLoginError('Invalid email or password');
        return null;
      }
    } catch (error) {
      setLoginError('An error occurred during login');
      return null;
    }
  };

  const logoutHandler = () => {
    mockLogout();
    setUser(null);
    // Clear user info from localStorage
    localStorage.removeItem('fixit_user');
  };

  const isAuthority = () => {
    return user?.role === 'authority';
  };

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem('fixit_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('fixit_user');
      }
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        login: loginHandler, 
        logout: logoutHandler,
        isAuthority,
        loginError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
