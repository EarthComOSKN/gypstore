import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 30px 50px;

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
`;

const LoginForgot = styled.div`
  float: right;
  a {
    color: #ff8e0a;
    &:hover {
      background-color: #ffa53b;
      border-color: #ffa53b;
    }
  }
`;

const LoginButton = styled.div`
  a {
    width: 100%;
  }
`;

function SignIn(props) {
  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return(
    <Container>
      <h1>เข้าสู่ระบบ</h1>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
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
            <a href="">
              คุณลืมรหัสผ่านใช่ไหม?
            </a>
          </LoginForgot>
          <LoginButton>
            <Button type="primary" htmlType="submit">
              เข้าสู่ระบบ
            </Button>
          </LoginButton>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default Form.create()(SignIn);