import { Button } from "@mui/material";

export const Close = ({ prop }: { prop: () => void }) => {
  return (
    <Button
      onClick={prop}
      variant="outlined"
      sx={{
        position: `absolute`,
        bottom: 100,
        left: 350,
        border: `none`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <mask
          id="mask0_1_1502"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <rect width={24} height={24} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_1502)">
          <path
            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    </Button>
  );
};