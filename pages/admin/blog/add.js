import React, {useState} from 'react';
import {Form, Input, Upload, Button, message} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '@/pages/admin/header/header';
import {useDispatch} from 'react-redux';
import {addBlog} from '@/store/blog/actions';

const AddBlogPage = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [content, setContent] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (info) => {
    // Get the uploaded file from the response and set it as the avatar
    const uploadedFile = info.file.response;
    setAvatar(uploadedFile);
  };

  const handleSubmit = (values) => {
    // Add the avatar to the form values
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('avatar', avatar);
    formData.append('content', content);


    dispatch(addBlog.request(formData));
    form.resetFields();
    message.success('Blog successfully added!');
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <Navbar>
      <h1>Add Blog</h1>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Title" name="title" rules={[{required: true, message: 'Please enter the title'}]}>
          <Input placeholder="Enter the title"/>
        </Form.Item>
        <Form.Item label="Avatar" name="avatar">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleAvatarChange}
          >
            <div>
              <PlusOutlined/>
              <div style={{marginTop: 8}}>Upload Avatar</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Content" name="content">
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={{
              toolbar: {
                container: [
                  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                  ['blockquote', 'code-block'],
                  [{header: 1}, {header: 2}], // custom button values
                  [{list: 'ordered'}, {list: 'bullet'}],
                  [{script: 'sub'}, {script: 'super'}], // superscript/subscript
                  [{indent: '-1'}, {indent: '+1'}], // outdent/indent
                  [{direction: 'rtl'}], // text direction
                  [{size: ['small', false, 'large', 'huge']}], // custom dropdown
                  [{header: [1, 2, 3, 4, 5, 6, false]}],
                  [{color: []}, {background: []}], // dropdown with defaults from theme
                  [{font: []}],
                  [{align: []}],
                  ['link', 'image', 'video', 'formula'], // add image and video support
                  ['clean'], // remove formatting button
                ],
              },
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Navbar>
  );
};

export default AddBlogPage;
