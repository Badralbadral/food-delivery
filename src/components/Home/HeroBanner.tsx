import { BackPattern } from "@/svgs/BackPattern";
import { Box, Stack, Typography } from "@mui/material";

export const HeroBanner = () => {
  return (
    <Stack height={788}>
      <BackPattern size={710} />
      <Stack
        pt={11}
        width={1440}
        height={788}
        bgcolor={`#18BA51`}
        mb={10}
        color={`white`}
        direction={`row`}
        alignItems={`center`}
      >
        <Stack spacing={`23px`} px={`120px`}>
          <Typography
            fontSize={55}
            fontWeight={600}
            width={400}
            lineHeight={`90%`}
          >
            Pinecone Food delivery
          </Typography>
          <Box borderBottom={`1px solid white`}></Box>
          <Typography fontSize={22} fontWeight={700} width={400}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
