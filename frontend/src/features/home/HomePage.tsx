import { Navbar } from "../../component/Navbar";
import styled from "@emotion/styled";
import { HomeCarousel } from "./HomeCarousel";

const PageContainer = styled.div``;

export const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <HomeCarousel />
    </PageContainer>
  );
};
