import Head from "next/head";
//import Script from "next/script";
import Analytics from "../components/SEO/Seo";
import Layout from "../HOC/Layout/Layout";
// import styles from "../styles/Home.module.css";
import Home from "./HomePage/index";
export default function Index() {
  return (
    <Layout>
      <div className={``}>
        <Analytics />
        {/* <div> */}
        <Head>
          <title>Providing Computer & IT Training,Since 2016</title>

          <meta
            name="facebook-domain-verification"
            content="didfb1wilzigx833uhs5kh3obmbkxt"
          />
          <meta
            name="description"
            content="Best IT training and Solutions in Butwal, No.1 web designer and computer Institute in Rupandehi, Best IT Training in Butwal Nepal
  | A Top Computer Institute in Rupandehi |No.1 IT Center | Best website designing course in Butwal | Top IT Training institute in Butwal |
  No.1 Computer training in Nepal | IT training in Butwal | IT training Nepal | HUB IT TRAINING AND SOLUTION |hub it training and solution |
  Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal,
  computer courses in nepal ,computer institute in nepal, Web Designing Training,Professional IT Education, Training, IT Education Nepal, Computer Traning Institute Nepal,
  Computer Programming Institute Nepal, Professional Web Designing , Professional Web Development, Advance Web Master Program, Professional JOOMLA (CMS) Development,
  CSS Training Nepal, Object Oriented PHP Programming Training Courses Nepal, Quality Assurance, Web Institution Nepal, Computer courses in nepal,
  Search Engine Optimization Training Nepal, SEO Courses, C , C++ , VB.Net , ASP.Net , C# , Oracle , MS SQL Server , PHP MYSQL ,
  Java, JavaBeans , JSP , J2EE training In kathmandu nepal. BUtwal"
          />
          <meta
            name="keywords"
            content="Best IT Training In Butwal,best it training in nepal,tech news,tech,new technology,
  what is technology,technology definition,science and technology,latest technology,technews,latest technology news,cool tech,technological advances
,technology review,newtech,modern technology,definition of technology,best it training in rupandehi,best it training lumbini,best computer institute in nepal,best computer institute in butwal,best computer institute in rupandehi,
  best computer institute in lumbini,No,1 it training in butwal,No,1 it training in Nepal,No,1 it training in Butal,No,1 it training in lumbini,No,1 it training in rupandehi,
  top it training in butwal,top it training in rupandehi,top it training in nepal,top it training in lumbini,best it training institute in butwal,best institute near me,
  best it training near me,best it training institute in butwal,top it training institute in butwal,no,1 it training in butwal,free it training in butwal,best it company in butwal,
  top software company in butwal,top it company in rupandehi,best software company in rupandehi,Best It training in Butwal,best it training in nepal,best it training in rupandehi,
  best it training lumbini,best computer institute in nepal,best computer institute in butwal,best computer institute in rupandehi,best computer institute in lumbini,
  No.1 it training in butwal,No,1 it training in Nepal,No,1 it training in Butal,No,1 it training in lumbini,No,1 it training in rupandehi,top it training in butwal,
  top it training in rupandehi,top it training in nepal,top it training in lumbini,best it training institute in butwal,best institute near me,best it training near me,
  best it training institute in butwal,top it training institute in butwal,it training near me,best computer institute is,top computer institute near me is,no,1 it training is,
  Best IT Training in Butwal Nepal,A Top Computer Institute in Rupandehi,No,1 IT Center,Best website designing course in Butwal,Top IT Training institute in Butwal,
  No,1 Computer training in Nepal,IT training in Butwal,IT training Nepal,Mirror Technology and Training Center,best video editing and wordpress training in butwal,
  in butwal,HTML,CSS,Java,Python,PHP,Javascript,Wordpress,Android,Computer Training Institute in kathmandu Nepal,Professional IT Training institute in Nepal,
  computer learning center,computer training center in nepal,computer courses in nepal,computer institute in nepal,Web Designing Training,Professional IT Education,
  Training,IT Education Nepal,Computer Traning Institute Nepal,Computer Programming Institute Nepal,Professional Web Designing,Professional Web Development,
  Advance Web Master Program,Professional JOOMLA,CMS,Development,CSS Training Nepal,Object Oriented PHP Programming Training Courses Nepal,Quality Assurance,
  Web Institution Nepal,Computer courses in nepal,Search Engine Optimization Training Nepal,SEO Courses,C,amp,C++,VB,Net,ASP,Net,C,,Oracle,MS SQL Server,
  PHP MYSQL,Java,amp,JavaBeans,JSP,J2EE training In kathmandu nepal,in butwal best,ios app development company nepal,iphone app development company nepal,
  best computer training institute in butwal,android app development company nepal,website designing and developing company in butwal,android development training in nepal,
  computer training institute in nepal,mobile app development company,mobile application development companies in nepal,android app development company,webdesign,
  college in butwal,website design,event videography,iphone app development company nepal,best computer training institute in butwal,android app development company nepal,
  website designing and developing company in butwal,android development training in nepal,computer training institute in nepal,mobile app development company,
  mobile application development companies in nepal,android app development company,webdesign,college in butwal,website design,event videography,  Best IT Training in nepal,
  it training courses,it training near me,it training butwal,training course,computer training in butwal,best it training website,best it training courses, best it training sites,
  best it training in the world,best computer institute in kathmandu,best computer institute in chitwan,best computer training institute in butwal, website designing course,website designing course in butwal,
  it training institute in nepal,"
          />
          <meta
            property="og:title"
            content="BEST IT TRAINING IN BUTWAL NEPAL _ AT Top Computer Institute in Rupandehi |No.1 IT Center |
  Best website designing course in Butwal | Top IT Training institute in Butwal | No.1 Computer training in Nepal | IT training in Butwal |
  IT training Nepal | Mirror Technology and Training Center | best video editing and wordpress training in butwal |
  HTML, CSS, Java, Python, PHP, Javascript, Wordpress, Django, Android | WEB DESIGN IN BUTWAL | WEBSITE DESIGN IN BUTWAL NEPAL |
  WEB DEVELOPER IN BUTWAL | WEBSITE DESIGN |WEBDESIGN | HTML COURSE IN BUTWAL NEPAL | COMPUTER TRAINING IN BUTWAL | WORDPRESS IN BUTWAL NEPAL| WEBSITE COURSES IN BUTWAL NEPAL"
          />
          <meta
            property="og:description"
            content="Best IT training and Solutions in Butwal, No.1 web designer and computer Institute in Rupandehi, Best IT Training in Butwal Nepal |
  A Top Computer Institute in Rupandehi |No.1 IT Center | Best website designing course in Butwal | Top IT Training institute in Butwal | No.1 Computer training in Nepal |
  IT training in Butwal | IT training Nepal | Mirror Technology and Training Center | Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal,
  computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, Web Designing Training,Professional IT Education, Training,
  IT Education Nepal, Computer Traning Institute Nepal, Computer Programming Institute Nepal, Professional Web Designing , Professional Web Development,
  Advance Web Master Program, Professional JOOMLA (CMS) Development, CSS Training Nepal, Object Oriented PHP Programming Training Courses Nepal, Quality Assurance,
  Web Institution Nepal, Computer courses in nepal,  Search Engine Optimization Training Nepal, SEO Courses, C, C++ , VB.Net , ASP.Net , C# , Oracle , MS SQL Server ,
  PHP MYSQL , Java  , JavaBeans , JSP , J2EE training In kathmandu nepal. BUtwal"
          />
          <link rel="icon" href="/hubitLogo.svg" />
          <meta
            name="msvalidate.01"
            content="DCD5FD5B8698F83AE6AC76EE889570AC"
          />
        </Head>
        <main>
          <Home />
        </main>
      </div>
    </Layout>
  );
}
