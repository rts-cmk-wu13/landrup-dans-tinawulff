// getAuthenticatedUser bruges også heri, min hjælpefunktion i lib-mappen til at hente profil-data på den der er logget ind.
import { getActivityDetails } from "../../lib/dal";
import { FaUserLarge } from "react-icons/fa6";
import InstructorHeader from '../../profil/InstructorHeader';

export default async function DeltagerlistePage( {params} ) {
    const { id } = await params;
    const activityId = Number(id);
    const aktivitet = await getActivityDetails(activityId)
    
    console.log(aktivitet)

    return (
        <>
            <InstructorHeader />

            <section className="p-6">
                <h1 className="text-xl font-semibold mb-2">{aktivitet.name}</h1>
                <h2 className="text-lg font-semibold mb-4">Deltagere:</h2>
                <ul>
                    {aktivitet.users.map((user) => (
                        <li className="flex justify-between bg-white/80 p-2 rounded-lg text-[#003147] mb-4"
                            key={user.id}>
                            <p className="self-center leading-none"><FaUserLarge size={15} className="inline mr-2"/>{user.firstname} {user.lastname}</p>
                            <p>{user.age} år</p>
                        </li>
                    ))}
                </ul>

            </section>
        </>
    )
 }