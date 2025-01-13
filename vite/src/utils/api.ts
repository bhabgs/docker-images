export const login = async (username: string, password: string) => {
  // 模拟登录API调用
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, token: 'fake-token' });
    }, 1000);
  });
};