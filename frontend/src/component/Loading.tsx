import styled from '@emotion/styled'
import { Button, message, Icon, Modal, Spin } from 'antd'

const FullPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 99;
`

export const FullPageLoading = () => {
  return (
    <FullPageContainer>
      <Spin
        size="large"
        indicator={<Icon type="loading" style={{ fontSize: '10rem' }} spin />}
      />
    </FullPageContainer>
  )
}
