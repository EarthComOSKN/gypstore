import React, { useState } from "react";
import Moment from "react-moment";
import { message } from "antd";
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
} from "./Customers.style";
import NoResult from "../../components/NoResult/NoResult";
import { Block } from "baseui/block";
import { Button } from "baseui/button";

const GET_CUSTOMERS = gql`
  query {
    users {
      id
      type
      name
      email
      phone
      createdAt
      activated
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

export default function Customers() {
  const { data, error, refetch } = useQuery(GET_CUSTOMERS);
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState([]);

  const [changeUserStatus] = useMutation(BAN_USER, {
    update(cache, { data }) {
      const { users } = cache.readQuery({ query: GET_CUSTOMERS });
      console.log(data, users);
      const newUsers = users;
      cache.writeQuery({
        query: GET_CUSTOMERS,
        data: { users: newUsers }
      });
    }
  });

  const onActionUser = async (status: boolean, id: string) => {
    await changeUserStatus({
      variables: {
        id,
        status
      }
    });
    if (status) message.success(`${!status ? "ban" : "activate"} userId ${id}`);
    else message.error(`${!status ? "ban" : "activate"} userId ${id}`);
  };

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
              <Heading>สมาชิก</Heading>
            </Col>

            <Col md={9}>
              <Row>
                <Col md={9}>
                  <Input
                    value={search}
                    placeholder="ค้นหาด้วยชื่อ"
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                {/* <Col md={3}>
                  <Select
                    options={sortByOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="เรียงลำดับ"
                    value={stock}
                    searchable={false}
                    onChange={handleSort}
                  />
                </Col> */}
              </Row>
            </Col>
          </Header>

          <Wrapper style={{ boxShadow: "0 0 5px rgba(0, 0 , 0, 0.05)" }}>
            <TableWrapper>
              <StyledTable $gridTemplateColumns="minmax(50px, 50px) minmax(70px, 70px) minmax(200px, auto) minmax(150px, auto) minmax(50px, max-content) minmax(150px, auto) minmax(150px, auto) minmax(50px, max-content) minmax(50px, max-content)">
                <StyledHeadCell>ID</StyledHeadCell>
                <StyledHeadCell>รูป</StyledHeadCell>
                <StyledHeadCell>ชื่อ</StyledHeadCell>
                <StyledHeadCell>เบอร์ติดต่อ</StyledHeadCell>
                <StyledHeadCell>ออเดอร์ทั้งหมด</StyledHeadCell>
                <StyledHeadCell>ราคารวม</StyledHeadCell>
                <StyledHeadCell>สมัครวันที่</StyledHeadCell>
                <StyledHeadCell>สถานะ</StyledHeadCell>
                <StyledHeadCell>ปรับแก้</StyledHeadCell>

                {data ? (
                  data.users.length ? (
                    data.users
                      .map(item => Object.values(item))
                      .map((row, index) => {
                        console.log(row);
                        return (
                          <React.Fragment key={index}>
                            <StyledBodyCell>{index}</StyledBodyCell>
                            <StyledBodyCell>
                              <ImageWrapper>
                                <Image
                                  src="https://www.computerhope.com/jargon/g/guest-user.jpg"
                                  alt="pic"
                                />
                              </ImageWrapper>
                            </StyledBodyCell>
                            <StyledBodyCell>{row[2]}</StyledBodyCell>
                            <StyledBodyCell>{row[4]}</StyledBodyCell>
                            <StyledBodyCell>2</StyledBodyCell>
                            <StyledBodyCell>$1000</StyledBodyCell>
                            <StyledBodyCell>
                              <Moment format="Do MMM YYYY">{row[5]}</Moment>
                            </StyledBodyCell>
                            <StyledBodyCell>
                              {row[6] ? (
                                <span style={{ color: "green" }}>Active</span>
                              ) : (
                                <span style={{ color: "red" }}>Baned</span>
                              )}
                            </StyledBodyCell>
                            <StyledBodyCell>
                              {row[6] ? (
                                <button
                                  style={{
                                    padding: "0.5rem 1.2rem",
                                    cursor: "pointer",
                                    backgroundColor: "red",
                                    borderRadius: "6px",
                                    color: "white"
                                  }}
                                  onClick={() => onActionUser(false, row[0])}
                                >
                                  ban
                                </button>
                              ) : (
                                <button
                                  style={{
                                    padding: "0.5rem 1.2rem",
                                    cursor: "pointer",
                                    backgroundColor: "green",
                                    borderRadius: "6px",
                                    color: "white"
                                  }}
                                  onClick={() => onActionUser(true, row[0])}
                                >
                                  activate
                                </button>
                              )}
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
  );
}
