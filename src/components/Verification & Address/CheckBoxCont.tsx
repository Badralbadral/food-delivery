import { Checkbox, Stack, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export const CheckboxCont = () => {
  return (
    <Stack
      width={432}
      height={100}
      direction={`row`}
      alignItems={`center`}
      spacing={1}
    >
      <Checkbox
        size="large"
        icon={
          <RadioButtonUncheckedIcon
            sx={{ color: "#0468C8", fontSize: 46, strokeWidth: 1 }}
          />
        }
        checkedIcon={
          <RadioButtonCheckedIcon sx={{ color: "#0468C8", fontSize: 46 }} />
        }
      />
      <Stack>
        <Typography fontSize={14} color={`#8B8E95`}>
          Алхам 1
        </Typography>
        <Typography fontSize={20}>Хаягийн мэдээлэл оруулах</Typography>
        <Typography fontSize={16} color={`#0468C8`}>
          Хүлээгдэж байна
        </Typography>
      </Stack>
    </Stack>
  );
};
