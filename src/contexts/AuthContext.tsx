import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { authService, User } from '@/services/auth';

interface AuthContextType {
  user: Omit<User, 'password_hash'> | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Omit<User, 'password_hash'> | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing token in localStorage
    const token = localStorage.getItem('auth_token');
    if (token) {
      authService.validateToken(token)
        .then(user => {
          if (user) {
            setUser(user);
          } else {
            // Token is invalid or expired
            localStorage.removeItem('auth_token');
          }
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem('auth_token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { user, token } = await authService.login(email, password);
      
      // First set the token
      localStorage.setItem('auth_token', token);
      
      // Then update the user state
      setUser(user);
      
      // Show success message
      toast.success('Välkommen tillbaka!');
      
      // Use setTimeout to ensure state is updated before navigation
      setTimeout(() => {
        navigate('/');
      }, 100);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ett fel uppstod vid inloggning');
      }
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { user, token } = await authService.register(email, password);
      localStorage.setItem('auth_token', token);
      setUser(user);
      toast.success('Registrering lyckades! Vänligen verifiera din e-postadress.');
      navigate('/login');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ett fel uppstod vid registrering');
      }
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await authService.requestPasswordReset(email);
      toast.success('Återställningslänk har skickats till din e-postadress.');
      navigate('/login');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ett fel uppstod vid återställning av lösenord');
      }
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem('auth_token');
      setUser(null);
      toast.success('Du har loggats ut!');
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ett fel uppstod vid utloggning');
      }
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signUp,
      resetPassword,
      signOut,
      isAuthenticated: !!user
    }}>
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