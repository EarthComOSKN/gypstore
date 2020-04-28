import { prisma } from "./src/generated/prisma-client";
const products = require("./productInit.json");

const findCategory = async (name) => {
  const res = await prisma.categories({ where: { name } });
  if (res.length === 0) {
    const newCat = await prisma.createCategory({ name });
    console.log(newCat);
    return newCat;
  }

  return res[0];
};
const imgMapper = {
  1: "1.jpg",
  107: "107.jpg",
  108: "108.jpg",
  139: "139.jpg",
  141: "141.jpg",
  143: "143.jpg",
  145: "145.jpg",
  163: "163.JPG",
  166: "166.JPG",
  2: "2.jpg",
  220: "220.jpg",
  242: "242.jpg",
  243: "243.jpg",
  246: "246.jpg",
  247: "247.jpg",
  250: "250.jpg",
  251: "251.JPG",
  252: "252.JPG",
  253: "253.JPG",
  254: "254.JPG",
  255: "255.JPG",
  256: "256.JPG",
  257: "257.JPG",
  258: "258.JPG",
  259: "259.JPG",
  260: "260.JPG",
  261: "261.JPG",
  262: "262.JPG",
  263: "263.JPG",
  277: "277.JPG",
  285: "285.JPG",
  300: "300.JPG",
  301: "301.JPG",
  310: "310.JPG",
  4: "4.jpg",
  5: "5.jpg",
  51: "51.png",
  52: "52.png",
  53: "53.png",
  54: "54.png",
  55: "55.png",
  56: "56.png",
  6: "6.jpg",
  65: "65.jpg",
  66: "66.jpg",
  67: "67.jpg",
  68: "68.jpg",
  69: "69.jpg",
  7: "7.jpg",
  70: "70.jpg",
  71: "71.jpg",
  8: "8.jpg",
  9: "9.jpg",
  50: "9.jpg",
  106: "9.jpg",
  138: "9.jpg",
  140: "9.jpg",
  142: "9.jpg",
  144: "9.jpg",
};
const test = [];
const main = async () => {
  for (let i = 0; i < products.length; i++) {
    console.log("Current " + i);
    const category = await findCategory(products[i].Category);
    const res = await prisma.createProductItem({
      name: products[i].name,
      price: products[i].price,
      salePrice: products[i].salePrice,
      brand: products[i].brand,
      unitType: products[i].unitType,
      description: products[i].description,
      amount: +products[i].amount,
      image: `https://storage.cloud.google.com/gypstore-storage/productImages/${
        imgMapper[products[i].no]
      }`,
      MenuDetail: "สินค้าพร้อมจำหน่าย",
      TermDetail:
        "ลูกค้าสามารถชำระด้วยเงินสดหรือบัตรเครดิต, ลูกค้าสามารถรับสินค้าเองได้หน้าโรงงาน",
      category: {
        connect: {
          id: category.id,
        },
      },
    });
    console.log(res);
    // console.log(
    //   `https://storage.cloud.google.com/gypstore-storage/productImages/${
    //     imgMapper[products[i].no]
    //   }`
    // );
  }
};

main();
// console.log(Object.keys(imgMapper));
// console.log(test);

// console.log(products);

// findCategory("แผ่นดูดซับเสียง");
