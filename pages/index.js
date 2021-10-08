
import { createClient } from "contentful";
import Head from "next/Head";
import Navbar from "../components/Navbar";
import EmblaCarousel from "../components/Carousel";
import RewardsCarousel from "../components/Rewards";
import SideMenu from "../components/sideMenu"
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
  const res = await client.getEntries({ content_type: 'tbcCupPage' })
  const tbcMenuItems = await client.getEntries({ content_type: 'tbccupmenuitem' });
  const tbcCupTeamItems = await client.getEntries({ content_type: 'tbcCupTeamItem' });
  const sideMenuItems = await client.getEntries({ content_type: 'tbcCupSideMenuItem' });
  const rewardItems = await client.getEntries({ content_type: 'tbcCupRewardItem' })
  return {
    props: {
      data: res.items[0].fields,
      menuItems: tbcMenuItems.items.map(p => p.fields.title).sort(),
      teamItems: tbcCupTeamItems.items.flatMap(p => p.fields).map(p => p.title),
      sideMenus: sideMenuItems.items.flatMap(p => p.fields),
      rewardItems: rewardItems.items.flatMap(p => p.fields),
    }
  }
}



export default function TBCCup({ data, menuItems, teamItems, sideMenus, rewardItems }) {
  const { dashboardImage, tbccupMenu, tbcCupDate, dashboardText } = data
  console.log(rewardItems);
  const { url } = dashboardImage.fields.file;
  const dashBoardUrl = 'https:' + url;
  return (
    <>
      <Navbar tbcCupMenu={tbccupMenu.fields} menuItems={menuItems} />
      <section className="heroModule" style={{ backgroundImage: `url(${dashBoardUrl})` }}>
        <div className="fifteenHundred" >
          <div className="heroText">
            <h1><span>{dashboardText}</span></h1><br />
            <p>{tbcCupDate}</p>
          </div>
        </div>
      </section >
      <section id="textSliderModule">
        <div className="fifteenHundred">
          <div className="container3">
            <div className="whyTeamCup">Why Team Cup?</div>
            <EmblaCarousel items={teamItems} />
          </div>
        </div>
      </section>
      <SideMenu sideMenus={sideMenus} />
      <RewardsCarousel rewardItems={rewardItems} />
    </>)
}