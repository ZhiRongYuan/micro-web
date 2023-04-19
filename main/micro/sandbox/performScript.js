// 执行js脚本
export const performScriptForFunction = (script) => {
  return new Function(script).call(window, window);
};

export const performScriptForEval = (script) => {
  return eval(script); // app module mount
};
