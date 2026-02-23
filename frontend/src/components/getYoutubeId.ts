export function getYoutubeId(url:string){
    const idMatch = url.match(/(youtu\.be\/|v=|embed\/)([^?&/]+)/);
    const videoId = idMatch?.[2]
    if(!videoId) return null
    return `https://www.youtube.com/embed/${videoId}`;
}