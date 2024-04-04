import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  styleForAddFoodModalBox,
  inputsForCreateFoodModal,
  MenuBtns,
} from "@/utils/dummy-data";
export const AddFoodModal = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = useState<any>();
  const handleChange = (e: string) => {
    setSelected(e);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const createFood = {
      foodName: e.target.fName.value,
      foodCategory: selected,
      ingedients: e.target.ing.value,
      price: e.target.price.value,
    };
    console.log("🚀 ~ handleSubmit ~ createFood:", createFood);
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
          <Stack spacing={2.3} py={3}>
            {inputsForCreateFoodModal.map((value) => {
              return (
                <Stack key={value.name} px={`24px`} spacing={`5px`}>
                  <Typography>{value.name}</Typography>
                  {value.name == "Хоолны ангилал" ? (
                    <TextField
                      select
                      sx={{ bgcolor: `#F4F4F4` }}
                      value={selected ?? ``}
                      label="Хоолны ангилал"
                    >
                      {MenuBtns.map((val) => {
                        return (
                          <MenuItem
                            onClick={() => handleChange(val)}
                            key={val}
                            value={val ?? ``}
                          >
                            {val}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  ) : (
                    <Box
                      height={56}
                      borderRadius={`8px`}
                      border={`none`}
                      bgcolor={`#F4F4F4`}
                      sx={{ outline: `none` }}
                      component={`input`}
                      placeholder={value.name}
                      px={`12px`}
                      fontSize={16}
                      name={value.eName}
                    ></Box>
                  )}
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
