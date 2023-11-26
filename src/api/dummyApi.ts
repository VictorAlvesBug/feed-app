import axios, { AxiosResponse } from "axios";

const apiUrl = 'https://dummyapi.io/data/v1';//process.env.DUMMY_API_URL;
const apiKey = '65624e589442fd85974417d0';//process.env.DUMMY_API_KEY;

type ApiResponseType<T> = {
    data: T[];
    total: number;
    page: number;
    limit: number;
}

export function getAll<RecursoType>(recurso: string): Promise<RecursoType[]> {
    return new Promise<RecursoType[]>((resolve, reject) => {
        axios.get(`${apiUrl}/${recurso}`, { headers: { 'app-id': apiKey } })
            .then((response: AxiosResponse<ApiResponseType<RecursoType>>) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

export function getOne<RecursoType>(recurso: string): Promise<RecursoType> {
    return new Promise<RecursoType>((resolve, reject) => {
        axios.get(`${apiUrl}/${recurso}`, { headers: { 'app-id': apiKey } })
            .then((response: AxiosResponse<RecursoType>) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

export function post<PayloadType, ReturnType>(recurso: string, payload: PayloadType): Promise<ReturnType> {
    return new Promise<ReturnType>((resolve, reject) => {
        axios.post(`${apiUrl}/${recurso}`, payload, {
            headers: { 'app-id': apiKey, 'Content-Type': 'application/json' }
        })
            .then((response: AxiosResponse<ReturnType>) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    })
}