import { BackPattern } from "@/svgs/BackPattern";
import { Box, Stack, Typography } from "@mui/material";

export const HeroBanner = () => {
  return (
    <Stack height={788}>
      <BackPattern size={780} />
      <Stack
        width={1440}
        height={788}
        bgcolor={`#18BA51`}
        color={`white`}
        direction={`row`}
        alignItems={`center`}
        spacing={10}
      >
        <Stack spacing={`23px`} px={`120px`}>
          <Typography
            fontSize={55}
            fontWeight={700}
            width={400}
            lineHeight={`90%`}
          >
            Pinecone Food delivery
          </Typography>
          <Box borderBottom={`1px solid white`}></Box>
          <Typography fontSize={22} fontWeight={500} width={400}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Stack position={`relative`} direction={`row`} alignItems={`flex-end`}>
          <Box component="img" width={438} height={433} src="image13.png" />
          <Box
            component="img"
            width={313}
            height={313}
            src="image14.png"
            position={`relative`}
            right={160}
            bottom={10}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
