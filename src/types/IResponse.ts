export interface IResponse<T> {
    success: boolean;
    message: string;
    error: number;
    data?: T;
}
