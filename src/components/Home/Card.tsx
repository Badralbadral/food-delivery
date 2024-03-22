import { Box, Modal, Stack, Typography } from "@mui/material";
import { SaleSvg } from "@/svgs/Sale";
import { useState } from "react";
type FoodType = {
  foodName: string;
  price: number;
  currency: string;
  salePrice: number;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Card = ({ title, data }: { title: string; data: FoodType[] }) => {
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen(!open);
  }
  return (
    <Stack width={1200} height={344} spacing={`22px`}>
      <Stack direction={`row`} height={32} alignItems={`center`}>
        <SaleSvg />
        <Typography fontWeight={700} fontSize={22}>
          {title}
        </Typography>
      </Stack>
      <Stack onClick={handleModal} direction={`row`} spacing={`14px`}>
        {data.map((val, index) => {
          return (
            <Stack key={index} width={303} height={256}>
              <Box
                component={"img"}
                src="breakFast.png"
                width={293.9}
                height={216}
                position={`relative`}
                right={9}
                boxShadow={"0px 3px 6px -2px rgba(0, 0, 0, 0.10),"}
              ></Box>
              <Typography fontSize={18} fontWeight={600} mt={`4px`}>
                {val.foodName}
              </Typography>
              <Stack direction={`row`} spacing={`16px`}>
                <Typography color={`#18BA51`}>
                  {val.price}
                  {val.currency}
                </Typography>
                <Typography sx={{ textDecoration: `line-through` }}>
                  {val.salePrice}
                  {val.currency}
                </Typography>
              </Stack>
              <Modal
                open={open}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ backgroundColor: `transparent` }}
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
