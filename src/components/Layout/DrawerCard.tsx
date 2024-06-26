import { FoodsDataType } from "@/types/FoodsDataType";
import { styleForCards, styleForDrawerCardBtn } from "@/utils/dummy-data";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export const DarwerCard = ({ data }: { data: FoodsDataType }) => {
  const [quantity, setQuantity] = useState<number>(data.count);
  let p: number | undefined = 0;
  if (data.sale && data.sale > 0) {
    p = data.price && data.price - (data.price * data.sale) / 100;
  } else {
    p = data.price;
  }
  return (
    <Stack>
      <Stack
        direction={`row`}
        width={538}
        height={182}
        spacing={`16px`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        <Box
          component="img"
          src={`${data.img}`}
          width={245}
          height={150}
          bgcolor={`gray`}
          borderRadius={`8px`}
        ></Box>
        <Stack justifyContent={`center`} width={245} height={150}>
          <Typography mb={0.4} fontSize={18} fontWeight={600}>
            {data.foodName}
          </Typography>
          <NumericFormat
            style={styleForCards}
            value={p && p * data.count}
            thousandSeparator=","
            suffix="₮"
            disabled
          />
          <Stack
            direction={`row`}
            flexWrap={`wrap`}
            width={245}
            color={`#767676`}
            my={1}
          >
            {data?.ingredients?.map((val, index) => {
              return <Typography key={index}>{val},</Typography>;
            })}
          </Stack>
          <Stack
            direction={`row`}
            width={181}
            justifyContent={`space-between`}
            alignItems={`center`}
          >
            <Button
              onClick={() =>
                setQuantity(quantity > 0 ? quantity - 1 : quantity)
              }
              style={styleForDrawerCardBtn}
            >
              -
            </Button>
            {quantity}
            <Button
              onClick={
                () => setQuantity(quantity + 1)
                // setQuantity(
                //   quantity + data.count <= data.stock ? quantity + 1 : quantity
                // )
              }
              style={styleForDrawerCardBtn}
            >
              +
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};
