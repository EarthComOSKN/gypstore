import React, { useState } from "react";
import Moment from "react-moment";
import {
  message,
  Button as AntdButton,
  Modal,
  Upload,
  Icon,
  Dropdown,
  Menu,
  List,
  Divider,
} from "antd";
import { styled, withStyle } from "baseui";
import {
  Grid,
  Row as Rows,
  Col as Column,
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
  BanButton,
} from "./OrderV2.style";
import NoResult from "../../components/NoResult/NoResult";
import { Block } from "baseui/block";
import {
  Button,
  StyledLoadingSpinner,
  StyledLoadingSpinnerContainer,
} from "baseui/button";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const engToThai = (text) => {
  if (text === "PENDING") return "รอตรวจสอบ";
  if (text === "COMPLETED") return "ออกเอกสาร";
  if (text === "CANCELED") return "ยกเลิก";
  if (text === "PAYMENT PROCESS") return "รอชำระเงิน";
  if (text === "PAID") return "ชำระเงินแล้ว";
};
const engToThai2 = (text) => {
  if (text === "RECEIVE_ORDER") return "ได้รับออเดอร์";
  if (text === "S2") return "เตรียมสินค้า";
  if (text === "S3") return "กำลังจัดส่ง";
  if (text === "S4") return "จัดส่งสินค้าเรียบร้อย";
};

const statusToColor = (text) => {
  if (text === "PENDING") return "orange";
  if (text === "COMPLETED") return "green";
  if (text === "CANCELED") return "red";
  if (text === "PAYMENT PROCESS") return "orange";
  if (text === "PAID") return "green";
};
const GET_ORDERS = gql`
  query {
    orders {
      customer {
        name
        email
      }
      id
      orderItem {
        id
        product {
          id
          name
          salePrice
          unitType
          brand
        }
        amount
        realPrice
      }
      createdAt
      updatedAt

      status
      shippingStatus
    }
  }
`;

const UPDATE_SHIPPING = gql`
  mutation($oid: ID!, $status: String!) {
    updateOrder(where: { id: $oid }, data: { shippingStatus: $status }) {
      id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation($file: String!, $type: String!, $path: String!) {
    uploadImage(file: $file, type: $type, path: $path)
  }
`;

const UPDATE_STATUS = gql`
  mutation($qid: ID!, $status: String!) {
    updateQuotation(data: { status: $status }, where: { id: $qid }) {
      id
    }
  }
`;
const UPDATE_FILE = gql`
  mutation($qid: ID!, $fileUrl: String!) {
    updateQuotation(data: { fileUrl: $fileUrl }, where: { id: $qid }) {
      id
    }
  }
`;

const Col = withStyle(Column, () => ({
  "@media only screen and (max-width: 767px)": {
    marginBottom: "20px",

    ":last-child": {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  "@media only screen and (min-width: 768px)": {
    alignItems: "center",
  },
}));

const ImageWrapper = styled("div", ({ $theme }) => ({
  width: "38px",
  height: "38px",
  overflow: "hidden",
  display: "inline-block",
  borderRadius: "20px",
  backgroundColor: $theme.colors.backgroundF7,
}));

const Image = styled("img", () => ({
  width: "100%",
  height: "auto",
}));

const sortByOptions = [
  { value: "highestToLowest", label: "Highest To Lowest" },
  { value: "lowestToHighest", label: "Lowest To Highest" },
];

export default function OrderV2() {
  const { data, error, refetch } = useQuery(GET_ORDERS);
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState([]);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [orderVisible, setQuotationVisible] = useState(false);
  const [selectdQuotationItems, setSelectdQuotationItems] = useState([]);
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateStatus] = useMutation(UPDATE_STATUS);
  const [updateFile] = useMutation(UPDATE_FILE);
  const [updateShipping] = useMutation(UPDATE_SHIPPING);

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  const handleUpdate = async (id, status) => {
    const hide = message.loading("กำลังโหลด...");
    const res = await updateShipping({
      variables: {
        oid: id,
        status,
      },
    });
    hide();
    window.location.reload();
  };
  const handleUpload = async (id, fileUrl) => {
    const hide = message.loading("กำลังโหลด...");
    const res = await updateFile({
      variables: {
        qid: id,

        fileUrl,
      },
    });
    hide();
    window.location.reload();
  };
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

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
        getBase64(info.file.originFileObj, (fileUrl) => {
          uploadFile({
            variables: {
              file: fileUrl.split(",")[1],
              type: info.file.type,
              path: `orders/${selectedQuotation[0].email}/${selectedQuotation[1]}.pdf`,
            },
          }).then((res) => {
            console.log(res);
            handleUpload(selectedQuotation[1], res.data.uploadImage);
          });
        });
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <React.Fragment>
      <Modal
        title="Quotation Detail"
        visible={orderVisible}
        onCancel={() => setQuotationVisible(false)}
        width={900}
        onOk={() => setQuotationVisible(false)}
      >
        รายการสินค้่า
        {/* {selectdQuotationItems.map((q) => {
          console.log(q);
          const product = q.product;
          return (
            
            
          );
        })} */}
        <List
          itemLayout="horizontal"
          dataSource={selectdQuotationItems}
          renderItem={(q) => {
            const product = q.product;
            return (
              <>
                <List.Item>
                  <Row style={{ width: "100%" }}>
                    <Col lg={2}>{product.brand}</Col>
                    <Col lg={4}>{product.name}</Col>
                    <Col lg={3}>
                      ราคา {product.salePrice}/{product.unitType}
                    </Col>
                    <Col lg={3}>
                      จำนวน {q.amount} {product.unitType}
                    </Col>
                  </Row>
                </List.Item>
              </>
            );
          }}
        />
      </Modal>
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Header
              style={{
                marginBottom: 30,
                boxShadow: "0 0 5px rgba(0, 0 ,0, 0.05)",
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
                <StyledTable $gridTemplateColumns="minmax(50px, 50px) minmax(70px, 70px) minmax(200px, auto) minmax(150px, auto) minmax(50px, max-content) minmax(100px, auto) minmax(100px, auto) minmax(100px, auto) ">
                  <StyledHeadCell>ID</StyledHeadCell>
                  <StyledHeadCell>เจ้าของ</StyledHeadCell>
                  <StyledHeadCell>จำนวนรายการสินค้า</StyledHeadCell>
                  <StyledHeadCell>วันที่เปิดใบเสนอราคา</StyledHeadCell>
                  <StyledHeadCell>วันที่แก้ไขล่าสุด</StyledHeadCell>
                  <StyledHeadCell>ราคารวม</StyledHeadCell>
                  <StyledHeadCell>สถานะ</StyledHeadCell>
                  <StyledHeadCell>การจัดส่ง</StyledHeadCell>

                  {data ? (
                    data.orders.length ? (
                      data.orders
                        .map((item) => Object.values(item))
                        .map((row, index) => {
                          console.log(row);
                          return (
                            <React.Fragment key={index}>
                              <StyledBodyCell>{index}</StyledBodyCell>
                              <StyledBodyCell>{row[0].name}</StyledBodyCell>
                              <StyledBodyCell>
                                <a
                                  onClick={() => {
                                    setQuotationVisible(true);
                                    setSelectedQuotation(row);
                                    setSelectdQuotationItems(row[2]);
                                  }}
                                >
                                  {row[2].length} รายการ
                                </a>
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
                              <StyledBodyCell>
                                <a
                                  href="https://dashboard.omise.co/test/dashboard"
                                  target="__blank"
                                  style={{ color: statusToColor(row[5]) }}
                                >
                                  {engToThai(row[5])}
                                </a>
                              </StyledBodyCell>
                              <StyledBodyCell>
                                <Dropdown.Button
                                  overlay={
                                    <Menu>
                                      <Menu.Item
                                        style={{ color: "orange" }}
                                        onClick={() =>
                                          handleUpdate(row[1], "RECEIVE_ORDER")
                                        }
                                      >
                                        ได้รับออเดอร์
                                      </Menu.Item>
                                      <Menu.Divider />
                                      <Menu.Item
                                        style={{ color: "orange" }}
                                        onClick={() =>
                                          handleUpdate(row[1], "S2")
                                        }
                                      >
                                        เตรียมสินค้า
                                      </Menu.Item>
                                      <Menu.Divider />
                                      <Menu.Item
                                        style={{ color: "green" }}
                                        onClick={() =>
                                          handleUpdate(row[1], "S3")
                                        }
                                      >
                                        กำลังจัดส่ง
                                      </Menu.Item>
                                      <Menu.Divider />
                                      <Menu.Item
                                        style={{ color: "green" }}
                                        onClick={() =>
                                          handleUpdate(row[1], "S4")
                                        }
                                      >
                                        จัดส่งสินค้าเรียบร้อย
                                      </Menu.Item>
                                    </Menu>
                                  }
                                >
                                  <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    {engToThai2(row[6])}
                                  </a>
                                </Dropdown.Button>
                              </StyledBodyCell>
                            </React.Fragment>
                          );
                        })
                    ) : (
                      <NoResult
                        hideButton={false}
                        style={{
                          gridColumnStart: "1",
                          gridColumnEnd: "one",
                        }}
                      />
                    )
                  ) : (
                    <StyledLoadingSpinnerContainer>
                      <StyledLoadingSpinner />
                    </StyledLoadingSpinnerContainer>
                  )}
                </StyledTable>
              </TableWrapper>
            </Wrapper>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
}
