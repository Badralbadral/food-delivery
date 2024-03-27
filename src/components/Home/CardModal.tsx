import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Close } from "@/svgs/Close";
type ObjType = {
  id: number;
  category: string;
  foodName: string;
  price: string;
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
    height: 40,
    fontSize: 19,
    fontWeight: 900,
    color: `white`,
  };
  return (
    <Modal open={stateVal} sx={{ backgroundColor: `transparent` }}>
      <Stack
        direction={`row`}
        alignItems={`center`}
        spacing={`33px`}
        sx={style}
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
            <Typography fontSize={28} fontWeight={700} id={`modal-modal-title`}>
              {data.foodName}
            </Typography>
            <Typography fontSize={18} fontWeight={600} color={`#18BA51`}>
              {data.price}₮
            </Typography>
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
