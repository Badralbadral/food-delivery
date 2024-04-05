import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { styleForAddFoodModalBox } from "@/utils/dummy-data";
import { Inputs } from "./Inputs";
export const AddFoodModal = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const createFood = {
      foodName: e.target.fName.value,
      foodCategory: selected,
      ingedients: e.target.ing.value,
      price: e.target.price.value,
      sale: e.target.sale.value,
    };
    console.log("🚀 ~ handleSubmit ~ createFood:", createFood);
    fetch("http://localhost:4000/api/food", {
      method: "POST",
      body: JSON.stringify(createFood),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          width: 130,
          bgcolor: `#18BA51`,
          color: `white`,
          textTransform: `none`,
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        Add new food
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={styleForAddFoodModalBox}
        >
          <Stack
            direction={`row`}
            height={64}
            alignItems={`center`}
            px={`24px`}
            borderBottom={`1px solid #E0E0E0`}
            spacing={21.2}
          >
            <CloseOutlinedIcon onClick={() => setOpen(false)} />
            <Typography fontSize={24} fontWeight={700}>
              Create food
            </Typography>
          </Stack>
          <Inputs selected={selected} setFunc={setSelected} />
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
              type="reset"
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
              type="submit"
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
