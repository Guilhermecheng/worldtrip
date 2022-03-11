import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import Link from 'next/link';

import { Flex, Heading } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ContinentProps {
    uid: string;
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
                        <Link href={`/continent/${continent.uid}`} passHref>

                            <Flex
                                bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${ continent.continent_banner_image })`}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                direction="column"
                                h={{ sm: '400px', base: '250px' }}
                                alignItems="center"
                                justifyContent="center"
                                color="white"
                                cursor="pointer"
                            >
                                    <Heading
                                        as="h1"
                                        fontSize={{ sm: '5xl', base: '2xl' }}
                                    >
                                        { continent.continent_name }
                                    </Heading>

                                    <Heading
                                        as="h3"
                                        color="gray.300"
                                        fontSize={{ sm: '2xl', base: 'md' }}
                                        mt={{ md: '4', base: '1' }}
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