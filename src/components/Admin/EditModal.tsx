import { Box, Button, MenuItem, Modal, Stack, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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

export const EditModal = ({ currentName }: { currentName: string }) => {
  const [open, setOpen] = useState(false);
  const [cName, setCName] = useState<string>();
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const handleOnChange = (e: any) => {
    setNewCategoryName(e.target.value);
  };
  const handleSubmit = () => {
    const createCate = {
      name: cName,
      updateOne: newCategoryName,
    };
    fetch("http://localhost:4000/api/category", {
      method: "PUT",
      body: JSON.stringify(createCate),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <>
      <MenuItem
        sx={{
          display: `flex`,
          gap: `16px`,
        }}
        onClick={() => {
          setOpen(true);
          setCName(currentName);
        }}
      >
        <EditOutlinedIcon sx={{ color: `#525252` }} />
        Edit name
      </MenuItem>
      <Modal open={open}>
        <Box sx={style}>
          <Stack
            direction={`row`}
            height={64}
            alignItems={`center`}
            px={`24px`}
            borderBottom={`1px solid #E0E0E0`}
            spacing={14.4}
          >
            <CloseOutlinedIcon onClick={() => setOpen(false)} />
            <Typography fontSize={24} fontWeight={700}>
              Edit category name
            </Typography>
          </Stack>
          <Stack p={`24px`} spacing={`16px`} borderBottom={`1px solid #E0E0E0`}>
            <Typography>New category name</Typography>
            <Box
              value={newCategoryName}
              onChange={handleOnChange}
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
              onClick={() => setNewCategoryName("")}
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
              disabled={newCategoryName == "" ? true : false}
              onClick={() => handleSubmit()}
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
