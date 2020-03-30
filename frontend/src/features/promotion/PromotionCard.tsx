import styled from "@emotion/styled";

const PromotionImage = styled.div`
  > img {
    width: 590px;
    height: auto;
    object-fit: contain;
  }
`;

type Props = {
  name: string,
  source: string,
}

export const PromotionCard = (props: Props) => {
  const { name, source } = props
  return (
    <PromotionImage>
      <img alt={name} src={source} />
    </PromotionImage>
  )
}