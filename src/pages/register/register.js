import React from 'react'
import '../register/register.css'
import Lottie from 'react-lottie';
import animationData from '../../lottie/register.json';
import { message } from 'antd';
import { Button, Form, Input, InputNumber, Select } from 'antd';



const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
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
/* eslint-enable no-template-curly-in-string */


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default function Register() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
        if (values.user.password != values.user.retypepassword) {
            message.error('Passwords do not match');
            form.resetFields();
            return;
        }
        fetch('http://localhost:3000/posts/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values.user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    message.success('Registered Successfully');
                    
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);
                    
                }
                else{
                    message.error('Error in Registeration')
                }
            }
        );

    };
    return (
        <div className='loginContainer'>
            <div className='form' style={{ alignItems: 'initial' }}>
                <h1 style={{ color: 'white', textAlign: 'center', fontSize: '3rem' }}>Let's Get Started</h1>
                <Form
                    form={form}
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        backgroundColor: 'rgb(35,35,35)',
                        color: 'rgb(35,35,35)',
                        padding: '20px', borderRadius: '10px',
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                        width: '70%',
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={['user', 'name']}
                        label={<label style={{ color: 'white' }}>Name</label>}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'username']}
                        label={<label style={{ color: 'white' }}>Username</label>}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'password']}
                        label={<label style={{ color: 'white' }}>Password</label>}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'retypepassword']}
                        label={<label style={{ color: 'white' }}>Retype Password</label>}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'age']}
                        label={<label style={{ color: 'white' }}>Age</label>}
                        rules={[
                            {
                                type: 'number',
                                min: 0,
                                max: 99,
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user','gender']} label={<label style={{ color: 'white' }}>Gender</label>}>
                        <Select>
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item

                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='animation'>
                <Lottie
                    style={{ width: '60%', height: '60%', marginLeft: '0', marginRight: '0' }}
                    options={defaultOptions}
                />
            </div>
        </div>
    )
}
