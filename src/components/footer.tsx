import { InstagramIcon, MailIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-2">
      <div className="container flex flex-col space-y-4 justify-between items-center p-1">
        <a href="/">
          <img src={"/assets/images/logo.png"} alt="logo" width={100} height={100} />
        </a>

        <ul className="flex justify-center gap-5">
          <li className="bg-yellow-400 p-2 rounded-full">
            <TwitterIcon />
          </li>
          <li className="bg-yellow-400 p-2 rounded-full">
            <InstagramIcon />
          </li>
          <li className="bg-yellow-400 p-2 rounded-full">
            <YoutubeIcon />
          </li>
          <li className="bg-yellow-400 p-2 rounded-full">
            <MailIcon />
          </li>
        </ul>
        <small className="text-white">© حقوق النشر ٢٠٢٤. جميع الحقوق محفوظة.</small>
      </div>
    </footer>
  );
}
