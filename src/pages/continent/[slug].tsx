import { GetStaticProps, GetStaticPropsContext } from "next";
import { Flex } from "@chakra-ui/react";

import { ParsedUrlQuery } from 'querystring'
import { Footer } from "../../components/Footer";

interface IParams extends ParsedUrlQuery {
    slug: string
}

interface ContinentProps {
    continent: string;
}

export default function Continent({ continent }: ContinentProps) {

    return (
        <Flex
            direction="column"
        >
            <h1>{ continent }</h1>


            <Footer />
        </Flex>
    )
}

export async function getStaticPaths() {
    return {
      paths: [],
      // Enable statically generating additional pages
      // For example: `/posts/3`
      fallback: true,
    }
  }

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams 
    const continent = slug;
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
        props: {
            continent,
        }
    }
}