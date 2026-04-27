import Link from "next/link";
import "./about.scss";
import { ideaItems } from "../constants/ideaItems";
import MoreButton from "@/public/moreButton.svg";
import { coreCards } from "../constants/coreCards";
import OurPartners from "../components/OurPartners";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import { fetchSSRData } from "../Hooks/useFetchData";

const page = async () => {
  const response = await fetchSSRData("/page-data/about");
  const data = response?.data;
  console.log(data);

  const statistics = [
    {
      info: data.statistic_info_1,
      icon: data.statistic_icon_1,
      txt: data.statistic_info_txt_1,
    },
    {
      info: data.statistic_info_2,
      icon: data.statistic_icon_2,
      txt: data.statistic_info_txt_2,
    },
    {
      info: data.statistic_info_3,
      icon: data.statistic_icon_3,
      txt: data.statistic_info_txt_3,
    },
    {
      info: data.statistic_info_4,
      icon: data.statistic_icon_4,
      txt: data.statistic_info_txt_4,
    },
  ];
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="">IDEA</a>
            </li>
            <li>
              <span>ABOUT US</span>
            </li>
          </ul>
        </div>
        <div className="aboutPageMain">
          <div className="aboutDetails">
            <div className="left">
              <span>{data.page_title}</span>
              <div className="text">
                <div dangerouslySetInnerHTML={{ __html: data.content_1 }} />
              </div>
              <div className="bigIdeaItems">
                <div className="bigIdeaItem">
                  {statistics.map((item, index) => (
                    <div key={index} className="bigIdeaItem">
                      <div className="ideaIcon">
                        <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                      </div>
                      <div className="ideaDescription">
                        <span>{item.info}</span>
                        <p>{item.txt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bottomTextMain">
                <div className="bottomText">
                  <div dangerouslySetInnerHTML={{ __html: data.content_2 }} />
                </div>
              </div>
              <div className="underText">
                <span>{data.text_card}</span>
              </div>
            </div>
            <div className="right">
              <div className="rightImage">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/storage${data.founder_image}`}
                  alt={data.founder_name}
                />
              </div>
              <div className="rightBottom">
                <div className="rightBottomTitle">
                  <p>THE FOUNDER</p>
                  <h2>{data.founder_name}</h2>
                </div>
                <div
                  className="rightBottomText"
                  dangerouslySetInnerHTML={{
                    __html: data.founder_message,
                  }}
                />
                <Link href={data.visit_website}>
                  Visit Website
                  <MoreButton />
                </Link>
              </div>
            </div>
          </div>
          <div className="aboutUsBanner">
            <img src="/aboutUsBanner.webp" alt="IDEA People" />
          </div>
          <div className="activities">
            <div className="pageTitle">
              <h2>
                <span>Core Areas of </span>
                activity
              </h2>
            </div>
            <div className="coreActivities">
              {coreCards.map((item, index) => (
                <div key={index} className="coreCard">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.label}</h3>
                  <div className="description">
                    <p>{item.description} </p>
                  </div>
                </div>
              ))}
              <div className="coreCardLast">
                <p>The more ’ll coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="missionAndVision">
        <div className="left">
          <h3>{data.vision_title}</h3>
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: data.vision_content }}
          />
        </div>
        <div className="right">
          <h3>{data.mission_title}</h3>
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: data.mission_content }}
          />
        </div>
      </div>
      <OurPartners />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default page;
