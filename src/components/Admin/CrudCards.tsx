import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CardModal } from "../Home/CardModal";
import { NumericFormat } from "react-number-format";
import { styleForSCard, styleForSaleCards } from "@/utils/dummy-data";
type FoodType = {
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
};
export const CrudCards = ({ data }: { data: Array<FoodType> }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const sortedData = data.sort((a, b) => {
    return b.sale - a.sale;
  });
  return (
    <Stack height={`fit-content`} spacing={`22px`} mt={6}>
      <Stack direction={`row`} flexWrap={`wrap`} width={990}>
        {sortedData.map((val, index) => {
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
              mb={4}
            >
              <Stack sx={{ ":hover": { backgroundColor: `black` } }}>
                <Box
                  borderRadius={`16px`}
                  component={"img"}
                  src={val.imagePath}
                  width={282}
                  height={186}
                  boxShadow={
                    "0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
                  }
                ></Box>
              </Stack>
              {val.sale > 0 && (
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
              )}
              <Stack mt={1.4} spacing={0.5}>
                <Typography fontSize={18} fontWeight={600}>
                  {val.foodName}
                </Typography>
                {val.sale > 0 ? (
                  <Stack direction={`row`} alignItems={`center`}>
                    <NumericFormat
                      style={styleForSaleCards}
                      value={`${val.price - (val.price * val.sale) / 100}`}
                      thousandSeparator=","
                      suffix="₮"
                    />
                    <NumericFormat
                      style={styleForSCard}
                      value={`${val.price}`}
                      thousandSeparator=","
                      suffix="₮"
                    />
                  </Stack>
                ) : (
                  <NumericFormat
                    style={styleForSaleCards}
                    value={`${val.price}`}
                    thousandSeparator=","
                    suffix="₮"
                    disabled
                  />
                )}
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
