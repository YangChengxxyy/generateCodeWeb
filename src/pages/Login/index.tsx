import { ProCard } from '@ant-design/pro-components';

import { request } from '@umijs/max';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import styles from './styles.less';

export default () => {
  const [form] = useForm();
  const onButtonClick = async () => {
    const formData = form.getFieldsValue();
    const res = await request('/api/login', { method: 'POST', data: formData });
    console.log(res)
  };
  return (
    <ProCard title={'登陆绘制'} className={styles.login} hoverable bordered>
      <Form form={form}>
        <Form.Item name="username" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码" required>
          <Input />
        </Form.Item>
        <Button onClick={onButtonClick}>登陆</Button>
      </Form>
    </ProCard>
  );
};
