import {
  Alert,
  Box,
  CircularProgress,
  Grow,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { Hide } from "@/svgs/HIde";
import { useState } from "react";
import { NewPassword, styleForInputBtn } from "@/utils/dummy-data";
import { useRouter } from "next/router";
export const StepTwo = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [load, setLoad] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const verification = {
      code: e.target.sixDigits.value,
      newPassword: e.target.password.value,
    };
    setLoad(true);
    const res = await fetch("http://localhost:4000/api/sendEmailForm", {
      method: "PUT",
      body: JSON.stringify(verification),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoad(false);
    if (data.verified) {
      setTimeout(() => router.push("/"), 4000);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setChecked(true);
      setTimeout(() => setChecked(false), 3000);
    }
  };
  const alert = (
    <Alert
      sx={{ width: 510, fontSize: 15, position: `absolute`, top: -47 }}
      severity="error"
    >
      Check your verfication code! Verfication code is does not match!
    </Alert>
  );
  const successAlert = (
    <Alert
      sx={{ width: 350, fontSize: 15, position: `absolute`, top: -37 }}
      severity="success"
    >
      Your password successfully changed
    </Alert>
  );
  return (
    <Stack position={`relative`}>
      <form onSubmit={handleSubmit}>
        <Grow in={checked}>{alert}</Grow>
        <Grow in={success}>{successAlert}</Grow>
        <Stack
          mt={7}
          borderRadius={`16px`}
          width={384}
          height={655}
          alignItems={`center`}
          p={`32px`}
        >
          <Typography fontSize={28} fontWeight={600} mb={4}>
            Нууц үг сэргээх
          </Typography>
          <Typography mb={4}>
            Таны{" "}
            <Box component={`span`} color={`#18BA51`}>
              example@pinecone.mn
            </Box>{" "}
            хаяг руу сэргээх код илгээх болно.{" "}
          </Typography>
          <Stack fontSize={14} component={"label"} mb={3.3}>
            Нууц үг сэргээх код
            <Stack
              mt={`7px`}
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
                sx={{ ":focus": { outline: "none" } }}
                type={`${hide ? "password" : "text"}`}
                name="sixDigits"
                border={`none`}
                bgcolor={`#F7F7F8`}
                height={32}
                component={"input"}
                placeholder="*********"
              ></Box>
              <Hide clickFunc={setHide} value={hide} />
            </Stack>
          </Stack>
          {NewPassword.map((val, index) => {
            return (
              <Stack key={index} fontSize={14} component={"label"} mb={`25px`}>
                {val.label}
                <Stack
                  mt={`7px`}
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
                    sx={{ ":focus": { outline: "none" } }}
                    type={`${hide ? "password" : "text"}`}
                    name={val.name}
                    border={`none`}
                    bgcolor={`#F7F7F8`}
                    component={"input"}
                    placeholder="*********"
                  ></Box>
                  <Hide clickFunc={setHide} value={hide} />
                </Stack>
              </Stack>
            );
          })}
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
            <CircularProgress />
          )}
        </Stack>
      </form>
    </Stack>
  );
};
