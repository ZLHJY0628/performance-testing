import { test, expect } from '@playwright/test';
test('登录并保持登录态', async ({ page ,context}) => {
  await page.goto('https://javatest.peoplus.cn/login');
  await page.getByRole('textbox', { name: '请输入用户名' }).fill('xhy');
  await page.getByRole('textbox', { name: '请输入登录密码' }).fill('1qaz$RFV');
  await page.getByRole('button', { name: '登录' }).click(); 

  await expect(page).toHaveURL(/\/homepage/); // 验证登录成功后跳转到主页
});