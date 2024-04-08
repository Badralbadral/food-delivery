import { ContextType, useFoodData } from "@/context/FoodContext";
import {
  Button,
  CardMedia,
  CircularProgress,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
const CLOUD_NAME = "dlfnavahp";
const UPLOAD_PRESET = "zas8prdn";
export const AddImg = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { setImageUrl, imageUrl } = useFoodData() as ContextType;

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      setFile(event.target.files[0]);
    }
  };
  const uploadHandler = async () => {
    if (file) {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const resJson = await res.json();
      if (resJson.url) {
        setImageUrl(resJson.url);
      }
      setLoading(false);
    }
  };
  return (
    <>
      {loading && (
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Typography>Loading..</Typography>
          <CircularProgress />
        </Stack>
      )}
      <Stack
        position={`relative`}
        left={24}
        direction={`row`}
        spacing={3}
        alignItems={`center`}
      >
        <Stack>
          <Typography mb={`5px`}>Хоолны зураг</Typography>
          <Stack
            bgcolor={`#BABCC41F`}
            width={284}
            height={122}
            border={`1px solid #D6D7DC`}
            spacing={1}
            justifyContent={`center`}
            alignItems={`center`}
          >
            <Button
              component="label"
              sx={
                imageUrl === "null"
                  ? { color: `#525252`, fontWeight: 600 }
                  : { color: `#18BA51`, fontWeight: 600 }
              }
            >
              {imageUrl === "null" ? "Add image for the food" : "Ready to Add!"}
              <Input
                onChange={fileChangeHandler}
                id="img"
                sx={{ display: `none` }}
                type="file"
              />
            </Button>
            <Button
              onClick={uploadHandler}
              variant="contained"
              sx={{
                width: 114,
                height: 40,
                bgcolor: `#393939`,
                color: `white`,
                fontSize: 12,
                borderRadius: `8px`,
              }}
            >
              Add image
            </Button>
          </Stack>
        </Stack>
        <Stack width={230}>
          {imageUrl && (
            <CardMedia component={"img"} src={imageUrl} alt="uploaded" />
          )}
        </Stack>
      </Stack>
    </>
  );
};
