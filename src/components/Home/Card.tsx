import { Stack, Typography } from "@mui/material";
type FoodType = {
  foodName: string;
  price: number;
  currency: string;
  salePrice: number;
};
export const Card = ({ title, data }: { title: string; data: FoodType[] }) => {
  return (
    <Stack bgcolor={`gray`} width={1200} height={344}>
      <Typography>{title}</Typography>
      <Typography>{data[0].foodName}</Typography>
    </Stack>
  );
};
