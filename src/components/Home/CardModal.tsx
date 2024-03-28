import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Close } from "@/svgs/Close";
import { NumericFormat } from "react-number-format";
import {
  styleOne,
  styleObj,
  styleForNum,
  styleForSaleNum,
} from "@/utils/dummy-data";
type ObjType = {
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
};
export const CardModal = ({
  stateVal,
  func,
  data,
}: {
  stateVal: boolean;
  func: () => void;
  data: ObjType;
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <Modal open={stateVal} sx={{ backgroundColor: `transparent` }}>
      <Stack
        direction={`row`}
        alignItems={`center`}
        spacing={`33px`}
        sx={styleOne}
      >
        <Box
          width={500}
          height={500}
          component={"img"}
          src={data.imagePath}
        ></Box>
        <Stack height={410} spacing={`32px`}>
          <Stack position={`relative`}>
            <Close prop={func} />
            <Typography
              fontSize={28}
              fontWeight={700}
              mb={0.5}
              id={`modal-modal-title`}
            >
              {data.foodName}
            </Typography>
            {data.sale > 0 ? (
              <Stack direction={`row`} alignItems={`center`} spacing={2}>
                <NumericFormat
                  style={styleForSaleNum}
                  value={`${data.price - (data.price * data.sale) / 100}`}
                  thousandSeparator=","
                  suffix="₮"
                />
                <NumericFormat
                  style={styleForNum}
                  value={`${data.price}`}
                  thousandSeparator=","
                  suffix="₮"
                />
              </Stack>
            ) : (
              <NumericFormat
                style={styleForSaleNum}
                value={`${data.price - (data.price * data.sale) / 100}`}
                thousandSeparator=","
                suffix="₮"
                disabled
              />
            )}
          </Stack>
          <Stack spacing={`12px`}>
            <Typography fontSize={18} fontWeight={700} id={`modal-modal-title`}>
              Орц
            </Typography>
            <Box
              color={`#767676`}
              bgcolor={`#F6F6F6`}
              width={368}
              height={54}
              borderRadius={`8px`}
              p={`8px`}
              fontSize={16}
            >
              {data.ingredients}
            </Box>
          </Stack>
          <Stack spacing={`32px`}>
            <Typography fontSize={18} fontWeight={700} id={`modal-modal-title`}>
              Тоо
            </Typography>
            <Stack
              direction={`row`}
              alignItems={`center`}
              justifyContent={`space-between`}
            >
              <Button
                onClick={() =>
                  setQuantity(quantity >= 1 ? quantity - 1 : quantity)
                }
                sx={styleObj}
              >
                -
              </Button>
              <Typography fontSize={16} fontWeight={500}>
                {quantity}
              </Typography>

              <Button
                onClick={() =>
                  setQuantity(data.stock <= quantity ? quantity : quantity + 1)
                }
                sx={styleObj}
              >
                +
              </Button>
            </Stack>
            <Button
              sx={{
                bgcolor: `#18BA51`,
                height: 40,
                color: `white`,
              }}
            >
              Сагслах
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
