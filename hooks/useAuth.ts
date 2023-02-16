import { authApi } from '@/api/auth-api';

export function useAuth(options?: Partial<any>) {
    
    async function login() {
        await authApi.login({
            username: 'test1',
            password: '123123'
        });
    }
}