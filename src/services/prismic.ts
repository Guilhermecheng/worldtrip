import * as Prismic from '@prismicio/client';

export function getPrismicClient(){
    // const endpoint = Prismic.getEndpoint("worldtrip-gcheng")
    
    const prismic = Prismic.createClient(
        process.env.PRISMIC_ENDPOINT as string,
        {
            accessToken: process.env.PRISMIC_ACCESS_TOKEN,
            // fetch,
            // routes: [
            //     {
            //       "type":"page",
            //       "path":"/:uid"
            //     }
            // ],
        }
    )

    return prismic;
}