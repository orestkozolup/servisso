import Link from "next/link";
import { Button } from "@mui/material";

export const ButtonLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <Button
        sx={{
          width: "100%",
          color: theme => theme.palette.primary.contrastText,
          textTransform: 'none',
          borderBottom: theme => `1px solid ${theme.palette.primary.contrastText}`,
          borderRadius: 0
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default ButtonLink;
