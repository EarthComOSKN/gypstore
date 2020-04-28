import { Upload, Icon, message, Button } from 'antd'
import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
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

const UPLOAD_IMAGE = gql`
  mutation($file: String!, $type: String!, $path: String!) {
    uploadImage(file: $file, type: $type, path: $path)
  }
`

const Avatar = () => {
  const [loading, setLoading] = useState(false)
  const [fileUrl, setImageUrl] = useState(null)
  const [fileType, setFileType] = useState(null)
  const [uploadImage] = useMutation(UPLOAD_IMAGE)
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log(info.file)
      getBase64(info.file.originFileObj, fileUrl => {
        console.log(info.file.type)
        console.log(fileUrl)
        setLoading(true)
        setImageUrl(fileUrl)
        setFileType(info.file.type)
      })
    }
  }

  const handleUpload = async () => {
    console.log(fileUrl)
    const res = await uploadImage({
      variables: {
        file: fileUrl.split(',')[1],
        type: fileType,
        path: 'test.pdf',
      },
    })
    console.log(res)
  }

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  return (
    <>
      <Upload
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
      <Button onClick={() => handleUpload()}>uolaod</Button>
    </>
  )
}

export default () => {
  return (
    <div>
      <Avatar />
    </div>
  )
}
