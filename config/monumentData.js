const data = {
  address: "500 19th Street NE, Washington, DC 20002",
  phoneNumber: "(202) 545-3180",
  fax: "(202) 478-2824",
  team: [
    {
      name: "Dr. Jeffrey Grant",
      title: "Head of School and CEO",
      description: `Dr. Jeffrey Grant is a native Washingtonian who has led schools for over 15 years. In addition, he has more than a decade of experience teaching in district schools. In 2005, he was honored as Teacher of the Year by Junior Achievement of the National Capital Area. He holds a doctorate of education in leadership and policy studies and a master’s in education technology leadership from George Washington University. He earned degrees in political science and philosphy from the University of the District of Columbia. Most recently, he served as National Head of Schools at Friendship Education Foundation. Dr. Grant and his wife Sharnika reside in Maryland with their children. He is a proud member of Kappa Alpha Psi Fraternity, inc.`,
      image: "/images/team/Dr_Jeffrey-Grantt.png",
    },
    {
      name: "Dr. Ashley Decruise",
      title: "Director of Academics",
      description: `Dr. Ashley DeCruise is a first-generation Guyanese American. She has been passionate about the world of education since she was a young girl in 5th grade. Dr. DeCruise has been immersed in the world of Special education for the past six years. During her time in the Maryland school system, she was instrumental in successfully reintegrating self-contained students categorized with an emotional disability back into the mainstream environment. In her new role as Director of Academics at Monument Academy, Dr. DeCruise has had the opportunity to infuse research-based strategies into classrooms to drive instruction and ensure intentional use of data. Dr. DeCruise holds a doctorate in educational leadership from Nova Southeastern University. She is the proud parent of a little girl, Harlie. She enjoys reading.`,
      image: "/images/team/Dr_Ashley-DeCruise.png",
    },
    {
      name: "Greg Gaskins",
      title: "Interim Chief of Operations",
      description: `Greg Gaskins has been immersed in education and school finances since his graduation from the University of Pittsburgh in 2012. He attended the University of Pittsburgh on a football scholarship and obtained his degree in Economics. He has always had a passion for helping youth succeed and uses this passion in his work at Monument as well as through coaching. Greg coaches high school football and has also coached elementary basketball. Greg brings 6 years of school financial and operational experience, as he was the Business Manager at Friendship Public Charter School Blow Pierce Academy before joining the staff at Monument. He leads Monument’s chess club and enjoys running and staying active in his spare time.`,
      image: "/images/team/Greg_Gaskins.png",
    },
    {
      name: "Paris Gasque, PhD",
      title: "Chief of Well-Being and Student Services",
      description: `Paris Gasque, PhD is an educator, a therapist, and a social
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
      Delta Sigma Theta Sorority, Incorporated.`,
      image: "/images/team/Dr_Paris-Gasque.png",
    },
    {
      name: "Jeff McHugh",
      title: "Director of Systems and IT",
      description: `Jeff orchestrated the implementation of a new Student Information
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
      Economics from Northwestern University.`,
      image: "/images/team/Jeff-McHugh.png",
    },
    {
      name: "Gerron Cooper",
      title: "Director of Behavoir Management",
      description: `Gerron Cooper earned a Masters of Science degree in Applied
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
      many other physical activities.`,
      image: "/images/team/Gerron-Cooper.png",
    },
    {
      name: "James Long",
      title: "Director of Safety and Security",
      description: `Mr. James Long was born and raised in Washington DC and attended
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
      Smith.`,
      image: "/images/team/James-Long.png",
    },
    {
      name: "Katrice Whitaker",
      title: "Director of Family Engagement",
      description: `Katrice Whitaker has an 11-year tenure in special education and
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
      
      Board Member of PAVE (Parents Amplifying Voices in Education), and
      an Under 3 DC Coalition Board Member; most importantly, alongside
      her husband Danny, she is a proud parent of 5 kings – Tyrell,
      Justin, Devin, Karter, and Jaylen.”`,
      image: "/images/team/Katrice-Whitaker.png",
    },
  ],
};

export default data;
