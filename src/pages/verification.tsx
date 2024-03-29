import { Stack } from "@mui/material";
import { CheckboxCont, SelectBox } from "@/components/Verification & Address";
import React from "react";

const Verification = () => {
  return (
    <Stack direction={`row`} mt={10} spacing={`180px`}>
      <Stack spacing={`24px`}>
        <CheckboxCont />
        <Stack border={`1px solid black`} width={432} height={612}>
          <SelectBox />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Verification;
