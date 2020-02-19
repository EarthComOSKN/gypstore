import { Navbar } from "../navigation/Navbar";
import styled from "@emotion/styled";
import { HomeCarousel } from "./HomeCarousel";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "./gql";
import { HeroProduct } from "../hero/HeroProduct";
import { Footer } from "../../component/Footer";
import { ProductSection } from "../product/ProductSection";
import { PartnerCard } from "../../features/partner/partnerCard";
import { BackTop } from "antd";

const PageContainer = styled.div`
  background-color: rgb(241, 241, 241);
`;

export const HomePage = () => {
  const { data, loading } = useQuery(GET_USERS);
  if (loading) return <div>loading</div>;

  console.log(data);

  return (
    <PageContainer>
      <BackTop />
      <Navbar />
      <HomeCarousel />
      <HeroProduct />
      <ProductSection title="ระบบฝ้าเพดานฉาบเรียบ" />
      <ProductSection title="ระบบผนังเบา" />
      <PartnerCard />
      <Footer />
    </PageContainer>
  );
};
