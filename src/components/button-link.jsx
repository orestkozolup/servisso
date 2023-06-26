import Link from "next/link";
import { Button } from "@mui/material";

export const ButtonLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <Button
        sx={{
          width: "100%",
          color: theme => theme.palette.primary.contrastText
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default ButtonLink;
