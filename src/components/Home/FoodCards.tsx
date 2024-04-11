import { Stack } from "@mui/material";
import { SaleCard } from "@/components/Home/index";
import { Card } from "./Cards";
import { useEffect, useState } from "react";
import { FoodsDataType } from "@/types/FoodsDataType";

export const FoodCards = () => {
  const cards = [
    { title: "Үндсэн хоол", cate: "Main Course" },
    { title: "Салад ба зууш", cate: "Salads and Appetizers" },
    { title: "Амттан", cate: "Dessert" },
  ];
  const [foods, setFoods] = useState<Array<FoodsDataType> | undefined>();
  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:4000/api/food`);
      const json = await res.json();
      setFoods(json);
    }
    getData();
  }, []);
  return (
    <Stack spacing={`96px`}>
      <SaleCard
        title=" Хямдралтай"
        data={foods?.filter((val) => {
          return val.sale && val.sale > 0;
        })}
      />
      {cards.map((e, index) => {
        return (
          <Card
            key={index}
            title={e.title}
            data={foods?.filter((val) => {
              return val.foodCategory == e.cate && val.sale == 0;
            })}
          />
        );
      })}
    </Stack>
  );
};
