// Tokens are injected at publish time from ~/.config/feels-vs-is/tokens.env by cache/publish_pages.sh.
// Keep this file empty in git. Both are public client tokens (they ship in the page), but they stay out of the source branch.
//   MAPBOX_TOKEN    pk....   from account.mapbox.com, restrict it to https://bryceob13.github.io
//   MAPILLARY_TOKEN MLY|...  from mapillary.com/dashboard/developers
// Empty mapbox token: the page falls back to MapLibre + OpenFreeMap. Empty mapillary token: popups link out to Mapillary at the location instead of embedding a photo.
window.FVI_CONFIG = { mapillaryToken: "MLY|28561495363459932|df6da6f1c99d7efdc5630ef6ba49631b", mapboxToken: "pk.eyJ1IjoiYmJhaWxleTIwMjEiLCJhIjoiY211c29kanRjMDZ6MjJ3b3RiYjgwaDVoayJ9.4CNuw_3Nz09ZRwUMWD7fhA" };
