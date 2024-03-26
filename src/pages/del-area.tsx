import { SaleSvg } from "@/svgs/Sale";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { Area } from "@/utils/dummy-data";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const DelArea = () => {
  const theme = useTheme();
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
        <Stack position={`relative`} left={19} width={540}>
          <Typography fontSize={20} fontWeight={590}>
            А бүс
          </Typography>
          <Divider sx={{ bgcolor: theme.palette.primary.main, my: `16px` }} />
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
        <Stack position={`relative`} left={19} width={540}>
          <Typography fontSize={20} fontWeight={590}>
            Б бүс
          </Typography>
          <Divider sx={{ bgcolor: theme.palette.primary.main, my: `16px` }} />
          <Stack spacing={`16px`}>
            {Area.map((val, index) => {
              return <Typography key={index}>{val}</Typography>;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default DelArea;
