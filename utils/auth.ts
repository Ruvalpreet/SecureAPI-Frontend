import axios from "axios";
import ChuckNorris from "../components/ChuckNorris";
import { SetStateAction } from "react";

const Auth = async (username: string, password: string, setToken: (arg0: any) => void, setLogin: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setResponse: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
    const url = 'http://localhost:3333/login';
    const payload = { username, password };

    try {
        const response = await axios.post(url, payload);

        if (response.status === 200 && response.data.uuid) {
            const token = response.data.uuid;
            // Send token to parent App component.
            setToken(token);
            setLogin(true);
            const message = response.data.message;
            setResponse(message);
            return { success: true, message: "Login successful" };
        } else {
            const message = response.data.message;
            setResponse(message);
            return { success: false, message: message };
        }
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            const message = error.response.data.message || "Login failed";
            setResponse(message);
            return { success: false, message: message };
        } else {
            const message = "An unexpected error occurred";
            setResponse(message);
            return { success: false, message: message };
        }
    }
}

export default Auth;
