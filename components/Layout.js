import Link from 'next/link'
import Image from "next/image";


export default function Layout({ children, data }) {
  console.log(data);
  return (
    <div className="layout">
      <div className="page-content">
        {children}
      </div>

      <footer>
        <div className="fifteenHundred">
          <div>
            <Image src="/tbblogo.svg" alt="TeamBeachbody" width={124} height={124} />
            <Link href="https://www.facebook.com/tbbcoach411/" >
              <Image src="/social-fb.svg" className="socialIcon" alt="Facebook" width={36} height={36} />
            </Link>
            <a href="https://twitter.com/TBBCoach411" target="_blank">
              <Image src="/social-tw.svg" className="socialIcon" alt="Twitter" width={36} height={36} />
            </a>
            <a href="https://www.instagram.com/TBBCoach411/" target="_blank">
              <Image src="/social-ig.svg" className="socialIcon" alt="Instagram" width={36} height={36} />
            </a>
            <a href="https://www.beachbodyondemand.com/blog/" target="_blank">
              <Image src="/social-blog.svg" className="socialIcon" alt="Blog" width={36} height={36} />
            </a>
          </div>
          <hr className="clearFloat marginTopSmall marginBottomSmall" />

          <p>© 2021 Beachbody, LLC.All rights reserved.Distributed in the UK by Beachbody UK Ltd., Harpenden Hall, Southdown Road, Harpenden, Hertfordshire, AL5 1TE.VAT Reg # 252 2916 15.</p>
          <p>Beachbody, LLC is the owner of the Beachbody and Team Beachbody trademarks, and all related designs, trademarks, copyrights and other intellectual property.</p>

        </div>
      </footer>
    </div>

  )
}