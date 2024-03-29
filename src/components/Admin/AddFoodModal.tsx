import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { styleForAddFoodModalBox } from "@/utils/dummy-data";
const inputs = ["Хоолны нэр", "Хоолны ангилал", "Хоолны орц", "Хоолны үнэ"];
export const AddFoodModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          width: 130,
          height: 35,
          bgcolor: `#18BA51`,
          color: `white`,
          textTransform: `none`,
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        Add new food
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleForAddFoodModalBox}>
          <Stack
            direction={`row`}
            height={64}
            alignItems={`center`}
            px={`24px`}
            borderBottom={`1px solid #E0E0E0`}
            spacing={16}
          >
            <CloseOutlinedIcon onClick={handleClose} />
            <Typography fontSize={24} fontWeight={700}>
              Create food
            </Typography>
          </Stack>
          <Stack>
            {inputs.map((val) => {
              return (
                <Stack key={val} p={`24px`} spacing={`10px`}>
                  <Typography>{val}</Typography>
                  <Box
                    width={539}
                    height={56}
                    borderRadius={`8px`}
                    border={`none`}
                    bgcolor={`#F4F4F4`}
                    sx={{ outline: `none` }}
                    component={`input`}
                    placeholder="Name"
                    px={`12px`}
                  ></Box>
                </Stack>
              );
            })}
          </Stack>
          <Stack
            height={77}
            direction={`row`}
            spacing={`16px`}
            alignItems={`center`}
            justifyContent={`flex-end`}
            p={`24px`}
            borderTop={`1px solid #E0E0E0`}
          >
            <Button
              sx={{
                height: 40,
                width: 65,
                borderRadius: `4px`,
                textTransform: `none`,
                color: `#3F4145`,
              }}
            >
              Clear
            </Button>
            <Button
              sx={{
                height: 40,
                textTransform: `none`,
                width: 109,
                bgcolor: `#393939`,
                color: `white`,
                borderRadius: `4px`,
              }}
            >
              Continue
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
