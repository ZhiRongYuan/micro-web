/*
 * Author: yuanzhirong
 * Date: 2022-06-27 00:27:12
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-19 11:30:13
 * Description:
 */
import { isTurnChild } from '../utils'
import { lifecycle } from '../lifeCycle'
export const turnApp = async () => {
  if (isTurnChild()) {
    // 微前端的生命周期执行
    await lifecycle()
  }
}

