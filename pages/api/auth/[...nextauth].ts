import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import httpProxy, { ProxyResCallback } from 'http-proxy';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: 'Sign In',

                credentials: {
                    username: { label: 'Username', type: 'text', placeholder: 'username@email.com' },
                    password: { label: 'Password', type: 'password' }
                },

                authorize(credentials, req) {
                    req.headers!.cookie = '';
                    

                    if (credentials) {
                        return { id: '1', name: 'Tuan', email: 'tuanmorinho@gmail.com' }
                    }

                    return null
                },
            })
        ],
        pages: {
            signIn: '/auth/login'
        },
        callbacks: {
            signIn() {
                return true
            }
        }
    })
}