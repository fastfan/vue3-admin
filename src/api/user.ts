/*
 * @Author: fastfan
 * @Date: 2025-02-07 21:38:05
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-07 22:20:24
 * @Description: your description
 */
import { post } from '@/utils/request';

export type LoginRequest = {
    username: string;
    password: string;
};
// 刷新登录信息需要的参数
export type reLoginRequest = {
    accessToken: string;
};
export type LoginResponse = {
    username: string;
    roles: string[];
    accessToken: string;
};
// 定义的接口
export const userLogin = async (data?: LoginRequest) => {
    return post<LoginResponse>({}, '/login', data);
};

export const refreshUserInfo = async (data?: reLoginRequest) => {
    return post<LoginResponse>({}, '/getUserInfo', data);
};