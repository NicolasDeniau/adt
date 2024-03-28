import { SelectedPage, ClassType } from "@/shared/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Chambre Simple",
        description: "Idéal pour un court séjour dans la capitale.",
        image: image1,
    },
    {
        name: "Chambre Double Classique",
        description: "Idéal pour un court séjour dans la capitale.",
        image: image2,
    },
    {
        name: "Chambre Double Sup",
        description: "Idéal pour un court séjour dans la capitale.",
        image: image3,
    },
    {
        name: "Chambre Triple",
        description: "Idéal pour un court séjour dans la capitale.",
        image: image4,
    },
    {
        name: "Chambre Familiale",
        description: "Idéal pour un court séjour dans la capitale.",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity:0, x:-100 },
                    visible: { opacity:1, x: 0 },
                }}
            >
                <div className="md:w-3/5 py-10">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe reprehenderit at id alias hic provident nostrum iste impedit unde quas, debitis et culpa laudantium nulla laborum obcaecati perspiciatis pariatur.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses