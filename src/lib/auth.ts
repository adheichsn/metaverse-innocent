import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import { compare } from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy:'jwt'
    },
    pages: {
        signIn: '/sign-in',
        signOut: '/sign-in'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "jsmith@mail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const exitingUser = await db.user.findUnique({
                    where: { email: credentials?.email }
                });
                if(!exitingUser) {
                    return null;
                }

                if(exitingUser.password) {
                    const passwordMatch = await compare(credentials.password, exitingUser.password);

                    if(!passwordMatch) {
                        return null;
                    }
                }

                return {
                    id: `${exitingUser.id}`,
                    username: exitingUser.username,
                    email: exitingUser.email
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user) {
                return {
                    ...token,
                    username: user.username
                }
            }
            return token
        },

        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username
                }
            }
        }
    }
}