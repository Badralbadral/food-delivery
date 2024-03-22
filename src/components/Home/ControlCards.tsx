import { Stack, Typography } from "@mui/material";
import { controlCards } from "@/utils/dummy-Data";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export const ControlCards = () => {
  return (
    <Stack
      width={1200}
      height={155}
      direction={`row`}
      justifyContent={`center`}
      alignItems={`center`}
      spacing={`47px`}
    >
      {controlCards?.map((val, index) => {
        return (
          <Stack
            key={index}
            width={264.7}
            height={145}
            pt={`25px`}
            px={`16px`}
            borderRadius={`16px`}
            boxShadow={"4px 4px 12px 0px rgba(0, 0, 0, 0.10)"}
            border={`1px solid #D6D8DB`}
          >
            <Stack color={`#18BA51`} mb={3} ml={`5px`}>
              {index == 0 ? (
                <AutoStoriesOutlinedIcon sx={{ fontSize: 30 }} />
              ) : index == 1 ? (
                <WatchLaterOutlinedIcon sx={{ fontSize: 30 }} />
              ) : index == 2 ? (
                <SpaOutlinedIcon sx={{ fontSize: 30 }} />
              ) : (
                <MenuBookOutlinedIcon sx={{ fontSize: 30 }} />
              )}
            </Stack>
            <Stack>
              <Typography fontSize={18} fontWeight={700}>
                {val.title}
              </Typography>
              <Typography color={`gray`} fontSize={14}>
                {val.desc}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
