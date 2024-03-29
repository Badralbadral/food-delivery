import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 567,
  height: 284,
  bgcolor: "background.paper",
  borderRadius: `16px`,
};

export const CategoryModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Stack
        direction={`row`}
        alignItems={`center`}
        borderRadius={`8px`}
        px={`16px`}
        border={`1px solid #D6D8DB`}
        height={40}
        color={`#5E6166`}
        spacing={1}
        onClick={handleOpen}
      >
        <AddOutlinedIcon />
        <Typography>Create new category</Typography>
      </Stack>
      <Modal open={open}>
        <Box sx={style}>
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
              Create new category
            </Typography>
          </Stack>
          <Stack p={`24px`} spacing={`16px`} borderBottom={`1px solid #E0E0E0`}>
            <Typography>Category name</Typography>
            <Box
              width={519}
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
          <Stack
            height={77}
            direction={`row`}
            spacing={`16px`}
            alignItems={`center`}
            justifyContent={`flex-end`}
            p={`24px`}
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
