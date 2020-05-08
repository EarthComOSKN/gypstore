import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import uuidv4 from "uuid/v4";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Scrollbars } from "react-custom-scrollbars";
import { useDrawerDispatch } from "../../context/DrawerContext";
import Uploader from "../../components/Uploader/Uploader";
import Button, { KIND } from "../../components/Button/Button";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import { Row, Col } from "../../components/FlexBox/FlexBox";
import Input from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import Select from "../../components/Select/Select";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";
import { useHistory } from "react-router-dom";

import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from "../DrawerItems/DrawerItems.style";
import { message } from "antd";

const options = [
  { value: "แผ่นยิปซัม", name: "แผ่นยิปซัม", id: "1" },
  { value: "แผ่นดูดซับเสียง", name: "แผ่นดูดซับเสียง", id: "1" },
  {
    value: "โครงฝ้าเพดานและผนังยิปซัม",
    name: "โครงฝ้าเพดานและผนังยิปซัม",
    id: "1",
  },
  { value: "ฉนวนกันความร้อน", name: "ฉนวนกันความร้อน", id: "1" },
  {
    value: "โครงและแผ่นฝ้าเพดานทีบาร์",
    name: "โครงและแผ่นฝ้าเพดานทีบาร์",
    id: "1",
  },
  { value: "ปูนฉาบยิปซัม", name: "ปูนฉาบยิปซัม", id: "1" },
  { value: "ช่องเซอร์วิสสำเร็จรูป", name: "ช่องเซอร์วิสสำเร็จรูป", id: "1" },
  { value: "สเตปสำเร็จรูป", name: "สเตปสำเร็จรูป", id: "1" },
  { value: "อุปกรณ์เสริม", name: "อุปกรณ์เสริม", id: "1" },
  { value: "เครื่องมือช่าง", name: "เครื่องมือช่าง", id: "1" },
];
const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $sortByPrice: String
    $searchText: String
    $offset: Int
  ) {
    products(
      type: $type
      sortByPrice: $sortByPrice
      searchText: $searchText
      offset: $offset
    ) {
      items {
        id
        name
        image
        type
        price
        unit
        salePrice
        discountInPercent
      }
      totalCount
      hasMore
    }
  }
`;
const CREATE_PRODUCT = gql`
  mutation createProductItem($data: ProductItemCreateInput!) {
    createProductItem(data: $data) {
      id
    }
  }
`;
type Props = any;

const AddProduct: React.FC<Props> = (props) => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [
    dispatch,
  ]);
  const { register, handleSubmit, setValue } = useForm();
  const [type, setType] = useState([]);
  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    register({ name: "description" });
  }, [register]);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setValue("description", value);
    setDescription(value);
  };

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const handleMultiChange = ({ value }) => {
    setTag(value);
  };

  const handleTypeChange = ({ value }) => {
    setValue("type", value);
    setType(value);
  };
  const handleUploader = (files) => {
    // setValue("image", files[0].path);
  };
  const onSubmit = async (_data) => {
    console.log(_data);
    const hide = message.loading("กำลังสร้างสินค้า");
    try {
      await createProduct({
        variables: {
          data: {
            ..._data,
            amount: Number(_data.amount),
            MenuDetail: "สินค้าพร้อมจำหน่าย",
            TermDetail:
              "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
            brand: "-",
            image:
              "https://storage.cloud.google.com/gypstore-storage/productImages/69.jpg",
            category: { connect: { id: "ck98oapndmrkz09235pdxjns8" } },
          },
        },
      });
      message.success("เพิ่มสิน้คาสำเร็จ");
    } catch (error) {
      message.error("เกิดข้อผิดพลาด");
    } finally {
      hide();
    }

    closeDrawer();
    window.location.reload();
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>เพิ่มสินค้า</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <Scrollbars
          autoHide
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
          )}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: "none" }}
              className="track-horizontal"
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>อัพโหลดรูปสินค้า</FieldDetails>
            </Col>
            <Col lg={8}>
              <DrawerBox
                overrides={{
                  Block: {
                    style: {
                      width: "100%",
                      height: "auto",
                      padding: "30px",
                      borderRadius: "3px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  },
                }}
              >
                <Uploader onChange={handleUploader} />
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                เพิ่มชื่อสินค้า รายละเอียด และข้อมูลต่างๆให้ครบถ้วน
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>ชื่อสินค้า</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="name"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>คำอธิบาย</FormLabel>
                  <Textarea
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>ราคา (บาท)</FormLabel>
                  <Input
                    type="number"
                    inputRef={register({ required: true })}
                    name="price"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>ราคาที่ลดแล้ว (บาท)</FormLabel>
                  <Input type="number" inputRef={register} name="salePrice" />
                </FormFields>

                <FormFields>
                  <FormLabel>จำนวน</FormLabel>
                  <Input
                    type="number"
                    inputRef={register({ required: true })}
                    name="amount"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>หน่วยสินค้า</FormLabel>
                  <Input type="text" inputRef={register} name="unitType" />
                </FormFields>

                <FormFields>
                  <FormLabel>หมวดหมู่สินค้า</FormLabel>
                  <Select
                    options={options}
                    labelKey="name"
                    valueKey="value"
                    placeholder="หมวดหมู่สินค้า"
                    value={tag}
                    onChange={handleMultiChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                    multi
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "50%",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  borderBottomLeftRadius: "3px",
                  marginRight: "15px",
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            ยกเลิก
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "50%",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  borderBottomLeftRadius: "3px",
                }),
              },
            }}
          >
            เพิ่มสินค้า
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddProduct;
