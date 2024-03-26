import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { Hide } from "@/svgs/HIde";
import { useState } from "react";
import { useRouter } from "next/router";
import { UserInfo } from "../UserInfo";

export const LoginForm = () => {
  const [hide, setHide] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const login = {
      email: e.target.email.value,
      password: e.target.password.value,
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
    <UserInfo />
    // <Stack
    //   borderRadius={`16px`}
    //   width={384}
    //   height={455}
    //   alignItems={`center`}
    //   p={`32px`}
    // >
    //   <Typography fontSize={28} fontWeight={600} mb={5}>
    //     Нэвтрэх
    //   </Typography>
    //   <form onSubmit={handleSubmit}>
    //     <Stack fontSize={14} component={"label"} mb={`25px`}>
    //       Имэйл
    //       <Box
    //         sx={{ ":focus": { outline: "none" } }}
    //         type="email"
    //         name="email"
    //         mt={`4px`}
    //         borderRadius={`4px`}
    //         border={`1px solid`}
    //         borderColor={`#ECEDF0`}
    //         bgcolor={`#F7F7F8`}
    //         width={320}
    //         height={32}
    //         py={`16px`}
    //         px={2}
    //         component={"input"}
    //         placeholder="Имэйл хаягаа оруулна уу"
    //       ></Box>
    //     </Stack>
    //     <Stack fontSize={14} component={"label"}>
    //       Нууц үг
    //       <Stack
    //         mt={`4px`}
    //         borderRadius={`4px`}
    //         border={`1px solid`}
    //         borderColor={`#ECEDF0`}
    //         bgcolor={`#F7F7F8`}
    //         width={320}
    //         height={32}
    //         px={2}
    //         direction={`row`}
    //         alignItems={`center`}
    //         justifyContent={`space-between`}
    //       >
    //         <Box
    //           sx={{ ":focus": { outline: "none" } }}
    //           type={`${hide ? "password" : "text"}`}
    //           name="password"
    //           border={`none`}
    //           bgcolor={`transparent`}
    //           height={32}
    //           component={"input"}
    //           placeholder="Нууц үг"
    //           width={250}
    //         ></Box>
    //         <Hide clickFunc={setHide} value={hide} />
    //       </Stack>
    //     </Stack>
    //     <Button
    //       href="/forgot-pass"
    //       sx={{
    //         color: `#3F4145`,
    //         position: `relative`,
    //         bottom: 12,
    //         left: 200,
    //         fontSize: 11,
    //         mt: 2,
    //       }}
    //     >
    //       Нууц үг сэргээх
    //     </Button>
    //     <Stack alignItems={`center`} spacing={`25px`}>
    //       <Input
    //         disableUnderline
    //         type="submit"
    //         value={"Нэвтрэх"}
    //         style={styleForInputBtn}
    //       />
    //       <Typography fontSize={14}>Эсвэл</Typography>
    //       <Button
    //         sx={{
    //           height: 32,
    //           width: 320,
    //           fontSize: 11,
    //           bgcolor: `white`,
    //           boxShadow: `none`,
    //           border: `1px solid #18BA51`,
    //           py: `19px`,
    //           color: `#272727`,
    //         }}
    //         variant="contained"
    //         onClick={() => router.push("/signup")}
    //       >
    //         Бүртгүүлэх
    //       </Button>
    //     </Stack>
    //   </form>
    // </Stack>
  );
};
