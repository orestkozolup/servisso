import Link from "next/link";
import { Button } from "@mui/material";

export const ButtonLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <Button>{label}</Button>
    </Link>
  );
};

export default ButtonLink;
