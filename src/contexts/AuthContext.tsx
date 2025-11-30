"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User, LoginCredentials, SignupCredentials } from "@/lib/types/auth";
import { devAuthClient } from "@/lib/auth/devAuthClient";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    signup: (credentials: SignupCredentials) => Promise<void>;
    logout: () => Promise<void>;
    updateUser: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Configuration
const AUTH_MODE = process.env.NEXT_PUBLIC_AUTH_MODE || "dev";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const initAuth = async () => {
            if (AUTH_MODE === "dev") {
                const user = await devAuthClient.getUser();
                setUser(user);
            }
            // Real auth init logic would go here
            setIsLoading(false);
        };

        initAuth();
    }, []);

    const updateUser = async (data: Partial<User>) => {
        if (!user) return;
        
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        
        if (AUTH_MODE === "dev") {
            localStorage.setItem("saldoCerto:devUser", JSON.stringify(updatedUser));
        }
    };

    const login = async (credentials: LoginCredentials) => {
        setIsLoading(true);
        try {
            let user: User;
            if (AUTH_MODE === "dev") {
                user = await devAuthClient.login(credentials);
            } else {
                throw new Error("Real auth not implemented yet");
            }
            setUser(user);
            
            // Redirect logic could be handled here or in the component
            // For now, we assume the component handles redirect or we do a default
            router.push("/dashboard"); 
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (credentials: SignupCredentials) => {
        setIsLoading(true);
        try {
            let user: User;
            if (AUTH_MODE === "dev") {
                user = await devAuthClient.signup(credentials);
            } else {
                throw new Error("Real auth not implemented yet");
            }
            setUser(user);
            router.push("/onboarding/intro");
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            if (AUTH_MODE === "dev") {
                await devAuthClient.logout();
            }
            setUser(null);
            router.push("/login");
        } finally {
            setIsLoading(false);
        }
    };

    // Route Protection Logic (Client-side Guard)
    useEffect(() => {
        if (isLoading) return;

        const publicRoutes = [
            "/login", 
            "/signup", 
            "/onboarding",
            "/onboarding/intro",
            "/onboarding/goal",
            "/onboarding/profile",
            "/home",
            "/about",
            "/"
        ];
        
        // Simple check: if path is NOT public and user is NOT authenticated, redirect to login
        const isPublicRoute = publicRoutes.some(route => 
            pathname === route || 
            pathname.startsWith("/onboarding") ||
            pathname.startsWith("/home") ||
            pathname.startsWith("/about")
        );
        
        if (!user && !isPublicRoute) {
            // Prevent redirect loop
            if (pathname !== "/login" && pathname !== "/signup") {
                 router.push("/login");
            }
        }

        // If user IS authenticated and tries to go to login, redirect to dashboard
        // But allow signup and onboarding even if authenticated (user might want to create another account or redo onboarding)
        if (user && pathname === "/login") {
             router.push("/dashboard");
        }

    }, [user, isLoading, pathname, router]);


    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                signup,
                logout,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

