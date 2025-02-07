/*
 * @Author: fastfan
 * @Date: 2025-02-07 22:06:37
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-07 22:08:57
 * @Description: your description
 */
export interface IUserState {
    username: string;
    accessToken: string;
    refreshToken: string;
    roles: string[]; // Array<string>
}