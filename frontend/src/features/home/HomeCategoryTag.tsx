import styled from "@emotion/styled";

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

const CategoryLogo = styled.img`
  height: 9rem;
  width: auto;
  -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.15);
	  transform: scale(1.15);
  }
`;

const CategoryName = styled.div`
  font-size: 1rem;
  color: black;
`;

type Props = {
  name: string,
  source: string,
}

export const HomeCategoryTag = (props: Props) => {
  const { name, source } = props
  return (
    <a href={`/category/${name}`}>
      <MenuButton>
        <CategoryLogo src={ source } alt={ name } />
        <CategoryName>{ name }</CategoryName>
      </MenuButton>
    </a>
  )
}


// export const HomeCategoryTag = (props: Props) => {
//   const { name, source, row } = props
//   return (
//     <>
//       <RowList>
//         <a>
//           <MenuButton>
//             <CategoryLogo src="/assets/gypsum.png" alt="logo" />
//             <CategoryName>Test</CategoryName>
//           </MenuButton>
//         </a>
//       </RowList>
//       <RowList>
//         <a>
//           <MenuButton>
//             <CategoryLogo src="/assets/gypsum.png" alt="logo" />
//             <CategoryName>Test</CategoryName>
//           </MenuButton>
//         </a>
//       </RowList>
//     </>
//   )
// }