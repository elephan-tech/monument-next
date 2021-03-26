import Link from "next/link";
import Box from "../box";
import Logo from "../Logo";
import Typography from "../typography";
import TopBar from "./TopBar";

const Navbar = ({ pages }) => {
  console.log({ pages });
  return (
    <Box fullWidth direction="column">
      <TopBar />
      <Box direction="row" height={100} fullWidth>
        <Logo size="big" />
        <Box grow={1} height={100}>
          {pages.map((page) => {
            return (
              <Typography variant="button">
                <Link key={page.title} href={page.url}>
                  {page.title}
                </Link>
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
