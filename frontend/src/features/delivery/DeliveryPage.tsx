import styled from '@emotion/styled';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../../component/Footer';
import { DeliveryDetail } from './DeliveryDetail';

const PageContainer = styled.div`
  background-color: rgb(241, 241, 241);
`;

export const DeliveryPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <DeliveryDetail />
      <Footer />
    </PageContainer>
  )
  
}