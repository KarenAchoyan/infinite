import React, {useState} from 'react';
import {Card, Table, Button, Modal, Form, Input} from 'antd';
import Navbar from "@/pages/admin/header/header";

const {confirm} = Modal;

const AllBlogPage = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      title: 'blog 1',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'blog 2',
      author: 'Jane Smith',
      content: 'Praesent eget condimentum dolor, at vulputate justo.',
    },
    // Add more blog data objects as needed
  ]);

  const [editingRecord, setEditingRecord] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm] = Form.useForm();

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <span>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => showDeleteConfirm(record)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsEditing(true);
    editForm.setFieldsValue(record);
  };

  const handleEditSave = () => {
    editForm.validateFields().then((values) => {
      const updatedDataSource = dataSource.map((record) =>
        record.id === editingRecord.id ? {...record, ...values} : record
      );
      setDataSource(updatedDataSource);
      setIsEditing(false);
      editForm.resetFields();
    });
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    editForm.resetFields();
  };

  const handleDelete = (record) => {
    const updatedDataSource = dataSource.filter((item) => item.id !== record.id);
    setDataSource(updatedDataSource);
  };

  const showDeleteConfirm = (record) => {
    confirm({
      title: 'Are you sure you want to delete this blog?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => handleDelete(record),
    });
  };

  return (
    <Navbar>
      <Card title="All Blogs">
        <Table dataSource={dataSource} columns={columns}/>

        <Modal
          title="Edit Blog"
          visible={isEditing}
          onOk={handleEditSave}
          onCancel={handleEditCancel}
        >
          <Form form={editForm} layout="vertical">
            <Form.Item
              name="title"
              label="Title"
              rules={[{required: true, message: 'Please enter a title'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              name="author"
              label="Author"
              rules={[{required: true, message: 'Please enter an author'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              name="content"
              label="Content"
              rules={[{required: true, message: 'Please enter the content'}]}
            >
              <Input.TextArea rows={4}/>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </Navbar>
  );
};

export default AllBlogPage;
