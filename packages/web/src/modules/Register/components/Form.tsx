import * as React from 'react'

import { useFormik } from 'formik'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const FormItem = Form.Item

interface IFormValues {
    email: string
    password: string
}

const RegisterForm: React.FC = () => {
    const {
        values: formValues,
        handleChange,
        handleSubmit,
        errors,
    } = useFormik<IFormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (
            values,
            { validateForm, setErrors, setSubmitting }
        ) => {
            console.log(values)
            const errors = await validateForm(values)
            if (errors) {
                setErrors(errors)
            }
        },
    })
    return (
        <Form
            onSubmitCapture={handleSubmit}
            style={{ width: '400px', margin: '0 auto' }}
        >
            <FormItem
                name="email"
                rules={[
                    { required: true, message: 'Please input your Username!' },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </FormItem>
            <FormItem
                name="password"
                rules={[
                    { required: true, message: 'Please input your Password!' },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
            </FormItem>
            <FormItem>
                <FormItem name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </FormItem>

                <FormItem>
                    <a className="login-form-forgot" href="#">
                        Forgot password
                    </a>
                </FormItem>
            </FormItem>

            <FormItem>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Register
                </Button>
                <FormItem>
                    Or <a href="">Login now!</a>
                </FormItem>
            </FormItem>
        </Form>
    )
}

export default RegisterForm
