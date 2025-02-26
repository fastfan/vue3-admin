export const getMessageInfo = (status: number | string): string => {
  let msg = ''
  switch (status) {
    case 400:
      msg = '错误请求'
      break
    case 401:
      msg = '未授权，请重新登录'
      break
    case 403:
      msg = '拒绝访问'
      break
    case 404:
      msg = '请求错误,未找到该资源'
      break
    case 405:
      msg = '请求方法未允许'
      break
    case 408:
      msg = '请求超时'
      break
    case 500:
      msg = '服务器端出错'
      break
    case 501:
      msg = '网络未实现'
      break
    case 502:
      msg = '网络错误'
      break
    case 503:
      msg = '服务不可用'
      break
    case 504:
      msg = '网络超时'
      break
    case 505:
      msg = 'http版本不支持该请求'
      break
    case 999:
      msg = '网络连接异常,请稍后再试!'
      break
    default:
      msg = `连接出错(${status})!`
  }
  return msg
}
