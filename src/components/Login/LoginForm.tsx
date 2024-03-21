import { Box, Button, Stack, Typography } from "@mui/material";
import { Hide } from "@/svgs/HIde";

export const LoginForm = () => {
  return (
    <Stack
      borderRadius={`16px`}
      width={384}
      height={455}
      alignItems={`center`}
      p={`32px`}
    >
      <Typography fontSize={28} fontWeight={600} mb={5}>
        Нэвтрэх
      </Typography>
      <Stack spacing={`25px`}>
        <Stack fontSize={14} component={"label"}>
          Имэйл
          <Box
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
        <Stack fontSize={14} component={"label"}>
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
              border={`none`}
              bgcolor={`#F7F7F8`}
              height={32}
              component={"input"}
              placeholder="Нууц үг"
            ></Box>
            <Hide />
          </Stack>
        </Stack>
        <Typography
          bottom={12}
          position={`relative`}
          left={`210px`}
          fontSize={`14px`}
          color={`#3F4145`}
        >
          Нууц үг сэргээх
        </Typography>
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
          >
            Нэвтрэх
          </Button>
          <Typography fontSize={14}>Эсвэл</Typography>
          <Button
            sx={{
              height: 32,
              width: 320,
              fontSize: 11,
              bgcolor: `white`,
              boxShadow: `none`,
              border: `1px solid #18BA51`,
              py: `19px`,
              color: `#272727`,
            }}
            variant="contained"
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
