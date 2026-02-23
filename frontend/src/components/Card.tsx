import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { getYoutubeId } from "./getYoutubeId";

interface cardProps{
    title:string,
    link:string ,
    type:"youtube" | "blog" | "twitter" | string
}
export function Card({title,link,type}:cardProps){
    return <div className="p-3 bg-gray-100 border-gray-200  shadow-purple-300 shadow-lg border max-w-72 h-72 rounded-lg ">
        <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center text-md text-gray-500">
                <PlusIcon size="md"/>
                {title}
            </div>
            <div className="flex gap-1 text-gray-500">
                <PlusIcon size="md"/>
                <a href={link} target="_blank"><ShareIcon size="md"/></a>
            </div>
        </div>
        <div className="overflow-y-scroll max-w-full max-h-full pt-4">
            {type==="youtube" &&  <iframe src={getYoutubeId(link) || undefined} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>}
            {type==="twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com","twitter.com")}></a></blockquote>} 
        </div> 
    </div>
}