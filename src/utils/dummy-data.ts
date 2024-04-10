export const Inputs = [
  { label: "Нэр", placeholder: "Нэрээ оруулна уу" },
  { label: "Имэйл", placeholder: "И-мэйл хаягаа оруулна уу" },
  { label: "Хаяг", placeholder: "Та хаягаа оруулна уу" },
];

export const passwords = [
  { label: "Нууц үг", name: "password", placeholder: "Нууц үгээ оруулна уу" },
  {
    label: "Нууц үг давтах",
    name: "rePassword",
    placeholder: "Нууц үгээ оруулна уу",
  },
];

export const NewPassword = [
  { label: "Шинэ нууц үг", name: "password" },
  { label: "Шинэ нууц үг давтах", name: "rePassword" },
];

export const controlCards = [
  { title: "Хүргэлтийн төлөв хянах", desc: "Захиалга бэлтгэлийн явцыг хянах" },
  { title: "Шуурхай хүргэлт", desc: "Захиалга бэлтгэлийн явцыг хянах" },
  { title: "Эрүүл, баталгаат орц", desc: "Захиалга бэлтгэлийн явцыг хянах" },
  { title: "Хоолны өргөн сонголт", desc: "Захиалга бэлтгэлийн явцыг хянах" },
];

export const Area = [
  "Нархан хотхон",
  "26-р байр",
  "26-р байр",
  "45-р байр",
  "3-р байр",
  "Хоймор хотхон ",
  "Хоймор хотхон ",
];

export const MenuBtns = [
  "Breakfast",
  "Salads and Appetizers",
  "Main Course",
  "Dessert",
];
export const styleForDrawerCardBtn = {
  backgroundColor: `#18BA51`,
  color: `white`,
  width: 30,
  height: 30,
};
export const styleOne = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 564,
  width: 981,
  bgcolor: "background.paper",
  borderRadius: `16px`,
  p: 4,
};
export const styleObj = {
  backgroundColor: "#18BA51",
  height: 40,
  fontSize: 19,
  fontWeight: 900,
  color: `white`,
};
export const styleForNum = {
  color: `black`,
  border: `none`,
  height: 20,
  fontSize: 20,
  fontWeight: 600,
  backgroundColor: `white`,
  textDecoration: `line-through`,
};
export const styleForSaleNum = {
  color: `#18BA51`,
  border: `none`,
  height: 20,
  fontSize: 20,
  fontWeight: 600,
  width: 75,
};
export const styleForDrawer = {
  color: `black`,
  border: `none`,
  height: 20,
  fontSize: 17,
  fontWeight: 700,
  backgroundColor: `white`,
};
export const styleForCards = {
  color: `#18BA51`,
  border: `none`,
  height: 20,
  fontSize: 16,
  fontWeight: 600,
  backgroundColor: `white`,
};

export const styleForSCard = {
  color: `black`,
  border: `none`,
  height: 20,
  fontSize: 17,
  textDecoration: `line-through`,
  width: 75,
  fontWeight: 600,
  backgroundColor: `#F7F7F8`,
};
export const styleForSaleCards = {
  color: `#18BA51`,
  border: `none`,
  height: 20,
  fontSize: 17,
  width: 75,
  fontWeight: 600,
  backgroundColor: `#F7F7F8`,
};
export type FoodsDataType = {
  foodCategory: string;
  foodName: string;
  img: string;
  ingredients: [string];
  price: number;
  sale: number;
  stock: number;
  _id: string;
};

export const DrawerCardsArr: FoodsDataType[] = [];

export const styleForAddFoodModalBox = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  borderRadius: `16px`,
};

export const inputsForCreateFoodModal = [
  { name: "Хоолны нэр", eName: "fName" },
  { name: "Хоолны ангилал", eName: "cate" },
  { name: "Хоолны орц", eName: "ing" },
  { name: "Хоолны үнэ", eName: "price" },
  { name: "Хямдралтай эсэх", eName: "sale" },
];
