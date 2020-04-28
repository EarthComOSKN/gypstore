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
} from "./Quotations.style";
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
};

const statusToColor = (text) => {
  if (text === "PENDING") return "orange";
  if (text === "COMPLETED") return "green";
  if (text === "CANCELED") return "red";
};
const GET_QUOTATIONS = gql`
  query {
    quotations {
      customer {
        name
        email
      }
      id
      quotationItems {
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
      fileUrl
      status
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

export default function Quotations() {
  const { data, error, refetch } = useQuery(GET_QUOTATIONS);
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState([]);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [quotationVisible, setQuotationVisible] = useState(false);
  const [selectdQuotationItems, setSelectdQuotationItems] = useState([]);
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateStatus] = useMutation(UPDATE_STATUS);
  const [updateFile] = useMutation(UPDATE_FILE);

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  const handleUpdate = async (id, status) => {
    const hide = message.loading("updateing");
    const res = await updateStatus({
      variables: {
        qid: id,

        status,
      },
    });
    hide();
    window.location.reload();
  };
  const handleUpload = async (id, fileUrl) => {
    const hide = message.loading("updateing");
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
              path: `quotations/${selectedQuotation[0].email}/${selectedQuotation[1]}.pdf`,
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
        title="Upload File"
        visible={uploadVisible}
        onOk={() => setUploadVisible(false)}
        onCancel={() => setUploadVisible(false)}
      >
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </Modal>
      <Modal
        title="Quotation Detail"
        visible={quotationVisible}
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
              <List.Item>
                <Row>
                  <Col>{product.brand}</Col>
                  <Col>{product.name}</Col>
                  <Col> ราคา {product.salePrice}</Col>
                  <Col>{product.unitType}</Col>
                  <Col>{q.amount} ชิ้น</Col>
                </Row>
              </List.Item>
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
                <StyledTable $gridTemplateColumns="minmax(50px, 50px) minmax(70px, 70px) minmax(200px, auto) minmax(150px, auto) minmax(50px, max-content) minmax(100px, auto) minmax(100px, auto) minmax(100px, max-content) minmax(100px, max-content)">
                  <StyledHeadCell>ID</StyledHeadCell>
                  <StyledHeadCell>เจ้าของ</StyledHeadCell>
                  <StyledHeadCell>จำนวนรายการสินค้า</StyledHeadCell>
                  <StyledHeadCell>วันที่เปิดใบเสนอราคา</StyledHeadCell>
                  <StyledHeadCell>วันที่แก้ไขล่าสุด</StyledHeadCell>
                  <StyledHeadCell>ราคารวม</StyledHeadCell>
                  <StyledHeadCell>สถานะ</StyledHeadCell>
                  <StyledHeadCell>เอกสาร</StyledHeadCell>
                  <StyledHeadCell>action</StyledHeadCell>

                  {data ? (
                    data.quotations.length ? (
                      data.quotations
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
                                <Dropdown.Button
                                  overlay={
                                    <Menu>
                                      <Menu.Item
                                        style={{ color: "orange" }}
                                        onClick={() =>
                                          handleUpdate(row[1], "PENDING")
                                        }
                                      >
                                        รอตรวจสอบ
                                      </Menu.Item>
                                      <Menu.Divider />
                                      <Menu.Item
                                        style={{ color: "green" }}
                                        onClick={() =>
                                          handleUpdate(row[1], "COMPLETED")
                                        }
                                      >
                                        ออกเอกสาร
                                      </Menu.Item>
                                      <Menu.Divider />
                                      <Menu.Item
                                        style={{ color: "red" }}
                                        onClick={() =>
                                          handleUpdate(row[1], "CANCELED")
                                        }
                                      >
                                        ยกเลิก
                                      </Menu.Item>
                                    </Menu>
                                  }
                                >
                                  <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                    style={{ color: statusToColor(row[6]) }}
                                  >
                                    {engToThai(row[6])}
                                  </a>
                                </Dropdown.Button>
                              </StyledBodyCell>
                              <StyledBodyCell>
                                {/* {} {" "} */}
                                {row[5] ? (
                                  <a href={row[5]} target="_blank">
                                    ดาวโหลด
                                  </a>
                                ) : (
                                  "ยังไม่มีไฟล์"
                                )}
                              </StyledBodyCell>

                              <StyledBodyCell>
                                <AntdButton
                                  onClick={() => {
                                    setUploadVisible(true);
                                    setSelectedQuotation(row);
                                  }}
                                >
                                  upload
                                </AntdButton>
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
