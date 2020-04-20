import React, { useCallback } from "react";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import { useDrawerDispatch } from "../../context/DrawerContext";
import { STUFF_MEMBERS, SITE_SETTINGS } from "../../settings/constants";
import { styled } from "baseui";
import {
  SiteSettings,
  Members,
  OrderIcon,
  CouponIcon,
  SidebarCategoryIcon,
  ProductIcon
} from "../../components/AllSvgIcon";
import { Grid, Row, Col as Column } from "../../components/FlexBox/FlexBox";
import { useHistory } from "react-router-dom";

const Col = styled(Column, () => ({
  "@media only screen and (max-width: 767px)": {
    marginBottom: "20px",

    ":last-child": {
      marginBottom: 0
    }
  }
}));

export default function Settings() {
  let history = useHistory();

  const dispatch = useDrawerDispatch();

  const openStaffForm = useCallback(
    () =>
      dispatch({ type: "OPEN_DRAWER", drawerComponent: "STAFF_MEMBER_FORM" }),
    [dispatch]
  );

  const openCategoryForm = useCallback(
    () => dispatch({ type: "OPEN_DRAWER", drawerComponent: "CATEGORY_FORM" }),
    [dispatch]
  );

  const openProductForm = useCallback(
    () => dispatch({ type: "OPEN_DRAWER", drawerComponent: "PRODUCT_FORM" }),
    [dispatch]
  );

  const openCouponForm = useCallback(
    () => dispatch({ type: "OPEN_DRAWER", drawerComponent: "CAMPAING_FORM" }),
    [dispatch]
  );

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={6}>
          <SettingsCard
            icon={<Members />}
            title="ผู้ดูแลระบบ"
            subtitle="แn้ไขการเข้าถึงของผู้ดูแลระบบ"
            onClick={() => history.push(STUFF_MEMBERS)}
          />
        </Col>
        <Col md={6}>
          <SettingsCard
            icon={<OrderIcon width="56px" height="56px" />}
            title="เพิ่มผู้ดูแลระบบ"
            subtitle="เพิ่มผู้สมาชิกเป็นผู้ดูแลระบบ"
            onClick={openStaffForm}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <SettingsCard
            icon={<ProductIcon width="56px" height="56px" />}
            title="เพิ่มสินค้า"
            subtitle="เพิ่มรายการสินค้าใหม่"
            onClick={openProductForm}
          />
        </Col>

        <Col md={6}>
          <SettingsCard
            icon={<SidebarCategoryIcon width="56px" height="56px" />}
            title="เพิ่มหมวดหมู่สินค้า"
            subtitle="เพิ่มหมวดหมู่สินค้าใหม่"
            onClick={openCategoryForm}
          />
        </Col>
      </Row>
    </Grid>
  );
}
