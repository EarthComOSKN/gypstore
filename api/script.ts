import { prisma } from "./src/generated/prisma-client";

const pd = [
  {
    name: "แผ่นยิปซัม 9 มม ทนชื้น 1.2x2.4 เมตร",
    price: "200",
    salePrice: "200",
    brand: "Gyproc",
    unitType: "แผ่น",
    description: "ขอบลาด",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  },

  {
    name: "แผ่นยิปซัม 9 มม ธรรมดา 1.2x2.4 เมตร",
    price: "115",
    salePrice: "115",
    brand: "SCL",
    unitType: "แผ่น",
    description: "ขอบลาด",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  },

  {
    name: "แผ่นยิปซัม 9 มม ทนชื้น 1.2x2.4 เมตร",
    price: "165",
    salePrice: "165",
    brand: "SCL",
    unitType: "แผ่น",
    description: "ขอบลาด",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  },

  {
    name: "แผ่นยิปซัมธรรมดา 12 มม 1.2x2.4 เมตร",
    price: "160",
    salePrice: "160",
    brand: "Gyproc",
    unitType: "แผ่น",
    description: "ขอบลาด",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  },

  {
    name: "แผ่นยิปซัมธรรมดา 12 มม. 1.2x2.4 เมตร",
    price: "150",
    salePrice: "135",
    brand: "SCL",
    unitType: "แผ่น",
    description: "ขอบลาด",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  },

  {
    name: "โครงฝ้าซีไลน์ 6 กิโลกรัม",
    price: "18",
    salePrice: "18",
    brand: "-",
    unitType: "มัด",
    description: "-",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 1000
  },

  {
    name: "โครงฝ้าซีไลน์ 7 กิโลกรัม",
    price: "20",
    salePrice: "20",
    brand: "-",
    unitType: "มัด",
    description: "-",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 1000
  },

  {
    name: "โครงฝ้าซีไลน์ 8 กิโลกรัม",
    price: "22",
    salePrice: "22",
    brand: "-",
    unitType: "มัด",
    description: "-",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 1000
  },

  {
    name: "ช่องเปิดสำเร็จรูป",
    price: "220",
    salePrice: "190",
    brand: "SCL",
    unitType: "ช่อง",
    description: "9 มม. ธรรมดา 60x60",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 1000
  },

  {
    name: "ช่องเปิดสำเร็จรูป",
    price: "210",
    salePrice: "180",
    brand: "SCL",
    unitType: "ช่อง",
    description: "9 มม. ธรรมดา 45x45",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 1000
  },

  {
    name: "ช่องเปิดสำเร็จรูป",
    price: "180",
    salePrice: "150",
    brand: "SCL",
    unitType: "ช่อง",
    description: "9 มม. ธรรมดา 30x30",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 1000
  },

  {
    name: "ปูนฉาบรอยต่อ",
    price: "190",
    salePrice: "190",
    brand: "Gyproc",
    unitType: "ถุง",
    description: "25 kg",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 1000
  },

  {
    name: "พุก",
    price: "0.085",
    salePrice: "0.085",
    brand: "-",
    unitType: "ชิ้น",
    description: "9 มม ธรรมดา 60x60",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 100000
  },

  {
    name: "ตัวล็อคโครง",
    price: "0.75",
    salePrice: "0.75",
    brand: "-",
    unitType: "ชิ้น",
    description: "9 มม ธรรมดา 60x60",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  },

  {
    name: "ขอ ป.ปลา",
    price: "0.75",
    salePrice: "0.75",
    brand: "-",
    unitType: "ชิ้น",
    description: "9 มม ธรรมดา 60x60",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  },
  {
    name: "สปริงดำ",
    price: "0.85",
    salePrice: "0.85",
    brand: "-",
    unitType: "ชิ้น",
    description: "9 มม ธรรมดา 60x60",
    MenuDetail: "สินค้าพร้อมจำหน่าย",
    TermDetail:
      "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
    amount: 10000
  }
];

const main = async () => {
  for (let i = 0; i < pd.length; i++)
    await prisma.createProductItem({
      ...pd[i],
      category: {
        connect: {
          id: "ck719ja2400sj0829t4d9volu"
        }
      }
    });
};

main();
