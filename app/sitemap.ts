import { MetadataRoute } from "next"
import { PROFILE } from "@/constants/profile"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PROFILE.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ]
}
