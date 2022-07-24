/*
 * @Author: lichenxi
 * @Date: 2022-07-24 15:56:48
 * @LastEditors: lichenxi
 * @LastEditTime: 2022-07-24 17:32:44
 * @Description: 
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // 'vue/multi-word-component-names': 'off'
  }
}
