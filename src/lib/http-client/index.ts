import type {HttpClientContact} from "./http-client.contract";

/**
 * Клиент для работы с HTTP запросами
 */
export class HttpClient implements HttpClientContact {

    private readonly config: RequestInit;

    constructor() {
        this.config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
    }

    get = async <T>(url: string): Promise<T> => {
        const response = await fetch(url, this.config);
        return response.json();
    }

    post = async <T>(url: string, data: any): Promise<T> => {
        const response = await fetch(url, {
            ...this.config,
            method: 'POST',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    put = async <T>(url: string, data: any): Promise<T> => {
        const response = await fetch(url, {
            ...this.config,
            method: 'PUT',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    delete = async <T>(url: string): Promise<T> => {
        const response = await fetch(url, {
            ...this.config,
            method: 'DELETE'
        });
        return response.json();
    }
}