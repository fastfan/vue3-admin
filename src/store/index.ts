/*
 * @Author: fastfan
 * @Date: 2025-02-06 22:27:25
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-06 22:27:26
 * @Description: your description
 */
import { createPinia } from 'pinia';
  import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
  const pinia = createPinia();
  // 使用pinia数据持久化插件
  pinia.use(piniaPluginPersistedstate);
  export default pinia;