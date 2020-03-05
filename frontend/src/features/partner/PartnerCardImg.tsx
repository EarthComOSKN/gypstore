import styled from "@emotion/styled";

const BrandImageContainer = styled.div`
  > img {
    max-width: 120px;
    padding: 0rem 1rem;
    margin: 0rem 1rem;
  }
`;

type Props = {
  name: string,
  source: string,
}

export const PartnerCardImg = (props: Props) => {
  const { name, source } = props
  return (
    <BrandImageContainer>
      <img alt={name} src={source} />
    </BrandImageContainer>
  )
}