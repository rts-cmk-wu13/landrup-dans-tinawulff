
import Image from "next/image";

export default function HomeFooter() {
    return (
        <footer className="text-white p-4 text-center flex flex-col">
            <Image className="self-center pb-4" src="/logo-lille.png" alt="Landrup Dans Logo" width={50} height={50} />
            <p className="font-semibold text-xl mb-6">Landrup Dans</p>
            <p>Pulsen 8 . 4000 Roskilde</p>
            <p>Tlf. 3540 4550</p>
        </footer>
    );
}