/*
 * @Author: fastfan
 * @Date: 2025-02-06 22:56:16
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-06 22:57:28
 * @Description: your description
 */
interface ImportMetaEnv{
    // 我们每次添加完新的环境变量就在此添加一次ts类型
    // 这样我们就能在使用 import.meta.env 时获得ts语法提示
    readonly VITE_APP_API_BASEURL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }