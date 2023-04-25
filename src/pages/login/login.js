import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { Button, Checkbox, Form, Input, message } from 'antd';
import Lottie from 'react-lottie';
import animationData from '../../lottie/login.json';
const onFinish = (values) => {
    // console.log('Success:', values);
    fetch('http://localhost:3000/posts/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                message.success('Login Successful');
                setTimeout(() => {
                    localStorage.setItem('token', data.token);
                    window.location.href = '/';
                }, 2000);
            }
            else{
                message.error('Invalid Credentials');
            }
        }
        );
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function Login() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='loginContainer'>
            <div className='animation'>
                <Lottie
                    style={{ width: '60%', height: '60%', marginLeft: '0', marginRight: '0' }}
                    options={defaultOptions}
                />
            </div>
            <div className='form'>
                <Form
                    // style={{, borderRadius:'10px', boxShadow:'0 0 10px 0 rgba(0,0,0,0.2)'}}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        backgroundColor: 'rgb(35,35,35)',
                        color: 'rgb(35,35,35)',
                        padding: '20px', borderRadius: '10px',
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                        width: '70%',
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label={<label style={{ color: 'white' }}>Username</label>}
                        name="username"
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
                        label={<label style={{ color: 'white' }}>Password</label>}
                        name="password"
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
                        name={'remember'}
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox style={{ color: 'white' }}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Form.Item
                            label={<Link to={'/register'}>Don't have an account?</Link>}>
                        </Form.Item>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;