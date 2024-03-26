import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "../navbar/ActionButton";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")


    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full"
        >
            {/* images et main header */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* Main Header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* headings */}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe impedit optio sint non et totam modi.
                            Enim rerum dolor error eum, in ullam ipsum perferendis obcaecati laborum ex sed placeat amet sunt est laboriosam neque ea.
                        </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Réserver
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>

                </div>

                {/* IMAGE */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-content-end">
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </div>

            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-autp w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img alt="redbull-sponsor" src={SponsorRedBull} />
                            <img alt="forbes-sponsor" src={SponsorForbes} />
                            <img alt="fortune-sponsor" src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Home