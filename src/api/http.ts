import {AxiosRequestConfig} from 'axios';
import config from '../config';
import {IResponse} from '../types/IResponse';
import axiosInstance from './axios';
import simulateApi from './simulate';

export function fetchData<T>(params: AxiosRequestConfig & {authorized?: boolean}) {
    const {authorized, ...restParams} = params;
    const sendParams: AxiosRequestConfig = {
        ...restParams,
        headers: {
            ...restParams.headers,
            Authorization: authorized
                ? `Bearer ${localStorage.getItem('accessToken')}`
                : restParams.headers?.Authorized,
        },
    };
    return config.isDev ? fetchSimulateData<T>(sendParams) : fetchAxiosData<T>(sendParams);
}

export function fetchSimulateData<T>({url}: AxiosRequestConfig): Promise<IResponse<T>> {
    return new Promise<IResponse<T>>((resolve, reject) => {
        if (url !== undefined && simulateApi[url]) {
            setTimeout(() => resolve(simulateApi[url]), 1000);
        } else {
            reject({
                error: 404,
                url,
            });
        }
    });
}

export function fetchAxiosData<T>(params: AxiosRequestConfig): Promise<IResponse<T>> {
    return new Promise<IResponse<T>>((resolve, reject) => {
        axiosInstance(params)
            .then(({data}) => {
                resolve(data);
            })
            .catch(reject);
    });
}
