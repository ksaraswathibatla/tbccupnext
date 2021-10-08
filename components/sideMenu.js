import { useState } from "react";
import classNames from "classnames";

const SideMenu = ({ sideMenus }) => {

    const [currentMenu, setCurrentMenu] = useState(sideMenus[0].title)

    const displayTabContent = () => {
        const sideMenu = sideMenus.filter(p => p.title === currentMenu);
        const description = sideMenu.flatMap(p => p.description).flatMap(p => p.content).flatMap(p => p.content).map(p => p.value);
        console.log(sideMenu[0].image.fields.file.url);
        const { url, details } = sideMenu[0].image.fields.file
        const { width, height } = details.image;
        const imageUrl = 'https:' + url;

        return (
            <div className="tabcontent" style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat" }} >
                <div className="tabcontentText">
                    <p className="marginBottomSmall">{description}</p>
                </div>
            </div>)
    }

    return (<section id="infoModule">

        <div className="tab">
            {sideMenus.map(p =>
            (<button className={classNames("tablinks", { active: p.title == currentMenu })}
                key={p.title} onClick={() => setCurrentMenu(p.title)}>{p.title}</button>))}
        </div>

        {displayTabContent()}

        {/* <div id="teamup" className="tabcontent" style="display: block;">
            <div className="tabcontentText">
                <h2>Team Up and Register</h2>
                <p className="marginBottomSmall">Pick four other Coaches that you want to work with, learn from, and help mentor. They don’t have to be in your downline. Just find four people who have similar goals for the month of October and are dedicated to spending 31 days becoming the best Coach they can be. One important note: you can only have two Diamonds on your team, and only one of those can be a Star Diamond. To register, pick a Team Captain and have them sign up your whole team by October 5th. Registration opens September 15th at 9am PST.</p>


            </div>
        </div> */}

        {/* <div id="goals" className="tabcontent" style="display: none;">
            <div className="tabcontentText">
                <h2>Set Goals</h2>
                <p className="marginBottomSmall">Where do you want to take your business? What’s the next attainable goal you want to achieve? Team Cup is the perfect time to lock in on taking your business one step further. Want to make it to Diamond? How about finding a system to sign up one person every day? Think about where you want to be at the end of October and start taking concrete steps today. By participating in Team Cup, you’ll have four other Coaches who can give you step-by-step advice on what they do to succeed. Not just that, by explaining your own methodology, you make your business even stronger by identifying what works and what you can improve on. Now is the time to set your next goal with the support of your whole team behind you.</p>

            </div>
        </div>

        <div id="motivate" className="tabcontent" style="display: none;">
            <div className="tabcontentText">
                <h2>Motivate Each Other</h2>
                <p className="marginBottomSmall">A rising tide lifts all ships. Team Cup creates an accountability circle where you can learn from others, motivate others, and learn from motivating others. When your team members succeed in their goals, you ALL succeed. You have the opportunity to help people fine-tune the engine of their business while learning unexpected tips that can revolutionize your own approach. That’s what makes Team Cup special: camaraderie that celebrates others’ accomplishments for being just as important as our own.</p>

            </div>
        </div>

        <div id="earn" className="tabcontent" style="display: none;">
            <div className="tabcontentText">
                <h2>Earn Points</h2>
                <p>Each team member will earn Team Cup points throughout October. At the end of Team Cup, points will be added together to get your team’s total points. You earn Team Cup points by doing the following:</p>
                <ul>
                    <li>1 Success Club point = 1 Cup point</li>
                    <li>1 Lifetime Rank Advancement = 3 Cup points</li>
                </ul>
                <p className="marginBottomSmall">*Limit 40 Cup points per Coach</p>

            </div>
        </div>

        <div id="crush" className="tabcontent" style="display: none;">
            <div className="tabcontentText">
                <h2>Crush Goals and Win</h2>
                <p className="marginBottomSmall">When Team Cup is over, celebrate your successes with your team! As an extra bonus, you can earn Team Cup rewards when you achieve Success Club, both individually and as a team. These rewards are in addition to any Success Club annual rewards you earn during the year. We’ll also be rewarding the top five Star Diamond and above teams and the top five Diamond and below teams who earn the most Team Cup points.</p>
                <p className="marginBottomSmall">At the end of the challenge, we’ll crown TWO champion teams: The top Star Diamond and above team, as well as the top Diamond and below team.</p>
            </div>
        </div> */}
    </section>);
}

export default SideMenu;