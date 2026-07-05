import { MetadataRoute } from "next"
import { PROFILE } from "@/constants/profile"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = PROFILE.url
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
