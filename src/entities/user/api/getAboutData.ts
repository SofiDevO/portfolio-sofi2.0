import { wpquery } from "@shared/services/wordpress";
import type { AboutData } from "@types/index";

export const getAboutData = async (): Promise<AboutData> => {
    try{
        const data = await wpquery({
            query:`
                query getAboutData {
                    portfoliodata(id: "1005", idType: DATABASE_ID) {
                        content
                        title
                        featuredImage {
                            node {
                                altText
                                mediaItemUrl
                                sizes(size: MEDIUM)
                                srcSet(size: MEDIUM)
                            }
                        }
                        portfolioAboutData {
                        experienciLaboral
                        cv {
                            node {
                            mediaItemUrl
                            }
                        }
                        profilepicture {
                            node {
                            altText
                            mediaItemUrl
                            sizes(size: MEDIUM)
                            srcSet(size: MEDIUM)
                            }
                        }
                        email
                        }
                    }
                    }
            `
        });
        const about = data.portfoliodata;
        const content = about.content as string;
        const name = about.title as string;
        const portfolioAboutData = {
            experienciLaboral: about.portfolioAboutData.experienciLaboral as string,
            cvURL: (about.portfolioAboutData.cv.node as Record<string, string>).mediaItemUrl ?? "",
            profilePicture: (about.portfolioAboutData.profilepicture.node as Record<string, string>).mediaItemUrl ?? "",
            profilePictureAlt: (about.portfolioAboutData.profilepicture.node as Record<string, string>).altText ?? "",
            email: about.portfolioAboutData.email as string,
            featuredImage:{
                altText: (about.featuredImage.node as Record<string, string>).altText ?? "",
                mediaItemUrl: (about.featuredImage.node as Record<string, string>).mediaItemUrl ?? "",
                sizes: (about.featuredImage.node as Record<string, string>).sizes ?? "",
                srcSet: (about.featuredImage.node as Record<string, string>).srcSet ?? "",
            }
        }
        return {
            content,
            name,
            ...portfolioAboutData
        };
    }
    catch{
        return null;
    }

}