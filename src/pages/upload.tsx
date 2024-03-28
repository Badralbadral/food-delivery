import { Button, Input, Stack } from "@mui/material";

const Upload = () => {
  return (
    <Stack mt={10} bgcolor={`#F6F6F6`} p={10} spacing={2}>
      <Input type="file" />
      <Button sx={{ color: `black`, border: `1px solid black` }}>upload</Button>
    </Stack>
  );
};
export default Upload;
