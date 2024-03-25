import { Box, Input, Stack, Typography } from "@mui/material";

export const StepOne = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const login = {
      email: e.target.email.value,
    };
    console.log("🚀 ~ handleSubmit ~ login:", login);
  };

  const styleForInputBtn = {
    height: 32,
    width: 320,
    fontSize: 14,
    backgroundColor: `#18BA51`,
    boxShadow: `none`,
    py: `19px`,
    color: `white`,
    borderRadius: 4,
  };
  return (
    <Stack
      borderRadius={`16px`}
      width={384}
      height={455}
      alignItems={`center`}
      p={`32px`}
    >
      <Typography fontSize={28} fontWeight={600} mb={5}>
        Нууц үг сэргээх
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack fontSize={14} component={"label"} mb={`25px`}>
          Имэйл
          <Box
            sx={{ ":focus": { outline: "none" } }}
            name="email"
            mt={`4px`}
            borderRadius={`4px`}
            border={`1px solid`}
            borderColor={`#ECEDF0`}
            bgcolor={`#F7F7F8`}
            width={320}
            height={32}
            py={`16px`}
            px={2}
            component={"input"}
            placeholder="Имэйл хаягаа оруулна уу"
          ></Box>
        </Stack>
        <Stack alignItems={`center`} spacing={`25px`}>
          <Input
            disableUnderline
            type="submit"
            value={"Үргэлжлүүлэх"}
            style={styleForInputBtn}
          />
        </Stack>
      </form>
    </Stack>
  );
};
