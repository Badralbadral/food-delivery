import { Hide } from "@/svgs/HIde";
import { Box, Checkbox, Input, Stack } from "@mui/material";
import { useState } from "react";
import { Inputs, passwords } from "@/utils/dummy-data";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Form = () => {
  const [hide, setHide] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const login = {
      name: e.target.Нэр.value,
      email: e.target.Имэйл.value,
      address: e.target.Хаяг.value,
      passwords: e.target.password.value,
      rePasswords: e.target.rePassword.value,
    };
    fetch("http://localhost:4000/api/signup", {
      method: "POST",
      body: JSON.stringify(login),
      mode: `no-cors`,
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
      {Inputs.map((val, index) => {
        return (
          <Stack key={index} fontSize={14} component={"label"} mb={`25px`}>
            {val.label}
            <Box
              sx={{ ":focus": { outline: "none" } }}
              type={val.label == "Имэйл" ? "email" : "text"}
              name={val.label}
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
              placeholder={val.placeholder}
            ></Box>
          </Stack>
        );
      })}
      {passwords.map((val, index) => {
        return (
          <Stack key={index} fontSize={14} component={"label"} mb={`25px`}>
            {val.label}
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
                name={val.name}
                border={`none`}
                bgcolor={`#F7F7F8`}
                height={32}
                component={"input"}
                placeholder={val.placeholder}
                width={250}
              ></Box>
              <Hide clickFunc={setHide} value={hide} />
            </Stack>
          </Stack>
        );
      })}
      <Stack
        direction={`row`}
        alignItems={`center`}
        component={"label"}
        fontSize={14}
        mb={`25px`}
      >
        <Checkbox {...label} />
        Үйлчилгээний нөхцөл зөвшөөрөх
      </Stack>
      <Stack alignItems={`center`} spacing={`25px`}>
        <Input
          disableUnderline
          type="submit"
          value={" Бүртгүүлэх"}
          style={styleForInputBtn}
        />
      </Stack>
    </form>
  );
};
