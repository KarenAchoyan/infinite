import React, {useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import Navbar from "@/pages/admin/header/header";

const {TextArea} = Input;

const Add = () => {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
    // You can perform further actions with the form values, such as submitting to an API or updating state
    setIsSubmitted(true);
    form.resetFields();
    message.success('Successfully added!');
  };

  return (
    <Navbar>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Content"
          name="content"
          rules={[{required: true, message: 'Please enter the content.'}]}
        >
          <TextArea rows={4}/>
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{required: true, message: 'Please enter the author.'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {isSubmitted && (
          <p style={{color: 'green'}}>Successfully added!</p>
        )}
      </Form>
    </Navbar>
  );
};

export default Add;
