import { Page } from "@components";
import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { teamProfile } from "@components";
import Image from "next/image";

const team = () => {
  return (
    <Page title="Our Team | Monuent Academy" description="">
      <div style={{ height: "150px" }}></div>
      <section style={{ width: "90%", margin: "auto" }}>
        <Typography variant="h2" color="primary">
          Monument Academy Team
        </Typography>
        <Typography variant="body1">
          The Monument Academy team is led by an experienced and diverse group
          of leaders with deep expertise in education, organizational
          development, psychology, child development, and more. To learn about
          Monument Academy’s Board of Directors, please visit our Board of
          Directors page.
        </Typography>
        <br />
        <br />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/Dr_Jeffrey-Grantt.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              Dr. Jeffrey Grant
            </Typography>
            <Typography variant="h5" color="grey">
              Head of School and CEO
            </Typography>
            <Typography variant="body1">
              Dr. Jeffrey Grant is a native Washingtonian who has led schools
              for over 15 years. In addition, he has more than a decade of
              experience teaching in district schools. In 2005, he was honored
              as Teacher of the Year by Junior Achievement of the National
              Capital Area. He holds a doctorate of education in leadership and
              policy studies and a master’s in education technology leadership
              from George Washington University. He earned degrees in political
              science and philosphy from the University of the District of
              Columbia. Most recently, he served as National Head of Schools at
              Friendship Education Foundation. Dr. Grant and his wife Sharnika
              reside in Maryland with their children. He is a proud member of
              Kappa Alpha Psi Fraternity, inc.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/Dr_Ashley-DeCruise.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              Dr. Ashley DeCruise
            </Typography>
            <Typography variant="h5" color="grey">
              Director of Academics
            </Typography>
            <Typography variant="body1">
              Dr. Ashley DeCruise is a first-generation Guyanese American. She
              has been passionate about the world of education since she was a
              young girl in 5th grade. Dr. DeCruise has been immersed in the
              world of Special education for the past six years. During her time
              in the Maryland school system, she was instrumental in
              successfully reintegrating self-contained students categorized
              with an emotional disability back into the mainstream environment.
              In her new role as Director of Academics at Monument Academy, Dr.
              DeCruise has had the opportunity to infuse research-based
              strategies into classrooms to drive instruction and ensure
              intentional use of data. Dr. DeCruise holds a doctorate in
              educational leadership from Nova Southeastern University. She is
              the proud parent of a little girl, Harlie. She enjoys reading.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/Greg_Gaskins.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              Greg Gaskins
            </Typography>
            <Typography variant="h5" color="grey">
              Interim Chief of Operations
            </Typography>
            <Typography variant="body1">
              Greg Gaskins has been immersed in education and school finances
              since his graduation from the University of Pittsburgh in 2012. He
              attended the University of Pittsburgh on a football scholarship
              and obtained his degree in Economics. He has always had a passion
              for helping youth succeed and uses this passion in his work at
              Monument as well as through coaching. Greg coaches high school
              football and has also coached elementary basketball. Greg brings 6
              years of school financial and operational experience, as he was
              the Business Manager at Friendship Public Charter School Blow
              Pierce Academy before joining the staff at Monument. He leads
              Monument’s chess club and enjoys running and staying active in his
              spare time.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/Dr_Paris-Gasque.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              Paris Gasque, PhD
            </Typography>
            <Typography variant="h5" color="grey">
              Chief of Well-Being and Student Services
            </Typography>
            <Typography variant="body1">
              Paris Gasque, PhD is an educator, a therapist, and a social
              activist who is passionate about change, justice and equal
              opportunities for youth that are placed at risk for poverty,
              criminality, and disparities. She is committed to the
              intellectual, mental, social and emotional advancement of youth
              and families most disenfranchised in urban cities like DC. Dr.
              Gasque (Dr. G) has dedicated most of her adult life in pursuit of
              higher education having earned degrees, licensures and
              certifications in social work, special education, administration
              leadership and educational psychology. She has served as a special
              education teacher, a special education supervisor, a school
              psychologist, an assistant principal, and continues to serve
              youth, families, and future practitioners as owner of Amachi
              Foundation, LLC, as an adjunct professor at Howard University and
              as Director of Well-Being and Student Supports at Monument Academy
              Public Charter School. Dr. G enjoys traveling and spending time
              with family and friends. She is also a Diamond Life member of
              Delta Sigma Theta Sorority, Incorporated.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/Jeff-McHugh.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              Jeff McHugh
            </Typography>
            <Typography variant="h5" color="grey">
              Director of Systems and IT
            </Typography>
            <Typography variant="body1">
              Jeff orchestrated the implementation of a new Student Information
              System and worked with EmpowerK12 to build data-driven practices
              into the routines of Monument Academy. This work involves the
              build-out of a data warehouse and data dashboards. Previously, he
              spent two years as the Director of Operations at Monument Academy,
              during which he oversaw purchasing, facilities, compliance,
              registration, data, information technology, and food service for
              the school. He earned his MBA at the Yale School of Management and
              spent six years teaching high school math at the Bronx Academy of
              Letters in the South Bronx. He has an MA in Secondary Education
              from the City College of New York and a BA in English and
              Economics from Northwestern University.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/Gerron-Cooper.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              Gerron Cooper
            </Typography>
            <Typography variant="h5" color="grey">
              Director of Behavior Management
            </Typography>
            <Typography variant="body1">
              Gerron Cooper earned a Masters of Science degree in Applied
              Behavioral Analysis from The Chicago School of Professional
              Psychology and has spent the last 7 years designing effective
              behavior interventions for individuals who engage in socially
              inappropriate behaviours, focusing primarily on the environmental
              variables that influence these actions. At Monument Academy,
              Gerron strives to interact with the students on a personal level,
              which ultimately allows him to provide more individualized
              treatment as he recognizes that each student and their background
              is unique. His department holds the students accountable for their
              actions through positive reinforcement, which research shows will
              create more effective and longer lasting behaviour change than
              punishment and negative consequences. The goal is to create a
              personalized approach for each student that will garner greater
              treatment outcomes than a one size fits all program and enable the
              students to reach their full potential. He never thought that he
              would end up working in a school system, but from day one he has
              felt as though this is where he belonged. Gerron is a native of
              The Bahamas and in his free time, he enjoys soccer, swimming, and
              many other physical activities.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/James-Long.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              James Long
            </Typography>
            <Typography variant="h5" color="grey">
              Director of Safety and Security
            </Typography>
            <Typography variant="body1">
              Mr. James Long was born and raised in Washington DC and attended
              DC Public Schools. He graduated from Theodore Roosevelt SHS in
              1999. He then attended Virginia State University on a full
              football scholarship. He graduated in 2003 with a major in
              Criminal Justice and minor in Sociology. Mr. Long had over 8 years
              of experience in security prior to becoming the Head of Security
              at Friendship Public Charter School Blow Pierce in 2016. In his
              spare time, he loves to read and is passionate about track and
              field and football. Since he graduated college he has been giving
              back to youth in the form of coaching and has been a coach at
              Friendship Collegiate Academy since 2012 where he has helped guide
              over 120 student-athletes to college on either an academic or
              football scholarship. His favorite quote is “Never get caught up
              in criticism or praise all distractions come at a cost” – Dean
              Smith.
            </Typography>
          </div>
        </Grid>
        <hr></hr>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div style={{ width: "auto", minWidth: "200px", maxWidth: "300px" }}>
            <Image
              src="/images/team/Katrice-Whitaker.png"
              alt="Monument Academy Logo"
              width={280}
              height={280}
              position="relative"
              style={{
                maxWidth: "300px",
                minWidth: "150px",
              }}
            />
          </div>
          <div style={{ paddingLeft: "32px", width: "75%", minWidth: "370px" }}>
            <Typography variant="h4" color="primary">
              Katrice Whitaker
            </Typography>
            <Typography variant="h5" color="grey">
              Director of Family Engagement
            </Typography>
            <Typography variant="body1">
              Katrice Whitaker has an 11-year tenure in special education and
              serving at-risk youth with the goal of reunifying families,
              creating equitable learning experiences, and being the voice for
              youth that are often left behind or silenced. After having
              experienced many Adverse Childhood Experiences (ACES) herself,
              Katrice has long ago found her purpose in protecting black and
              brown youth, starting her career by spreading mental health
              awareness through performing arts-based curricula in autism
              programs, juvenile detention centers and alternative schools in
              the DMV region. Katrice initially attended Virginia State
              University after high school, but ultimately received her BA in
              Forensic Psychology at the now University of MD Global Campus and
              is currently working on her Masters in Social Sciences with a
              concentration in Differentiation in Education. In addition to her
              work at Monument Academy Public Charter School, Katrice is a DC
              Mayoral Community Change Fellow, an avid Ward 6 Parent Leader in
              Education.
            </Typography>
            <Typography variant="body1">
              Board Member of PAVE (Parents Amplifying Voices in Education), and
              an Under 3 DC Coalition Board Member; most importantly, alongside
              her husband Danny, she is a proud parent of 5 kings – Tyrell,
              Justin, Devin, Karter, and Jaylen.”
            </Typography>
          </div>
        </Grid>
        {/* <teamProfile /> */}
      </section>
    </Page>
  );
};

export default team;
