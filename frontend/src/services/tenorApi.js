export default async function reqGif(query) {
  let response = await getGif(query);
  return response.results.map((item) => ({
    id: item.id,
    type: "gif",
    title: "GIF",
    thumbnail: item.media_formats.tinygif.url,
    src: item.media_formats.gif.url,
    url: item.url,
  }));
}
