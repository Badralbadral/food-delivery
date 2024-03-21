import { Hide } from "@/svgs/HIde";
import { Box, Button, Checkbox, FormControl, Stack } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Inputs = [
  { label: "Нэр", placeholder: "Нэрээ оруулна уу" },
  { label: "И-мэйл", placeholder: "И-мэйл хаягаа оруулна уу" },
  { label: "Хаяг", placeholder: "Та хаягаа оруулна уу" },
];
const passwords = [
  { label: "Нууц үг", placeholder: "Нууц үгээ оруулна уу" },
  { label: "Нууц үг давтах", placeholder: "Нууц үгээ оруулна уу" },
];
export const Form = () => {
  const handleSubmit = ({ e }: any) => {
    e.preventDefault();
    const login = {
      name: e.target.Нэр.value,
      email: e.target.email.value,
      address: e.target.Хаяг.value,
    };
    console.log(login);
  };
  return (
    <Stack onSubmit={handleSubmit} spacing={`25px`}>
      {Inputs.map((val, index) => {
        return (
          <FormControl key={index}>
            <Stack htmlFor={`${val.label}`} fontSize={14} component={"label"}>
              {val.label}
              <Box
                mt={`4px`}
                borderRadius={`4px`}
                border={`1px solid`}
                borderColor={`#ECEDF0`}
                bgcolor={`#F7F7F8`}
                height={32}
                py={`16px`}
                px={2}
                component={"input"}
                required
                placeholder={`${val.placeholder}`}
                name={`${val.label}`}
                id={`${val.label}`}
              ></Box>
            </Stack>
          </FormControl>
        );
      })}
      {passwords.map((val, index) => {
        return (
          <FormControl key={index}>
            <Stack htmlFor={`${val.label}`} fontSize={14} component={"label"}>
              {val.label}
              <Stack
                mt={`4px`}
                borderRadius={`4px`}
                border={`1px solid`}
                borderColor={`#ECEDF0`}
                bgcolor={`#F7F7F8`}
                height={32}
                px={2}
                direction={`row`}
                alignItems={`center`}
                justifyContent={`space-between`}
              >
                <Box
                  border={`none`}
                  bgcolor={`#F7F7F8`}
                  width={240}
                  height={32}
                  component={"input"}
                  placeholder={`${val.placeholder}`}
                  required
                  name={`${val.label}`}
                  id={`${val.label}`}
                ></Box>
                <Hide />
              </Stack>
            </Stack>
          </FormControl>
        );
      })}
      <Stack
        direction={`row`}
        alignItems={`center`}
        component={"label"}
        fontSize={14}
      >
        <Checkbox {...label} />
        Үйлчилгээний нөхцөл зөвшөөрөх
      </Stack>
      <Stack alignItems={`center`} spacing={`25px`}>
        <Button
          sx={{
            height: 32,
            width: 320,
            fontSize: 11,
            bgcolor: `#18BA51`,
            boxShadow: `none`,
            py: `19px`,
          }}
          variant="contained"
          type="submit"
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
