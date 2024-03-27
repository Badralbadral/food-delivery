import { SaleSvg } from "@/svgs/Sale";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { Area } from "@/utils/dummy-data";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const DelArea = () => {
  const theme = useTheme();
  const area = ["А бүс", " Б бүс"];
  return (
    <Stack>
      <Box mt={`61px`} mb={`50px`}>
        <Map />
      </Box>
      <Stack
        mb={`78px`}
        direction={`row`}
        alignItems={`center`}
        spacing={1}
        position={`relative`}
        left={19}
      >
        <SaleSvg />
        <Typography fontWeight={700} fontSize={22}>
          Хүргэлтийн бүс дэх хаягууд
        </Typography>
      </Stack>
      <Stack direction={`row`} spacing={`72px`}>
        {area.map((val, index) => {
          return (
            <Stack key={index} position={`relative`} left={19} width={540}>
              <Typography fontSize={20} fontWeight={590}>
                {val}
              </Typography>
              <Divider
                sx={{ bgcolor: theme.palette.primary.main, my: `16px` }}
              />
              <Stack direction={`row`} spacing={20}>
                <Stack spacing={`16px`}>
                  {Area.map((val, index) => {
                    return (
                      <Typography fontWeight={400} key={index}>
                        {val}
                      </Typography>
                    );
                  })}
                </Stack>
                <Stack spacing={`16px`}>
                  {Area.map((val, index) => {
                    return (
                      <Typography fontWeight={400} key={index}>
                        {val}
                      </Typography>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
export default DelArea;
