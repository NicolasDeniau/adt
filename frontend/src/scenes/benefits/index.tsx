import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
 } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "../navbar/ActionButton";
//  importer d'autres icones au besoin 
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
        "lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and pro trainer",
        description:
            "lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
        // highlight the nav item based on our position on the page
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity:0, x:-50 },
                    visible: { opacity:1, x: 0 },
                }}
            >
                <HText>
                    PLUS QU'UN SIMPLE HOTEL
                </HText>
                <p className="my-5 text-sm">
                Rénové en 2023, l'Hôtel Arc de Triomphe incarne l'essence même des séjours parisiens, offrant une expérience d'une sérénité audacieuse. Niché dans le 17ème arrondissement, à quelques pas seulement de l'illustre Arc de Triomphe, notre établissement se distingue par son ambiance feutrée et raffinée, établissant ainsi un contraste harmonieux avec le dynamisme environnant de ce quartier prestigieux.
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once:true , amount: 0.5 }}
                                transition={{ duration: 0.5 }}   
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once:true , amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}   
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                    >
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci libero voluptatibus velit quae explicabo ut voluptatem est doloribus perferendis iure repellat odio laboriosam accusantium unde, accusamus assumenda optio corrupti obcaecati? Temporibus vitae quasi rem tempora placeat. Numquam, enim aspernatur.
                        </p>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolor qui assumenda nisi fugit facilis laudantium minima sapiente nobis dolorem recusandae itaque ipsum, esse ex quod laboriosam quo, suscipit quos eos animi? Illo atque fugit dolor veniam ullam aliquid provident!
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Réserver
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>

                    
        </motion.div>
    </section>
  )
}

export default Benefits