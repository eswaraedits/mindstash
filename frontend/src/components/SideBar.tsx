import BrainIcon from "../icons/BrainIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SideBarItem from "./SideBarItem";

export function SideBar(){
    return <div className="w-64 bg-gray-100 h-screen shadow-lg fixed left-0 top-0 px-6">
        <div className="text-2xl py-6 flex items-center gap-3 font-brand"><BrainIcon/>mindstash</div>
        <SideBarItem icon={<YoutubeIcon/>} text="youtube"/>
        <SideBarItem icon={<TwitterIcon/>} text="twitter"/>
    </div>
}