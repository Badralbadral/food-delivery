import {
  Alert,
  Box,
  CircularProgress,
  Grow,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useState } from "react";
import { styleForInputBtn } from "@/utils/dummy-data";

export const StepOne = () => {
  const router = useRouter();
  const [load, setLoad] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const Email = {
      email: e.target.email.value,
      key: nanoid(6),
    };
    setLoad(true);
    const res = await fetch("http://localhost:4000/api/sendEmailForm", {
      method: "POST",
      body: JSON.stringify(Email),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    setLoad(false);
    const data = await res.json();
    if (data.verified) {
      router.push("/step-two");
      setChecked(false);
    } else {
      setChecked(true);
      setTimeout(() => setChecked(false), 3000);
    }
  };
  const alert = (
    <Alert
      sx={{ width: 400, fontSize: 15, position: `absolute`, top: -41 }}
      severity="error"
    >
      Check your email! Yout email is does not match!
    </Alert>
  );
  return (
    <Stack position={`relative`}>
      <Grow in={checked}>{alert}</Grow>
      <Stack
        borderRadius={`16px`}
        width={384}
        height={455}
        alignItems={`center`}
        p={`32px`}
        mt={4}
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
              required
            ></Box>
          </Stack>
          {load == false ? (
            <Stack alignItems={`center`} spacing={`25px`}>
              <Input
                disableUnderline
                type="submit"
                value={"Үргэлжлүүлэх"}
                style={styleForInputBtn}
              />
            </Stack>
          ) : (
            <Box
              sx={{
                display: "flex",
                position: `relative`,
                left: 135,
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </form>
      </Stack>
    </Stack>
  );
};
