import { Box, Button, Stack, Typography } from "@mui/material";
import { SaleSvg } from "@/svgs/Sale";
import { useState } from "react";
import { CardModal } from "./CardModal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NumericFormat } from "react-number-format";
import { styleForSCard, styleForSaleCards } from "@/utils/dummy-data";
import { FoodsDataType } from "@/utils/dummy-data";

export const SaleCard = ({
  title,
  data,
}: {
  title: string;
  data: Array<FoodsDataType> | undefined;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  return (
    <Stack width={1210} height={344} spacing={`22px`}>
      <Stack
        direction={`row`}
        height={32}
        alignItems={`center`}
        justifyContent={`space-between`}
        ml={10}
      >
        <Stack direction={`row`} alignItems={`center`}>
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
      <Stack direction={`row`} spacing={`14px`}>
        {data?.slice(0, 4).map((val, index) => {
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
                src={val.img}
                width={282}
                height={186}
                position={`relative`}
                right={9}
                mb={2}
                boxShadow={
                  " 0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
                }
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
              <Stack spacing={0.6}>
                <Typography fontSize={18} fontWeight={600} mt={2}>
                  {val.foodName}
                </Typography>
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
              </Stack>
            </Stack>
          );
        })}
        <CardModal
          stateVal={open}
          func={() => setOpen(!open)}
          data={data && data[selected]}
        />
      </Stack>
    </Stack>
  );
};
