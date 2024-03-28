import { Stack } from "@mui/material";
import { SaleCard } from "@/components/Home/index";
import { Card } from "./Cards";
import foodData from "@/dummy.json";

export const FoodCards = () => {
  const cards = [
    { title: "Үндсэн хоол", cate: "Main Course" },
    { title: "Салад ба зууш", cate: "Salads and Appetizers" },
    { title: "Амттан", cate: "Dessert" },
  ];
  return (
    <Stack spacing={`96px`}>
      <SaleCard
        title=" Хямдралтай"
        data={foodData.filter((val) => {
          return val.sale > 0;
        })}
      />
      {cards.map((e, index) => {
        return (
          <Card
            key={index}
            title={e.title}
            data={foodData.filter((val) => {
              return val.category == e.cate && val.sale == 0;
            })}
          />
        );
      })}
    </Stack>
  );
};
