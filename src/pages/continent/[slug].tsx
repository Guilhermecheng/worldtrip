import { GetStaticProps, GetStaticPropsContext } from "next";
import { Flex } from "@chakra-ui/react";

import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    slug: string
}

interface ContinentProps {
    continent: string;
}

export default function Continent({ continent }: ContinentProps) {

    return (
        <Flex>
            <h1>{ continent }</h1>
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