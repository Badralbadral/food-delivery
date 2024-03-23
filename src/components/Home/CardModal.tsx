import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Close } from "@/svgs/Close";
type ObjType = {
  foodName: string;
  price: number;
  currency: string;
  salePrice: number;
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
  const style = {
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

  const styleObj = {
    backgroundColor: "#18BA51",
    width: 10,
    height: 40,
    fontSize: 19,
    fontWeight: 900,
  };
  return (
    <Modal
      open={stateVal}
      aria-labelledby={`modal-modal-title`}
      aria-describedby={`modal-modal-description`}
      sx={{ backgroundColor: `transparent` }}
    >
      <Stack
        direction={`row`}
        alignItems={`center`}
        spacing={`33px`}
        sx={style}
      >
        <Stack width={500} height={500} bgcolor={`gray`}></Stack>
        <Stack height={410} spacing={`32px`}>
          <Stack position={`relative`}>
            <Close prop={func} />
            <Typography
              fontSize={28}
              fontWeight={700}
              id={`modal-modal-title`}
              variant="h6"
              component="h2"
            >
              {data.foodName}
            </Typography>
            <Typography
              id={`modal-modal-description`}
              fontSize={18}
              fontWeight={600}
              color={`#18BA51`}
            >
              {data.price}
              {data.currency}
            </Typography>
          </Stack>
          <Stack spacing={`12px`}>
            <Typography
              fontSize={18}
              fontWeight={700}
              id={`modal-modal-title`}
              variant="h6"
              component="h2"
            >
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
              Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
            </Box>
          </Stack>
          <Stack spacing={`32px`}>
            <Typography
              fontSize={18}
              fontWeight={700}
              id={`modal-modal-title`}
              variant="h6"
              component="h2"
            >
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
                variant="contained"
              >
                -
              </Button>
              <Typography fontSize={16} fontWeight={500}>
                {quantity}
              </Typography>

              <Button
                onClick={() => setQuantity(quantity + 1)}
                sx={styleObj}
                variant="contained"
              >
                +
              </Button>
            </Stack>
            <Button
              sx={{
                bgcolor: `#18BA51`,
                height: 40,
                borderRadius: `4px`,
                py: `8px`,
                px: `16px`,
                mt: 3,
              }}
              variant="contained"
            >
              Сагслах
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
