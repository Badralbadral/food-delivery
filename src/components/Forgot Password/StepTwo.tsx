import { Box, Input, Stack, Typography } from "@mui/material";
import { Hide } from "@/svgs/HIde";
import { useState } from "react";
import { StepTree } from "./StepTree";

export const StepTwo = () => {
  const [hide, setHide] = useState<boolean>(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const verification = {
      code: e.target.sixDigits.value,
      newPassword: e.target.password.value,
      rePassword: e.target.rePassword.value,
    };
    console.log("🚀 ~ handleSubmit ~ verification:", verification);
    fetch("http://localhost:4000/api/sendEmailForm", {
      method: "PUT",
      body: JSON.stringify(verification),
      headers: { "Content-Type": "application/json" },
    });
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
    <form onSubmit={handleSubmit}>
      <Stack
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
        <Stack fontSize={14} component={"label"} mb={5}>
          Нууц үг сэргээх код
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

        <Stack alignItems={`center`} spacing={`25px`}>
          <Input
            disableUnderline
            type="submit"
            value={"Үргэлжлүүлэх"}
            style={styleForInputBtn}
          />
        </Stack>
        <StepTree />
      </Stack>
    </form>
  );
};
