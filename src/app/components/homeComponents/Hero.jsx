      
    import Image from "next/image";
    
    import heroImg from "../../../assets/heroimg.jpg";
    import landrupLogo from "../../../assets/landrup-logo.png";
    import { BsChevronDoubleDown } from "react-icons/bs";

      
      
    export default function HeroComp() {
    return (
    <section className="flex flex-col h-[100vh] justify-between z-full max-w-full">
        <Image width={1499} height={1000} className="absolute h-[100vh] w-full object-cover" src={heroImg} alt="Hero Image" />
        <Image width={600} height={400} className="relative z-10 mt-20 max-w-[90%]" src={landrupLogo} alt="Landrup Logo" />
        <div className="flex flex-col mx-20">
        <button className="bg-[#E9E9E9] text-[#003147] text-lg align-center items-center p-4 rounded-lg z-10 h-[53px] w-full max-w-[300px] self-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] leading-none relative align-end">Log ind her</button>
        <button className="z-10 relative self-center"><BsChevronDoubleDown size={70} className=" text-[#003147] font-extralight mt-6 mb-4" /></button>
        </div>
     </section>
    )

    }