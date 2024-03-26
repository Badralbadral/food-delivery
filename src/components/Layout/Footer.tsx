import { LogoWhite } from "@/svgs/LogoWhite";
import { BackPattern } from "@/svgs/BackPattern";
import { Box, Button, Stack, Typography } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const pages = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

const styleForButton = {
  fontSize: `40px`,
};

export const Footer = () => {
  return (
    <Stack position={`relative`} mt={`82px`}>
      <BackPattern size={555} />
      <Stack
        bgcolor={`#18BA51`}
        width={`100%`}
        height={545}
        color={`white`}
        alignItems={"center"}
        py={`114px`}
        px={`120px`}
        spacing={`45px`}
      >
        <Stack direction={`row`} alignItems={"center"} spacing={`11px`}>
          <LogoWhite />
          <Box component={"p"} fontSize={20} fontWeight={700}>
            Food Delivery
          </Box>
        </Stack>
        <Stack direction={`row`} fontWeight={590} spacing={`81px`}>
          {pages.map((val, index) => {
            return (
              <Button
                sx={{
                  fontSize: 16,
                  textTransform: `none`,
                  color: "white",
                  textDecoration: "underline",
                  textUnderlineOffset: `4px`,
                }}
                key={index}
                href={
                  val == "Нүүр"
                    ? "/"
                    : val == "Хоолны цэс"
                    ? "/menu"
                    : val == "Үйлчилгээний нөхцөл"
                    ? "/terms"
                    : val == "Хүргэлтийн бүс"
                    ? "/del-area"
                    : "/privacy-policy"
                }
              >
                {val}
              </Button>
            );
          })}
        </Stack>
        <Stack direction={`row`} spacing={`10px`}>
          <FacebookTwoToneIcon style={styleForButton} />
          <InstagramIcon style={styleForButton} />
          <TwitterIcon style={styleForButton} />
        </Stack>
        <Box borderBottom={1} borderColor={`white`} width={1210}></Box>
        <Stack textAlign={"center"} spacing={`5px`}>
          <Typography>© 2024 Pinecone Foods LLC </Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
