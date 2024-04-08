import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { CategoryModal } from "./CategoryModal";
import { EditModal } from "./EditModal";
import { ContextType, useFoodData } from "@/context/FoodContext";
type ObjType = {
  _id: string;
  name: string;
  __v: number;
};

export const SideBar = () => {
  const [categories, setCategories] = useState<Array<ObjType>>();
  const [categoryId, setCategoryID] = useState<string>();
  const [categoryName, setCategoryName] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { setCategory } = useFoodData() as ContextType;
  const open = Boolean(anchorEl);

  const handleSubmit = () => {
    setAnchorEl(null);
    fetch("http://localhost:4000/api/category", {
      method: "DELETE",
      body: JSON.stringify({
        id: categoryId,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:4000/api/category`);
      const json = await res.json();
      setCategories(json);
    }
    getData();
  }, []);

  return (
    <Stack
      py={`26px`}
      pr={`24px`}
      width={402}
      height={`fit-content`}
      alignItems={`flex-end`}
      bgcolor={`white`}
    >
      <Stack width={285}>
        <Typography fontSize={22} fontWeight={700} mb={`40px`}>
          Food menu
        </Typography>
        <Stack spacing={`26px`}>
          {categories?.map((val) => {
            return (
              <Stack
                onClick={() => setCategory(val.name)}
                key={val._id}
                direction={`row`}
                alignItems={`center`}
                justifyContent={`space-between`}
                borderRadius={`8px`}
                px={`16px`}
                border={`1px solid #D6D8DB`}
                height={40}
              >
                <Typography>{val.name}</Typography>
                <Stack
                  onClick={() => {
                    setCategoryID(val._id);
                    setCategoryName(val.name);
                  }}
                >
                  <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <EditModal currentName={categoryName} />
                    <MenuItem
                      sx={{
                        display: `flex`,
                        gap: `16px`,
                        color: `#DF1F29`,
                      }}
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      <DeleteOutlineOutlinedIcon sx={{ color: `#DF1F29` }} />
                      Delete Category
                    </MenuItem>
                  </Menu>
                </Stack>
              </Stack>
            );
          })}
          <CategoryModal />
        </Stack>
      </Stack>
    </Stack>
  );
};
