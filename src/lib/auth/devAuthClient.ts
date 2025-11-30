import { LoginCredentials, SignupCredentials, User } from "../types/auth";

const STORAGE_KEY_USER = "saldoCerto:devUser";
const STORAGE_KEY_AUTH = "saldoCerto:isDevAuthenticated";

// Helper to check if we're in browser
const isBrowser = typeof window !== "undefined";

export const devAuthClient = {
    login: async (credentials: LoginCredentials): Promise<User> => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!credentials.email) {
            throw new Error("Email é obrigatório");
        }

        if (!isBrowser) {
            throw new Error("Auth client only works in browser");
        }

        // In dev mode, we just accept any email.
        // We restore user if exists, or create a temporary one.
        const storedUser = localStorage.getItem(STORAGE_KEY_USER);
        let user: User;

        if (storedUser) {
            const parsed = JSON.parse(storedUser);
            if (parsed.email === credentials.email) {
                user = parsed;
            } else {
                // New user login on dev mode just overwrites/mocks
                user = { id: "dev-user-id", email: credentials.email, name: "Dev User" };
            }
        } else {
             user = { id: "dev-user-id", email: credentials.email, name: "Dev User" };
        }

        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
        localStorage.setItem(STORAGE_KEY_AUTH, "true");

        return user;
    },

    signup: async (credentials: SignupCredentials): Promise<User> => {
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!credentials.email) {
            throw new Error("Email é obrigatório");
        }

        if (!isBrowser) {
            throw new Error("Auth client only works in browser");
        }

        const user: User = {
            id: `dev-${Date.now()}`,
            email: credentials.email,
            name: credentials.name || credentials.email.split("@")[0] || "Usuário",
        };

        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
        localStorage.setItem(STORAGE_KEY_AUTH, "true");

        return user;
    },

    logout: async (): Promise<void> => {
        if (!isBrowser) return;
        localStorage.removeItem(STORAGE_KEY_USER);
        localStorage.removeItem(STORAGE_KEY_AUTH);
    },

    getUser: async (): Promise<User | null> => {
        if (!isBrowser) return null;
        const isAuth = localStorage.getItem(STORAGE_KEY_AUTH) === "true";
        if (!isAuth) return null;

        const storedUser = localStorage.getItem(STORAGE_KEY_USER);
        return storedUser ? JSON.parse(storedUser) : null;
    }
};

