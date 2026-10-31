import { getPhotos } from "../api/MediaApi";

export default async function reqPhotos(query) {
  let response = await getPhotos(query);
  return response.results.map((item) => ({
    id: item.id,
    type: "photo",
    title: item.alt_description,
    thumbnail: item.urls.small,
    src: item.urls.full,
    url: item.links.html,
    save: item.links.download,
  }));
}
