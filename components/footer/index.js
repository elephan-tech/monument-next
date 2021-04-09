import { Heading, Link } from "@components";
import Typography from "@material-ui/core/Typography";
import Banner from "components/Banner";
import Image from "next/image";
import React from "react";
import { joinClasses } from "utils/styleUtils";
import { monumentData, pages, socials } from "../../config";
import useStyles from "./styles";

function Copyright({ website }) {
  return (
    <Typography variant="body2" color="inherit">
      {"Copyright © " + new Date().getFullYear() + " - All Rights Reserved - "}
      <Link color="inherit" slim href="/" component="span">
        {website || "company"}
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const { footer, row, column, child, noPadding } = useStyles();

  return (
    <>
      <footer className={joinClasses([footer, row])}>
        <div className={column}>
          <Link href="/" component="div">
            <Image
              src="/images/monument_logo-short.png"
              alt="Monument Academy Logo"
              width={300}
              height={400}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
                position: "relative",
              }}
            />
          </Link>
        </div>
        <div className={column}>
          <Heading variant="h4" color="inherit" decoration="light">
            About Us
          </Heading>
          <Typography variant="subtitle1">
            Monument Academy is a weekday boarding school serving students in
            Washington, DC. Our mission is to provide students, particularly
            those who have had or might have contact with the foster care
            system, with the requisite academic, social, emotional, and life
            skills to be successful in college, career, and community, and to
            create an outstanding school that attracts, supports, and retains
            exceptional and caring people.
          </Typography>
        </div>
        <div className={joinClasses([column, child])}>
          <div className={joinClasses([column, noPadding])}>
            <Typography variant="h4">contact us</Typography>

            <div></div>
            <Typography variant="subtitle1">{monumentData.address}</Typography>
            <Typography variant="subtitle1">
              {monumentData.phoneNumber}
            </Typography>
            <Typography variant="subtitle1">Fax: {monumentData.fax}</Typography>
          </div>
          <div className={joinClasses([column, noPadding])}>
            <Typography variant="h4">Quick Links</Typography>
            {pages
              .filter((page) =>
                ["About Us", "Our Programs", "Enrollment", "Careers"].includes(
                  page.name
                )
              )
              .map((page) => {
                return (
                  <Link color="inherit" key={page.name} slim href={page.url}>
                    {page.name}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className={joinClasses([column, child])}>
          <div className={joinClasses([column, noPadding])}>
            <Typography variant="h4" gutterBottom>
              Legal
            </Typography>
            <Link color="inherit" slim href="/">
              Privacy Policy
            </Link>
            <Link color="inherit" slim href="/">
              Data Security
            </Link>
            <Link color="inherit" slim href="/">
              License agreement
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Stay Connected
            </Typography>
            <span style={{ marginTop: 8 }}>
              {socials.map(({ name, url }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  component="span"
                >
                  <i
                    className={`fab fa-${name}`}
                    aria-hidden
                    style={{ fontSize: "30px", marginRight: "16px" }}
                  />
                </Link>
              ))}
            </span>
          </div>
        </div>
      </footer>
      <Banner color="secondary" justify="center">
        <Copyright website="Monument Academy" />
      </Banner>
    </>
  );
}
