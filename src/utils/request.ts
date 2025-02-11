import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { getMessageInfo } from './status'

type BaseResponse<T = any> = {
  code: number
  data: T
  message: string
  status?: number | string
}
// console.log(import.meta)
const service: AxiosInstance = axios.create({
  // 启用 mock 就请求 mock 路径
  // 不启用 mock 就请求 正常后端路径
  baseURL: import.meta.env.VITE_APP_USE_MOCK
    ? import.meta.env.VITE_APP_MOCK_BASEURL
    : import.meta.env.VITE_APP_API_BASEURL,
  timeout: 15000
})

// axios实例拦截请求
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// axios实例拦截响应
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response', response)
    if (response.status === 200) {
      return response
    }
    ElMessage.error(getMessageInfo(response.status))
    return response
  },
  (error: any) => {
    const { response } = error
    if (response) {
      ElMessage.error(getMessageInfo(response.status))
      return Promise.reject(response.data)
    }
    ElMessage.error(getMessageInfo(999))
  }
)

// 此处相当于二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config
  return new Promise((resolve, reject) => {
    service
      .request<any, AxiosResponse<BaseResponse>>(conf)
      .then((res: AxiosResponse<BaseResponse>) => {
        console.log('res', res)
        const { code, data, message } = res.data
        if (code !== 0) {
          ElMessage({
            message,
            type: 'error'
          })
          reject(message as T)
        } else {
          ElMessage({
            message,
            type: 'success'
          }) // 此处返回data信息 也就是 api 中配置好的 Response类型
          resolve(data as T)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function get<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'GET', params: parms })
}
export function post<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'POST', data: data })
}

export function put<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'PUT', params: parms })
}
export function del<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'DELETE', data: data })
}

// 一般的后端返回的数据结构
// {
//     'code': 1,
//     'message': '成功',
//     'data': {
//         'id': 1,
//         'name': '张三',
//         'age': 18,
//         'sex': 1,
//         'address': '北京市',
//         'createTime': '2021-08-30 15:49:16',
//         'updateTime': '2021-08-30 15:49:16',
//         'deleteTime': null,
//         'createBy': 1,
//         'updateBy': 1,
//     }
// }
// export default service
