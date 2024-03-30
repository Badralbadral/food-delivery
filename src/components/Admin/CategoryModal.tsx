import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const handleCreateCategory = (e: any) => {
    setNewCategoryName(e.target.value);
  };

  const onButtonClick = () => {
    setNewCategoryName("");
  };
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
        onClick={() => setOpen(true)}
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
            <CloseOutlinedIcon onClick={() => setOpen(false)} />
            <Typography fontSize={24} fontWeight={700}>
              Create new category
            </Typography>
          </Stack>
          <Stack p={`24px`} spacing={`16px`} borderBottom={`1px solid #E0E0E0`}>
            <Typography>Category name</Typography>
            <Box
              value={newCategoryName}
              onChange={handleCreateCategory}
              height={56}
              borderRadius={`8px`}
              border={`none`}
              bgcolor={`#F4F4F4`}
              sx={{ outline: `none` }}
              component={`input`}
              placeholder="Name"
              px={`12px`}
              fontSize={16}
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
              onClick={() => onButtonClick()}
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
              onClick={() => console.log(newCategoryName)}
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
