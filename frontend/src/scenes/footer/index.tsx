import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="Logo" src={Logo} />
                <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Voluptatem officiis inventore cum dicta autem laudantium 
                    eos quae eius repellat quibusdam?</p>
                <p>
                    Figestel - All Rights Reserved
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt:0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5"> Salut </p>
                <p className="my-5"> C'est Nicolas </p>
                <p>Comment tu vas ?</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt:0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"> Hello </p>
                <p className="my-5"> This is me </p>
                <p>+33(0)1.42.42.42</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer