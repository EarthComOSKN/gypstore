import styled from '@emotion/styled';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../../component/Footer';
import { DeliveryImage } from './DeliveryImage';

const PageContainer = styled.div`
  background-color: rgb(241, 241, 241);
`;

export const DeliveryPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <DeliveryImage />
      <Footer />
    </PageContainer>
  )
  
}