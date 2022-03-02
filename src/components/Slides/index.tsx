import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ContinentProps {
    slugs: string[];
    continent_name: string;
    continent_subtitle: string;
    continent_banner_image: string;
}

interface SlidesProps {
    Allcontinents: ContinentProps[];
}

export function Slides({ Allcontinents }: SlidesProps) {

    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            height={1400}
        >
            { Allcontinents.map( continent => {
                return (
                    <SwiperSlide key={ continent.continent_name }>
                        <Link href={`/continent/${continent.slugs[0]}`}>

                            <Flex
                                bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${ continent.continent_banner_image })`}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                direction="column"
                                h="400px"
                                alignItems="center"
                                justifyContent="center"
                                color="white"
                            >
                                    <Heading
                                        as="h1"
                                        fontSize="5xl"
                                    >
                                        { continent.continent_name }
                                    </Heading>

                                    <Heading
                                        as="h3"
                                        color="gray.300"
                                        fontSize="2xl"
                                        mt="4"
                                    >
                                        { continent.continent_subtitle }
                                    </Heading>
                            </Flex>
                        </Link>
                    </SwiperSlide>
                )
            }) }
            
        </Swiper>
    );
}