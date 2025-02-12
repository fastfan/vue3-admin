import { defineStore } from 'pinia'
import pinia from '@/store'
import { userLogin, refreshUserInfo } from '@/api/user'

export interface UserState {
  username: string
  accessToken: string
  refreshToken?: string
  roles: Array<string>
}
export type LoginRequest = {
  username: string
  password: string
}
export const useUserStoreHook = defineStore('userInfo', {
  state: (): UserState => ({
    username: '大伟',
    accessToken: '',
    roles: ['common']
  }),
  getters: {},
  actions: {
    async storeUserLogin(data: LoginRequest) {
      const res = await userLogin(data)
      this.username = res.username
      this.roles = res.roles
      this.accessToken = res.accessToken
      return res
    },
    storeRefreshUserInfo() {
      if (this.username === '大伟' && this.accessToken !== '') {
        refreshUserInfo({
          accessToken: this.accessToken
        })
          .then((res) => {
            this.username = res.username
            this.roles = res.roles
            this.accessToken = res.accessToken
          })
          .catch(() => {
            this.accessToken = ''
          })
      }
    }
  },
  persist: {
    key: 'userInfo', // 存储名称
    storage: sessionStorage, // 存储方式
    // paths: ['accessToken'],  // 旧版本写法，会导致definestore报没有重载的错误，新版写法为pick
    pick: ['accessToken', 'username'] // 需要持久化的状态
  }
})
export function useUserStore() {
  return useUserStoreHook(pinia)
}
