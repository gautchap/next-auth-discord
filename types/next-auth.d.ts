import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            email: string;
            id?: string;
            image: string;
            name: string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        accessToken?: string;
    }
}
