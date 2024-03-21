import { Stack, Typography } from "@mui/material";
import { Form } from "@/components/Signup/Form";

export const SignupForm = () => {
  return (
    <Stack
      borderRadius={`16px`}
      width={384}
      height={640}
      alignItems={`center`}
      p={`32px`}
    >
      <Typography fontSize={28} fontWeight={600} mb={5}>
        Бүртгүүлэх
      </Typography>
      <Form />
    </Stack>
  );
};
