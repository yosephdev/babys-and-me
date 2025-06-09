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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            if (!response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType?.includes("application/json")) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Felaktig e-postadress eller lösenord');
                } else {
                    const errorText = await response.text();
                    throw new Error(errorText || 'Felaktig e-postadress eller lösenord');
                }
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            const contentType = response.headers.get("content-type");

            if (!response.ok) {
                if (contentType?.includes("application/json")) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Kunde inte skapa användare');
                } else {
                    const errorText = await response.text();
                    throw new Error(errorText || 'Kunde inte skapa användare');
                }
            }

            if (contentType?.includes("application/json")) {
                return await response.json();
            } else {
                const text = await response.text();
                console.error("Unexpected non-JSON response:", text);
                throw new Error("Servern returnerade ett oväntat svar. Kontakta administratören.");
            }
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    async requestPasswordReset(email: string): Promise<void> {
        try {
            const response = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );

            const decoded = JSON.parse(jsonPayload);

            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp < currentTime) return null;

            return {
                id: decoded.userId,
                email: decoded.email,
                created_at: new Date(decoded.iat * 1000),  // optional, depending on your JWT payload
                updated_at: new Date(decoded.iat * 1000),
                email_verified: true
            };
        } catch (error) {
            console.error('Token validation error:', error);
            return null;
        }
    }
};
