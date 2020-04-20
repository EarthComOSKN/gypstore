import React, { useState } from "react";
import Moment from "react-moment";
import { message, Button as AntdButton } from "antd";
import { styled, withStyle } from "baseui";
import {
  Grid,
  Row as Rows,
  Col as Column
} from "../../components/FlexBox/FlexBox";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Wrapper, Header, Heading } from "../../components/WrapperStyle";

import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledBodyCell,
  StyledStatefulToolTip,
  ActivateButton,
  BanButton
} from "./Quotations.style";
import NoResult from "../../components/NoResult/NoResult";
import { Block } from "baseui/block";
import { Button } from "baseui/button";

const GET_QUOTATIONS = gql`
  query {
    quotations {
      customer {
        name
      }
      id
      quotationItem {
        id
        product {
          id
        }
        amount
        realPrice
      }
      createdAt
      updatedAt
    }
  }
`;

const BAN_USER = gql`
  mutation($id: ID!, $status: Boolean) {
    updateUser(where: { id: $id }, data: { activated: $status }) {
      id
      activated
    }
  }
`;

const Col = withStyle(Column, () => ({
  "@media only screen and (max-width: 767px)": {
    marginBottom: "20px",

    ":last-child": {
      marginBottom: 0
    }
  }
}));

const Row = withStyle(Rows, () => ({
  "@media only screen and (min-width: 768px)": {
    alignItems: "center"
  }
}));

const ImageWrapper = styled("div", ({ $theme }) => ({
  width: "38px",
  height: "38px",
  overflow: "hidden",
  display: "inline-block",
  borderRadius: "20px",
  backgroundColor: $theme.colors.backgroundF7
}));

const Image = styled("img", () => ({
  width: "100%",
  height: "auto"
}));

const sortByOptions = [
  { value: "highestToLowest", label: "Highest To Lowest" },
  { value: "lowestToHighest", label: "Lowest To Highest" }
];

export default function Quotations() {
  const { data, error, refetch } = useQuery(GET_QUOTATIONS);
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState([]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  function handleSort({ value }) {
    // setStock(value);
    // if (value.length) {
    //   refetch({
    //     sortBy: value[0].value
    //   });
    // } else {
    //   refetch({
    //     sortBy: null
    //   });
    // }
  }
  function handleSearch(event) {
    // const value = event.currentTarget.value;
    // console.log(value, "cus val");
    // setSearch(value);
    // refetch({ searchBy: value });
  }

  return (
    <React.Fragment>
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Header
              style={{
                marginBottom: 30,
                boxShadow: "0 0 5px rgba(0, 0 ,0, 0.05)"
              }}
            >
              <Col md={3}>
                <Heading>ใบเสนอราคา</Heading>
              </Col>

              <Col md={9}>
                <Row>
                  <Col md={9}>
                    <Input
                      value={search}
                      placeholder="ค้นหา"
                      onChange={handleSearch}
                      clearable
                    />
                  </Col>

                  <Col md={3}>
                    <Select
                      options={sortByOptions}
                      labelKey="label"
                      valueKey="value"
                      placeholder="เรียงลำดับ"
                      value={stock}
                      searchable={false}
                      onChange={handleSort}
                    />
                  </Col>
                </Row>
              </Col>
            </Header>

            <Wrapper style={{ boxShadow: "0 0 5px rgba(0, 0 , 0, 0.05)" }}>
              <TableWrapper>
                <StyledTable $gridTemplateColumns="minmax(50px, 50px) minmax(70px, 70px) minmax(200px, auto) minmax(150px, auto) minmax(50px, max-content) minmax(150px, auto) minmax(150px, auto) minmax(50px, max-content) ">
                  <StyledHeadCell>ID</StyledHeadCell>
                  <StyledHeadCell>เจ้าของ</StyledHeadCell>
                  <StyledHeadCell>จำนวนรายการสินค้า</StyledHeadCell>
                  <StyledHeadCell>วันที่เปิดใบเสนอราคา</StyledHeadCell>
                  <StyledHeadCell>วันที่แก้ไขล่าสุด</StyledHeadCell>
                  <StyledHeadCell>ราคารวม</StyledHeadCell>
                  <StyledHeadCell>สถานะ</StyledHeadCell>
                  <StyledHeadCell>ปรับแก้</StyledHeadCell>

                  {data ? (
                    data.quotations.length ? (
                      data.quotations
                        .map(item => Object.values(item))
                        .map((row, index) => {
                          console.log(row);
                          return (
                            <React.Fragment key={index}>
                              <StyledBodyCell>{index}</StyledBodyCell>
                              <StyledBodyCell>{row[0].name}</StyledBodyCell>
                              <StyledBodyCell>
                                {row[2].length} รายการ
                              </StyledBodyCell>
                              <StyledBodyCell>
                                <Moment format="Do MMM YYYY">{row[3]}</Moment>
                              </StyledBodyCell>
                              <StyledBodyCell>
                                <Moment format="Do MMM YYYY">{row[4]}</Moment>
                              </StyledBodyCell>
                              <StyledBodyCell>
                                ฿
                                {row[2]
                                  .reduce((p, c) => p + c.realPrice, 0)
                                  .toLocaleString()}
                              </StyledBodyCell>
                              <StyledBodyCell>กำลังดำเนินการ </StyledBodyCell>

                              <StyledBodyCell>
                                <AntdButton>Edit</AntdButton>
                              </StyledBodyCell>
                            </React.Fragment>
                          );
                        })
                    ) : (
                      <NoResult
                        hideButton={false}
                        style={{
                          gridColumnStart: "1",
                          gridColumnEnd: "one"
                        }}
                      />
                    )
                  ) : null}
                </StyledTable>
              </TableWrapper>
            </Wrapper>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
}
