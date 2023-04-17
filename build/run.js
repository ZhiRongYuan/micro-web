/*
 * Author: yuanzhirong
 * Date: 2023-04-14 17:07:03
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 10:12:54
 * Description:
 */
const path = require("path");
const childProcess = require("child_process");

const filePath = {
  vue2: path.join(__dirname, "../vue2"),
  vue3: path.join(__dirname, "../vue3"),
  react15: path.join(__dirname, "../react15"),
  react16: path.join(__dirname, "../react16"),
  service: path.join(__dirname, "../service"),
};

//cd 子应用目录  npm start 启动项目
function runChild() {
  Object.keys(filePath).forEach((item) => {
    const childPath = filePath[item];

    childProcess.spawn(`cd ${childPath} && npm start`, {
      stdio: "inherit",
      shell: true,
    });
  });
}

runChild();
