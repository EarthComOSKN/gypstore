import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import uuidv4 from "uuid/v4";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Scrollbars } from "react-custom-scrollbars";
import { useDrawerDispatch } from "../../context/DrawerContext";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/CheckBox/CheckBox";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import Button, { KIND } from "../../components/Button/Button";

import DrawerBox from "../../components/DrawerBox/DrawerBox";
import { Row, Col } from "../../components/FlexBox/FlexBox";
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup
} from "../DrawerItems/DrawerItems.style";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

const GET_STUFFS = gql`
  query getStuffs($role: String, $searchBy: String) {
    stuffs(role: $role, searchBy: $searchBy) {
      id
      name
      email
      contact_number
      creation_date
      role
    }
  }
`;

const CREATE_STUFF = gql`
  mutation createSalesman($data: SalesmanCreateInput!) {
    createSalesman(data: $data) {
      id
      name
      email
      phone
      createdAt
    }
  }
`;

type Props = any;

const StuffMemberForm: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [
    dispatch
  ]);
  const { register, handleSubmit } = useForm();
  const [country, setCountry] = React.useState({
    label: "Thailand (ไทย)",
    id: "TH",
    dialCode: "+66"
  });
  const [checked, setChecked] = React.useState(true);
  const [text, setText] = React.useState("");

  const [createStuff] = useMutation(CREATE_STUFF, {
    update(cache, { data: { createStuff } }) {
      const { salesmen } = cache.readQuery({
        query: GET_STUFFS
      });

      cache.writeQuery({
        query: GET_STUFFS,
        data: { salesmen: salesmen.concat([createStuff]) }
      });
    }
  });
  const onSubmit = data => {
    const newStuff = {
      name: data.first_name + " " + data.last_name,
      phone: data.contact_number,
      email: data.email
    };
    createStuff({ variables: { data: newStuff } });
    closeDrawer();
    window.location.reload();
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>เพิ่มผู้ดูแลระบบ</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <Scrollbars
          autoHide
          renderView={props => (
            <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
          )}
          renderTrackHorizontal={props => (
            <div
              {...props}
              style={{ display: "none" }}
              className="track-horizontal"
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>
                กรอกรายละเอียดของผู้ดูแลระบบใหม่ให้ครบถ้วน
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>ชื่อจริง</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="first_name"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>นามสกุล</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="last_name"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>เบอร์ติดต่อ</FormLabel>
                  <PhoneInput
                    country={country}
                    onCountryChange={({ option }) => {
                      console.log(option);
                      setCountry(option);
                    }}
                    text={text}
                    onTextChange={e => setText(e.currentTarget.value)}
                    inputRef={register({ required: true })}
                    name="contact_number"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>อีเมลล์</FormLabel>
                  <Input
                    type="email"
                    inputRef={register({ required: true })}
                    name="email"
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

          {/* <Row>
            <Col lg={4}>
              <FieldDetails>
                Expand or restrict user’s permissions to access certain part of
                pickbazar system.
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <Checkbox
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                    inputRef={register}
                    overrides={{
                      Label: {
                        style: ({ $theme }) => ({
                          color: $theme.colors.textNormal
                        })
                      }
                    }}
                  >
                    Access for created account
                  </Checkbox>
                </FormFields>
              </DrawerBox>
            </Col>
          </Row> */}
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
                  color: $theme.colors.red400
                })
              }
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
                  borderBottomLeftRadius: "3px"
                })
              }
            }}
          >
            เพิ่มผู้ดูแลระบบ
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default StuffMemberForm;
