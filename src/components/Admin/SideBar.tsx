import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuBtns } from "@/utils/dummy-data";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { CategoryModal } from "./CategoryModal";

export const SideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const options = ["Edit name", "Delete Category "];
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
          {MenuBtns.map((val) => {
            return (
              <Stack
                key={val}
                direction={`row`}
                alignItems={`center`}
                justifyContent={`space-between`}
                borderRadius={`8px`}
                px={`16px`}
                border={`1px solid #D6D8DB`}
                height={40}
              >
                <Typography>{val}</Typography>
                <Stack>
                  <IconButton
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    PaperProps={{
                      style: {
                        maxHeight: 48 * 4.5,
                        width: "200px",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        sx={
                          option == "Delete Category "
                            ? {
                                display: `flex`,
                                gap: `16px`,
                                color: `#DF1F29`,
                              }
                            : {
                                display: `flex`,
                                gap: `16px`,
                              }
                        }
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={() => setAnchorEl(null)}
                      >
                        {option == "Delete Category " ? (
                          <DeleteOutlineOutlinedIcon
                            sx={{ color: `#DF1F29` }}
                          />
                        ) : (
                          <EditOutlinedIcon sx={{ color: `#525252` }} />
                        )}
                        {option}
                      </MenuItem>
                    ))}
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
