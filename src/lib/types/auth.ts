export interface User {
    id: string;
    name?: string;
    email: string;
}

export interface AuthResponse {
    user: User;
    token?: string; // Not really used in dev mode, but good for interface
}

export interface LoginCredentials {
    email: string;
    password?: string;
}

export interface SignupCredentials {
    name?: string;
    email: string;
    password?: string;
}

