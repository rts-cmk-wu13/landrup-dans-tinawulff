import { getAuthenticatedUser } from "../lib/getAuthentificatedUser";
import { FaUserLarge } from "react-icons/fa6";

 export default async function InstructorHeader() {

    const user = await getAuthenticatedUser(); //Hjælpefunktion til at få id'et på den der er logget ind og hente brugerdata.

    return (
        <>
            <h1 className='text-xl font-semibold text-center my-4'>Min profil</h1>
        
            <div className='bg-[#E9E9E9] text-[#003147] text-center py-4 flex flex-col items-center gap-2'>
                <FaUserLarge size={50}/>
                <p className='text-2xl font-semibold'>{user.firstname} {user.lastname}</p>
                <p>{user.role}</p>
            </div>
        </>
    );
}