import styled from "@emotion/styled";

const Container = styled.div`
  height: 30rem;
  width: 100%;
  padding: 3rem 8rem;
  background-color: rgb(241, 241, 241);
`;

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
`;

const ProductBigCardWide = styled.img`
  // padding: 2rem;
  background-color: white;
  // background-image: url("/assets/logo-without-text.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 60%;
  height: 20rem;
  object-fit: contain;
  // border: 1px solid gray;
  // border-style: outset
`;

const ProductCardWideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 20rem;
`;


const ProductCardWide = styled.img`
  // padding: 2rem;
  background-color: white;
  // background-image: url("/assets/logo-without-text.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 10rem;
  object-fit: contain;
  // border: 1px solid gray;
  // border-style: outset

`;



type Props = {
  title: string;
  mainCategoryName: string;
  mainImg: string;
  firstImg: string;
  secondImg: string;
  thirdImg: string;
  fourthImg: string;
};

export const ProductSection = (props: Props) => {
  const { title , 
          mainCategoryName, 
          mainImg, 
          firstImg, 
          secondImg, 
          thirdImg, 
          fourthImg } = props;
  return (
    <Container>
      <h2>{title}</h2>
      {/* <a href={`/category/${mainCategoryName}`}>
        <ProductContainer>
          <ProductCardWideContainer>
            <ProductCardWide src={ firstImg } />
            <ProductCardWide src={ secondImg } />
          </ProductCardWideContainer>
          <ProductBigCardWide />
          <ProductCardWideContainer>
            <ProductCardWide src={ thirdImg } />
            <ProductCardWide src={ fourthImg } />
          </ProductCardWideContainer>
        </ProductContainer>
      </a> */}



      {/*  ----- code below for test Image only ------ */}
      <a href={`/category/${mainCategoryName}`}>
        <ProductContainer>
          <ProductCardWideContainer>
            <ProductCardWide src="/assets/51.png" />
            <ProductCardWide src="/assets/53.png" />
          </ProductCardWideContainer>
          <ProductBigCardWide src="/assets/mock.png" />
          <ProductCardWideContainer>
            <ProductCardWide src="/assets/220.JPG" />
            <ProductCardWide src="/assets/242.JPG" />
          </ProductCardWideContainer>
        </ProductContainer>
      </a> 
      
    </Container>
  );
};
