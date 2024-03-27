import { Box, Stack, Typography } from "@mui/material";
import { SaleSvg } from "@/svgs/Sale";
import { useState } from "react";
import { CardModal } from "./CardModal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type FoodType = {
  id: number;
  category: string;
  foodName: string;
  price: string;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
};
export const SaleCard = ({
  title,
  data,
}: {
  title: string;
  data: Array<FoodType>;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  function handleModal() {
    setOpen(!open);
  }
  return (
    <Stack width={1200} height={344} spacing={`22px`}>
      <Stack
        direction={`row`}
        height={32}
        alignItems={`center`}
        justifyContent={`space-between`}
      >
        <Stack direction={`row`} alignItems={`center`}>
          <SaleSvg />
          <Typography fontWeight={700} fontSize={22}>
            {title}
          </Typography>
        </Stack>
        <Stack
          direction={`row`}
          alignItems={`center`}
          spacing={`11px`}
          sx={{ ":hover": { textDecoration: `underline` } }}
          color={`#18BA51`}
        >
          <Typography fontSize={15}>Бүгдийг харах</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </Stack>
      </Stack>
      <Stack direction={`row`} spacing={`14px`}>
        {data.slice(0, 4).map((val, index) => {
          return (
            <Stack
              onClick={() => {
                handleModal();
                setSelected(index);
              }}
              key={index}
              width={303}
              height={256}
              position={`relative`}
            >
              <Box
                borderRadius={`16px`}
                component={"img"}
                src={val.imagePath}
                width={282}
                height={186}
                position={`relative`}
                right={9}
                boxShadow={"0px 3px 6px -2px rgba(0, 0, 0, 0.10),"}
              ></Box>
              <Box
                top={17}
                left={205}
                position={`absolute`}
                border={`1px solid white`}
                fontSize={15}
                fontWeight={600}
                width={`57px`}
                height={`26px`}
                bgcolor={`#18BA51`}
                color={`white`}
                px={`14px`}
                py={`4px`}
                borderRadius={`16px`}
              >
                {val.sale}%
              </Box>
              <Typography fontSize={18} fontWeight={600} mt={2}>
                {val.foodName}
              </Typography>
              <Stack direction={`row`} spacing={`16px`}>
                <Typography color={`#18BA51`}>{val.price}₮</Typography>
                <Typography sx={{ textDecoration: `line-through` }}>
                  {val.price}₮
                </Typography>
              </Stack>
            </Stack>
          );
        })}
        <CardModal stateVal={open} func={handleModal} data={data[selected]} />
      </Stack>
    </Stack>
  );
};
