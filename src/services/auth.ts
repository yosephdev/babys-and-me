export interface User {
  id: string;
  email: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
  email_verified: boolean;
  verification_token?: string;
  reset_token?: string;
  reset_token_expires?: Date;
}

export const authService = {
  async login(email: string, password: string): Promise<{ user: Omit<User, 'password_hash'>; token: string }> {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Felaktig e-postadress eller lösenord');
      }

      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async register(email: string, password: string): Promise<{ user: Omit<User, 'password_hash'>; token: string }> {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Kunde inte skapa användare');
      }

      return await response.json();
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  async requestPasswordReset(email: string): Promise<void> {
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ett fel uppstod vid återställning av lösenord');
      }
    } catch (error) {
      console.error('Password reset request error:', error);
      throw error;
    }
  },

  async validateToken(token: string): Promise<Omit<User, 'password_hash'> | null> {
    if (!token) return null;
    
    try {
      // Simple client-side check - parse the JWT without verification
      // This is just to extract basic info, real validation happens server-side
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      
      const decoded = JSON.parse(jsonPayload);
      
      // Check if token is expired
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) {
        return null;
      }
      
      // For better security, validate with the server in a real app
      return {
        id: decoded.userId,
        email: decoded.email,
        created_at: new Date(),
        updated_at: new Date(),
        email_verified: true
      };
    } catch (error) {
      console.error('Token validation error:', error);
      return null;
    }
  }
};