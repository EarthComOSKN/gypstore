import styled from '@emotion/styled'
import { Button, Form, Input, Tooltip, Icon, Upload, message } from 'antd'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from './gql'
import { useRouter } from 'next/router'

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

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
`

function SignUp(props) {
  const { getFieldDecorator, validateFields } = props.form
  const router = useRouter()
  const [confirmDirty, setConfirmDirty] = useState(false)
  const [loading, setLoading] = useState(false)
  const [register] = useMutation(REGISTER)
  const [imageUrl, setImageUrl] = useState('')

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl)
        setLoading(false)
      })
    }
  }

  const createUser = async ({ nickname, email, password, phone }) => {
    const hide = message.loading('กำลังสมัคร...')
    try {
      setLoading(true)

      const res = await register({
        variables: {
          name: nickname,
          type: 'Admin',
          avatar: imageUrl,
          email,
          password,
          phone,
        },
      })
      const { token } = res?.data?.register
      localStorage.setItem('userToken', token)
      router.push('/')
      hide()
      message.success('Register Completed')
    } catch (error) {
      hide()
      message.error(`${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await validateFields(async (err, values) => {
      if (!err) {
        await createUser(values)
      } else console.log('eeeee', err)
    })
  }

  const handleConfirmBlur = e => {
    const { value } = e.target
    {
      setConfirmDirty(confirmDirty || !!value)
    }
  }

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
  console.log('imageUrl ', imageUrl)

  return (
    <Container>
      <h1>ลงทะเบียน</h1>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
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
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'กรุณาใส่ชื่อที่แสดง',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="อีเมล">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'อีเมลไม่ถูกต้อง',
              },
              {
                required: true,
                message: 'กรุณาระบุอีเมล',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="รหัสผ่าน">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'กรุณาระบุรหัสผ่าน',
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="ยืนยันรหัสผ่าน" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'กรุณาระบุยืนยันรหัสผ่าน',
              },
            ],
          })(<Input.Password onBlur={handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="เบอร์โทรศัพท์">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'กรุณาใส่เบอร์ติดต่อ' }],
          })(<Input style={{ width: '100%' }} />)}
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
  )
}

export default Form.create()(SignUp)
