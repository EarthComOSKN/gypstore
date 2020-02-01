import styled from "@emotion/styled";
import { Button, Form, Input, Tooltip, Icon, message } from "antd";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER } from "./gql";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-top: 4rem;
  max-width: 25rem;
  margin: auto;
  .ant-btn-primary {
    background-color: #ff8e0a;
    border-color: #ff8e0a;
    &:hover {
      background-color: #ffa53b;
      border-color: #ffa53b;
    }
  }
`;

function SignUp(props) {
  const { getFieldDecorator, validateFields } = props.form;
  const router = useRouter();
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [register] = useMutation(REGISTER);

  const createUser = async ({ nickname, email, password, phone }) => {
    try {
      setLoading(true);
      const res = await register({
        variables: {
          name: nickname,
          type: "Admin",
          email,
          password,
          phone
        }
      });
      const { token } = res?.data?.register;
      localStorage.setItem("userToken", token);
      router.push("/");
      message.success("Register Completed");
    } catch (error) {
      message.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await validateFields(async (err, values) => {
      if (!err) {
        await createUser(values);
      } else console.log("eeeee", err);
    });
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    {
      setConfirmDirty(confirmDirty || !!value);
    }
  };

  // const validateToNextPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && confirmDirty) {
  //     form.validateFields([""], { force: true });
  //   }
  //   callback();
  // };

  // const compareToFirstPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   console.log(value);
  //   if (value && value !== form.getFieldValue("password")) {
  //     callback("กรุณากรอกรหัสผ่านให้ตรงกัน");
  //   } else {
  //     callback();
  //   }
  // };

  return (
    <Container>
      <h1>ลงทะเบียน</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          label={
            <span>
              ชื่อ&nbsp;
              <Tooltip title="อยากให้เราเรียกคุณว่าอะไร?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "กรุณาใส่ชื่อที่แสดง",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="อีเมล">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "อีเมลไม่ถูกต้อง"
              },
              {
                required: true,
                message: "กรุณาระบุอีเมล"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="รหัสผ่าน">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "กรุณาระบุรหัสผ่าน"
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="ยืนยันรหัสผ่าน" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "กรุณาระบุยืนยันรหัสผ่าน"
              }
            ]
          })(<Input.Password onBlur={handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="เบอร์โทรศัพท์">
          {getFieldDecorator("phone", {
            rules: [{ required: true, message: "กรุณาใส่เบอร์ติดต่อ" }]
          })(<Input style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item>
          <Button
            disabled={loading}
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
          >
            ลงทะเบียน
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default Form.create()(SignUp);
