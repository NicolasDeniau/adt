import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "../navbar/ActionButton";
import Logo from "@/assets/Logo.png";
import image3 from "@/assets/image3.png";
import SponsorAAH from "@/assets/SponsorAAH.png";
import SponsorFigestel from "@/assets/SponsorFigestel.png";
import SponsorPHI from "@/assets/SponsorPHI.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="relative bg-gray-200 py-10 min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Opacité sur l'image de fond */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Contenu principal */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center h-full">
                {/* En-tête principal */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* En-têtes */}
                    <motion.div 
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once:true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity:0, x:-100 },
                            visible: { opacity:1, x: 0 },
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img alt="home-page-text" src={Logo} />
                            </div>
                        </div>

                        <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-white my-5 py-5">
                            VENEZ DÉCOUVRIR NOTRE HÔTEL 3 ÉTOILES AU COEUR DE PARIS.
                        </h1>
                        <p className="mt-8 text-sm text-white">
                            Avec une localisation exceptionnelle, en plein quartier d'affaires, à moins de 300 m des Champs-Elysées, l'hôtel Arc de Triomphe***, situé dans une rue calme, allie confort, design et modernité.
                        </p>
                    </motion.div>

                    {/* ACTIONS */}
                    <motion.div 
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once:true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity:0, x:-100 },
                            visible: { opacity:1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Réserver
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            Learn More
                        </AnchorLink>
                    </motion.div>

                </div>
            </div>

            {/* SPONSORS
            {isAboveMediumScreens && (
                <div className="absolute bottom-0 left-0 w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img alt="logo-aah" src={SponsorAAH} />
                            <img alt="logo-figestel" src={SponsorFigestel} />
                            <img alt="logo-phi" src={SponsorPHI} />
                        </div>
                    </div>
                </div>
            )} */}
        </section>
    );
};

export default Home;
