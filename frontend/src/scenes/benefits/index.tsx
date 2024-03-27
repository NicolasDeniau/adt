import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
 } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
//  importer d'autres icones au besoin 

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
            <div className="md:my-5 md:w-3/5">
                <HText>
                    MORE THAN JUST A GYM
                </HText>
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic voluptate possimus temporibus 
                    ipsum quibusdam quaerat nisi fugiat iste ad eaque illo illum, nobis, ipsa cumque cum corrupti quos, in placeat. 
                    Porro explicabo totam sint harum temporibus, 
                </p>
            </div>

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
        </motion.div>
    </section>
  )
}

export default Benefits