import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import socials from "../../config/socials";
import Box from "../Box";
import Button from "../Button";
import Logo from "../Logo";
import NavLink from "../NavLink";
import Typography from "../Typography";
import Banner from "./Banner";

const Navbar = ({ pages, title }) => {
  const [showAlertBar, setShowAlertBar] = useState(true);

  const router = useRouter();

  const handleClose = () => setShowAlertBar(false);

  return (
    <Box
      fullWidth
      direction="column"
      shadow={1}
      position="sticky"
      margin="0px 0px 16px 0px"
    >
      {showAlertBar && (
        <Banner color="danger" grow={1}>
          <Typography variant="subtitle1" color="light" style={{ flexGrow: 1 }}>
            Covid help
          </Typography>
          <Button onClick={handleClose} color="light" variant="text">
            <i className="fas fa-times"></i>
          </Button>
        </Banner>
      )}
      <Banner color="primary" grow={1}>
        <Typography variant="body" color="light" style={{ flexGrow: 1 }}>
          (314) 724 0839
        </Typography>
        <Box
          direction="row"
          align="center"
          justify="space-evenly"
          color="primary"
          margin="0px 8px"
        >
          {socials.map(({ name, url }) => {
            return (
              <NextLink href={url} target="_blank" key={name}>
                <i
                  style={{ margin: 8, color: "white" }}
                  className={`fab fa-${name}`}
                ></i>
              </NextLink>
            );
          })}
        </Box>
      </Banner>
      <Box
        direction="row"
        height={100}
        fullWidth
        align="center"
        justify="space-evenly"
        margin="0px 8px"
        grow={2}
      >
        <Logo size="big" />
        <Box grow={1} justify="flex-start">
          {pages.map((page) => {
            return (
              <>
                <Link key={page.title} href={page.url}>
                <NavLink
                  selected={router.pathname === page.url}
                  size="large"
                  button
                  href={page.url || "/"}
                  variant={page.variant || "text"}
                  color={page.color || "primary"}
                >
                  {page.title}
                </NavLink>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
