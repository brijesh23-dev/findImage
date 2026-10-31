import { getVideos } from "../api/MediaApi";

export default async function reqVideos(query) {
  let response = await getVideos(query);
  return response.videos.map((item) => ({
    id: item.id,
    type: "video",
    title: item.user.name || "video",
    thumbnail: item.image,
    src: item.video_files[0].link,
    url: item.url,
  }));
}
