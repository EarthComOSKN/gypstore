import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './gql'
import { useRouter } from 'next/router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-top: 4rem;
  max-width: 25rem;
  margin: auto;
  h1 {
    margin-bottom: 45px;
  }

  .ant-btn-primary {
    background-color: #ff8e0a;
    border-color: #ff8e0a;
    &:hover {
      background-color: #ffa53b;
      border-color: #ffa53b;
    }
  }
`

const LoginForgot = styled.div`
  float: right;
  a {
    color: #ff8e0a;
    &:hover {
      background-color: #ffa53b;
      border-color: #ffa53b;
    }
  }
`

const LoginButton = styled.div`
  a {
    width: 100%;
  }
`

const SignIn = props => {
  const [login] = useMutation(LOGIN)
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    await props.form.validateFields(async (err, values) => {
      if (!err) {
        const { email, password } = values
        try {
          const res = await login({
            variables: {
              email,
              password,
            },
          })
          const token = res?.data?.login?.token
          localStorage.setItem('userToken', token)
          message.success('เข้าสู่ระบบสำเร็จ')
          router.push('/')
        } catch (error) {
          message.error(`${error}`)
        }
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <Container>
      <h1>เข้าสู่ระบบ</h1>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'กรุณาใส่อีเมล' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="อีเมล"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'กรุณาใส่รหัสผ่าน' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="รหัสผ่าน"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })}
          <LoginForgot>
            <a href="">คุณลืมรหัสผ่านใช่ไหม?</a>
          </LoginForgot>
          <LoginButton>
            <Button type="primary" htmlType="submit">
              เข้าสู่ระบบ
            </Button>
          </LoginButton>
        </Form.Item>
      </Form>
    </Container>
  )
}

export default Form.create()(SignIn)
