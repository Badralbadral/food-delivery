import { Box, Stack, Typography } from "@mui/material";
import { History, Quit, Phone, Email, UserName, Edit } from "@/svgs";

export const UserInfo = () => {
  const bars = ["Таны нэр", "Утасны дугаар", "Имэйл хаяг"];
  const circles = ["Захиалгын түүх", "Гарах"];
  return (
    <Stack alignItems={`center`} mt={15} width={392} height={637}>
      <Box
        width={120}
        height={120}
        border={`1px solid black`}
        borderRadius={`50%`}
        component="img"
      ></Box>
      <Typography my={`24px`} fontSize={28} fontWeight={700}>
        Name
      </Typography>
      <Stack width={392} spacing={`16px`}>
        {bars.map((val, index) => {
          return (
            <Stack
              py={`8px`}
              px={`20px`}
              key={index}
              height={64}
              bgcolor={`#F6F6F6`}
              direction={`row`}
              alignItems={`center`}
              justifyContent={`space-between`}
              borderRadius={`4px`}
            >
              <Stack direction={`row`} alignItems={`center`} spacing={`8px`}>
                {val == "Таны нэр" ? (
                  <UserName />
                ) : val == "Утасны дугаар" ? (
                  <Phone />
                ) : (
                  <Email />
                )}
                <Stack>
                  <Typography color={`#888A99`} fontSize={12}>
                    {val}
                  </Typography>
                  <Typography>{val}</Typography>
                </Stack>
              </Stack>
              <Edit />
            </Stack>
          );
        })}
      </Stack>
      <Stack width={392} justifyContent={`flex-start`} ml={5} mt={`24px`}>
        {circles.map((val, index) => {
          return (
            <Stack
              key={index}
              direction={`row`}
              alignItems={`center`}
              spacing={`8px`}
              mb={`32px`}
            >
              {val == "Захиалгын түүх" ? <History /> : <Quit />}
              <Typography>{val}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
