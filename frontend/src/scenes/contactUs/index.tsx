import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from '@/shared/HText';
import { error } from 'console';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 my-5 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    // type any
    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()       
        }
    }

  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* HEADER */}
            <motion.div
                className='md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity:0, x:-100 },
                    visible: { opacity:1, x: 0 },
                }}
            >
                <HText>
                    <span className='text-primary-500'>UNE QUESTION ? CONTACTEZ-NOUS </span>
                </HText>
                <p className='my-5'>
                    Posez votre question ci-dessous et nous reviendrons vers vous dans les plus bref délais.
                </p>

            </motion.div>

                {/* FORM AND IMAGES */}
                <div className='mt-10 justify-between gap-8 md:flex'>

                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >

                        <form
                            target='_blank'
                            onSubmit={onSubmit}
                            // TODO - Change with anonymous URL 
                            action='https://formsubmit.co/199c7e53eadf2389bc87f2cffdee8f43'
                            method='POST'
                        >
                            <input 
                            className={inputStyles}
                            type="text"
                            placeholder="NOM"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "Ce champ est obligatoire."}
                                    {errors.name.type === "maxLength" && "Un nom ne peut pas avoir plus de 100 caractères."}
                                </p>
                            )}

                            <input 
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "Ce champ est obligatoire."}
                                    {errors.email.type === "pattern" && "Merci de renseigner une adresse mail valide."}
                                </p>
                            )}

                            <textarea 
                            className={inputStyles}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "Ce champ est obligatoire."}
                                    {errors.message.type === "pattern" && "Ce champ ne peut pas avoir plus de 2000 caractères."}
                                </p>
                            )}


                            <button
                            type="submit"
                            className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                            >
                                ENVOYER
                            </button>
                        </form>

                    </motion.div>

                </div>

        </motion.div>

    </section>
  )
};

export default ContactUs