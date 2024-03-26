import { Button, Stack, useTheme } from "@mui/material";
import { MenuBtns } from "@/utils/dummy-data";
export const MenuBody = () => {
  const theme = useTheme();

  return (
    <Stack
      height={107}
      direction={`row`}
      alignItems={`center`}
      spacing={`26px`}
      mt={6}
    >
      {MenuBtns.map((val, index) => {
        return (
          <Button
            sx={{
              fontSize: 17,
              textTransform: `none`,
              borderRadius: `8px`,
              color: `black`,
              width: 280,
              height: 43,
              border: `1px solid #D6D8DB`,
              transitionDuration: `0.4s`,
              ":focus": {
                bgcolor: theme.palette.primary.main,
                color: `white`,
              },
            }}
            key={index}
          >
            {val}
          </Button>
        );
      })}
    </Stack>
  );
};
