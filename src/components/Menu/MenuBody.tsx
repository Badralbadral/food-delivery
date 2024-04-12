import { Button, Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuCards } from "./MenuCards";
import { FoodsDataType } from "@/types/FoodsDataType";
type ObjType = {
  _id: string;
  name: string;
  __v: number;
};
export const MenuBody = () => {
  const theme = useTheme();
  const [category, setCategory] = useState("Breakfast");
  const [categories, setCategories] = useState<Array<ObjType>>();
  const [foods, setFoods] = useState<Array<FoodsDataType>>();
  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:4000/api/category`);
      const json = await res.json();
      setCategories(json);
    }
    getData();
  }, []);
  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:4000/api/food`);
      const json = await res.json();
      setFoods(json);
    }
    getData();
  }, []);
  return (
    <Stack
      height={`fit-content`}
      alignItems={`center`}
      spacing={`26px`}
      mt={12}
    >
      <Stack direction={`row`} spacing={3}>
        {categories?.map((val, index) => {
          return (
            <Button
              onClick={() => setCategory(val.name)}
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
              {val.name}
            </Button>
          );
        })}
      </Stack>
      <Stack>
        <MenuCards
          data={foods?.filter((val) => {
            return val.foodCategory == category;
          })}
        />
      </Stack>
    </Stack>
  );
};
