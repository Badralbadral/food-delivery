import { Box, Button, Stack, Typography } from "@mui/material";
import { SaleSvg } from "@/svgs/Sale";
import { useState } from "react";
import { CardModal } from "./CardModal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NumericFormat } from "react-number-format";
import { styleForCards } from "@/utils/dummy-data";
type FoodType = {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
};
export const Card = ({
  title,
  data,
}: {
  title: string;
  data: Array<FoodType>;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  return (
    <Stack width={1170} height={`fit-content`} spacing={`22px`}>
      <Stack
        direction={`row`}
        height={32}
        alignItems={`center`}
        justifyContent={`space-between`}
      >
        <Stack direction={`row`} alignItems={`center`} spacing={1}>
          <SaleSvg />
          <Typography fontWeight={700} fontSize={22}>
            {title}
          </Typography>
        </Stack>
        <Button
          href="/menu"
          sx={{
            ":hover": { textDecoration: `underline` },
            color: `#18BA51`,
            gap: `11px`,
            textTransform: `none`,
          }}
        >
          <Typography fontSize={15}>Бүгдийг харах</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </Button>
      </Stack>
      <Stack direction={`row`} flexWrap={`wrap`} width={1290}>
        {data.slice(0, 4).map((val, index) => {
          return (
            <Stack
              onClick={() => {
                setOpen(!open);
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
                boxShadow={
                  "0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
                }
              ></Box>
              <Stack mt={1.4}>
                <Typography fontSize={18} fontWeight={600}>
                  {val.foodName}
                </Typography>
                <NumericFormat
                  style={styleForCards}
                  value={`${val.price}`}
                  thousandSeparator=","
                  suffix="₮"
                  disabled
                />
              </Stack>
            </Stack>
          );
        })}
        <CardModal
          stateVal={open}
          func={() => setOpen(!open)}
          data={data[selected]}
        />
      </Stack>
    </Stack>
  );
};
