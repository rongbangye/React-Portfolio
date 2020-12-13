import React from 'react';
import Title from '../components/Title';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const ContactMe = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <>
      <div className='form-inner'>
        <Title lineContent='Always Online.' lineContent2='Please Reach Out' />
        <div>
          <Form
            {...layout}
            name='nest-messages'
            validateMessages={validateMessages}
            onFinish={onFinish}
          >
            <Form.Item
              name={['user', 'name']}
              label='Name'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label='Email'
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label='Introduction'>
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
