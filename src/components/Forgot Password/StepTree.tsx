import { Box, Input, Stack, Typography } from "@mui/material";
import { Hide } from "@/svgs/HIde";

export const StepTree = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const login = {
      password: e.target.password.value,
      rePassword: e.target.rePassword.value,
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
        Шинэ нууц үг зохиох
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack fontSize={14} component={"label"} mb={`25px`}>
          Нууц үг
          <Stack
            mt={`4px`}
            borderRadius={`4px`}
            border={`1px solid`}
            borderColor={`#ECEDF0`}
            bgcolor={`#F7F7F8`}
            width={320}
            height={32}
            px={2}
            direction={`row`}
            alignItems={`center`}
            justifyContent={`space-between`}
          >
            <Box
              name="password"
              border={`none`}
              bgcolor={`#F7F7F8`}
              height={32}
              component={"input"}
              placeholder="*********"
            ></Box>
            <Hide />
          </Stack>
        </Stack>
        <Stack fontSize={14} component={"label"} mb={`25px`}>
          Нууц үг давтах
          <Stack
            mt={`4px`}
            borderRadius={`4px`}
            border={`1px solid`}
            borderColor={`#ECEDF0`}
            bgcolor={`#F7F7F8`}
            width={320}
            height={32}
            px={2}
            direction={`row`}
            alignItems={`center`}
            justifyContent={`space-between`}
          >
            <Box
              name="rePassword"
              border={`none`}
              bgcolor={`#F7F7F8`}
              height={32}
              component={"input"}
              placeholder="*********"
            ></Box>
            <Hide />
          </Stack>
        </Stack>
        <Stack alignItems={`center`} spacing={`25px`}>
          <Input
            type="submit"
            value={"Үргэлжлүүлэх"}
            style={styleForInputBtn}
          />
        </Stack>
      </form>
    </Stack>
  );
};
