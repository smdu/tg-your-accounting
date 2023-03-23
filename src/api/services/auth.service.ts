import {API} from '../API';
import {fetchData} from '../http';

export class AuthService {
    public async login(username: string, password: string) {
        return await fetchData({
            url: API.auth.login,
            method: 'POST',
            data: {
                username,
                password,
            },
        });
    }

    public async register(username: string, password: string) {
        return await fetchData({
            url: API.auth.register,
            method: 'POST',
            data: {
                username,
                password,
            },
        });
    }
}
