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

    /**
     * Выполняет GET запрос
     * @param url
     */
    get = async <T>(url: string): Promise<T> => {
        const response = await fetch(url, this.config);
        return response.json();
    }

    /**
     * Выполняет POST запрос
     * @param url
     * @param data
     */
    post = async <T>(url: string, data: any): Promise<T> => {
        const response = await fetch(url, {
            ...this.config,
            method: 'POST',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Выполняет PUT запрос
     * @param url
     * @param data
     */
    put = async <T>(url: string, data: any): Promise<T> => {
        const response = await fetch(url, {
            ...this.config,
            method: 'PUT',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Выполняет DELETE запрос
     * @param url
     */
    delete = async <T>(url: string): Promise<T> => {
        const response = await fetch(url, {
            ...this.config,
            method: 'DELETE'
        });
        return response.json();
    }
}