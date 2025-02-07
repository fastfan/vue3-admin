/*
 * @Author: fastfan
 * @Date: 2025-02-07 21:12:25
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-07 21:26:40
 * @Description: your description
 */
export const getMessageInfo = (status: number | string): string => {
    let msg = ''
    switch (status) {
        case 400:
            msg = '请求错误(400)';
            break;
        case 403:
            msg = '拒绝访问(403)';
            break;
        case 401:
            msg = '未授权(401)';
            break;
        case 500:
            msg = '服务器错误(500)';
            break;
        case 503:
            msg = '服务不可用(503)';
            break;
        case 999:
            msg = '网络连接异常,请稍后再试!';
            break;
        default:
            msg = `连接出错(${status})!`;
    }
    return msg;
}