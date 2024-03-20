import { LogoWhite } from "@/svgs/LogoWhite";
import { Box, Button, Divider, Stack } from "@mui/material";

const pages = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];
export const Footer = () => {
  return (
    <Stack
      bgcolor={`#18BA51`}
      width={1440}
      height={545}
      color={`white`}
      alignItems={"center"}
      py={`114px`}
      px={`120px`}
      spacing={`45px`}
    >
      <Stack direction={`row`} alignItems={"center"} spacing={2}>
        <LogoWhite />
        <Box component={"p"} fontSize={20} fontWeight={700}>
          Food Delivery
        </Box>
      </Stack>
      <Stack direction={`row`} fontSize={16} fontWeight={590} spacing={`71px`}>
        {pages.map((val, index) => {
          return (
            <Button
              sx={{
                color: "white",
                textDecoration: "underline",
              }}
              key={index}
              href="/"
            >
              {val}
            </Button>
          );
        })}
      </Stack>
      <Stack>icons</Stack>
      <Divider />
      <Stack textAlign={"center"}>
        <Box component={"p"}>© 2024 Pinecone Foods LLC </Box>
        <Box component={"p"}>Зохиогчийн эрх хуулиар хамгаалагдсан.</Box>
      </Stack>
    </Stack>
  );
};
