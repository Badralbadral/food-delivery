import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
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
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <form>
      <Button
        onClick={() => setOpen(true)}
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
        onClose={() => setOpen(false)}
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
            spacing={21.2}
          >
            <CloseOutlinedIcon onClick={() => setOpen(false)} />
            <Typography fontSize={24} fontWeight={700}>
              Create food
            </Typography>
          </Stack>
          <Stack spacing={2.3} py={3}>
            {inputsForCreateFoodModal.map((val) => {
              return (
                <Stack key={val} px={`24px`} spacing={`5px`}>
                  <Typography>{val}</Typography>
                  {val == "Хоолны ангилал" ? (
                    <FormControl fullWidth>
                      <Select
                        sx={{ bgcolor: `#F4F4F4` }}
                        value={age}
                        onChange={handleChange}
                      >
                        {MenuBtns.map((val) => {
                          return (
                            <MenuItem key={val} value={10}>
                              {val}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  ) : (
                    <Box
                      height={56}
                      borderRadius={`8px`}
                      border={`none`}
                      bgcolor={`#F4F4F4`}
                      sx={{ outline: `none` }}
                      component={`input`}
                      placeholder={val}
                      px={`12px`}
                      fontSize={16}
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
    </form>
  );
};
