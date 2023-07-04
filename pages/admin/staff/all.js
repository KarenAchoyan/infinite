import React, {useState} from 'react';
import {Table, Popconfirm, message, Modal, Form, Input, Button, Space} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Navbar from "@/pages/admin/header/header";

const AllStaffPage = () => {
  const [staffList, setStaffList] = useState([
    {id: 1, avatar: 'https://infinite.snapsite.am/static/media/staff-1.6f54f9f761ff6599537b.png', fullname: 'John Doe'},
    {
      id: 2,
      avatar: 'https://infinite.snapsite.am/static/media/staff-1.6f54f9f761ff6599537b.png',
      fullname: 'Jane Smith'
    },
    {
      id: 3,
      avatar: 'https://infinite.snapsite.am/static/media/staff-1.6f54f9f761ff6599537b.png',
      fullname: 'Michael Johnson'
    },
  ]);
  const [editingStaff, setEditingStaff] = useState(null);
  const [editForm] = Form.useForm();
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleDeleteStaff = (staffId) => {
    setStaffList((prevStaffList) =>
      prevStaffList.filter((staff) => staff.id !== staffId)
    );
    message.success('staff deleted successfully');
  };

  const handleEditStaff = (staffId) => {
    const staff = staffList.find((staff) => staff.id === staffId);
    if (staff) {
      setEditingStaff(staff);
      editForm.setFieldsValue({
        fullname: staff.fullname,
      });
      setEditModalVisible(true);
    }
  };

  const handleUpdateStaff = (values) => {
    setStaffList((prevStaffList) =>
      prevStaffList.map((staff) => {
        if (staff.id === editingStaff.id) {
          return {
            ...staff,
            fullname: values.fullname,
          };
        }
        return staff;
      })
    );
    setEditModalVisible(false);
    setEditingStaff(null);
    message.success('staff updated successfully');
  };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => (
        <img
          src={avatar}
          alt="Avatar"
          style={{width: '50px', height: '50px', borderRadius: '50%'}}
        />
      ),
    },
    {
      title: 'Fullname',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (staffId) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<EditOutlined/>}
            onClick={() => handleEditStaff(staffId)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this staff member?"
            onConfirm={() => handleDeleteStaff(staffId)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteOutlined/>}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Navbar>
      <div style={{margin: '24px'}}>
        <h1>All Staff</h1>
        <Table dataSource={staffList} columns={columns}/>

        <Modal
          title="Edit Staff"
          visible={editModalVisible}
          onCancel={() => setEditModalVisible(false)}
          footer={null}
        >
          <Form form={editForm} layout="vertical" onFinish={handleUpdateStaff}>
            <Form.Item
              name="fullname"
              label="Fullname"
              rules={[{required: true, message: 'Please enter fullname'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Navbar>
  );
};

export default AllStaffPage;
