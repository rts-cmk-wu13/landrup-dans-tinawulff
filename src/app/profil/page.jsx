
// her skal vi lave get request på brugers information, vi skal bruge navn, type profil i header
// og i en section med "tilmeldte hold" eller "mine hold" (alt efter brugertypen).
// Her skal der være: article med hvert hold og heri information om holdet:
// holdnavn & tidspunkt og et link til holdets detaljeside om holdet.
// Koden skal hente/udskrive forskellig info alt efter om det er en default-role eller instructor-role.

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserDetails } from '../lib/dal';
import { FaUserLarge } from "react-icons/fa6";
import Link from 'next/link';

export default async function ProfilPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken');
  if (!token) {
    redirect('/login');
  }

  const userIdCookie = cookieStore.get("userId");
  const userId = userIdCookie?.value;

  console.log("userId:", userId);
  

  const user = await getUserDetails(userId);
  console.log("user:", user);
  console.log("token:", token?.value);
  

  if (user.role === "default") {
    // vis medlem-UI
    return (
        <>
            <h1 className='text-xl font-semibold text-center my-4'>Min profil</h1>
        
            <div className='bg-[#E9E9E9] text-[#003147] text-center py-4 flex flex-col items-center gap-2'>
                <FaUserLarge size={50}/>
                <p className='text-2xl font-semibold'>{user.firstname} {user.lastname}</p>
                <p>Medlem</p>
            </div>

            <section className='m-4'>
                <h2 className='text-xl font-semibold mt-8'>Tilmeldte hold</h2>
                {user.activities.map(activity => (
                        <article className='my-4 bg-white/80 p-4 rounded-lg text-[#003147]'
                            key={activity.id}>
                            <h3 className='text-xl font-semibold'>{activity.name}</h3>
                            <p className='mb-3'>{activity.weekday.charAt(0).toUpperCase() + activity.weekday.slice(1)} kl. {activity.time}</p>
                            <Link className='bg-[#003147] text-white px-6 py-2 rounded-lg text-sm shadow-xl'
                             href={`/aktiviteter/${activity.id}`}>Vis hold</Link>
                        </article>
                    ))}
            </section>

        </>
    )
  }

    else if (user.role === "instructor") {
    // vis instruktør-UI'
    return (
        <>
            <h1 className='text-xl font-semibold text-center my-4'>Min profil</h1>
        
            <div className='bg-[#E9E9E9] text-[#003147] text-center py-4 flex flex-col items-center gap-2'>
                <FaUserLarge size={50}/>
                <p className='text-2xl font-semibold'>{user.firstname} {user.lastname}</p>
                <p>{user.role}</p>
            </div>

            <section className='m-4'>
                <h2 className='text-xl font-semibold mt-8'>Mine hold</h2>
             {user.activities.map(activity => (
                        <article className='my-4 bg-white/80 p-4 rounded-lg text-[#003147]'
                            key={activity.id}>
                            <h3 className='text-xl font-semibold'>{activity.name}</h3>
                            <p className='mb-2'>{activity.weekday.charAt(0).toUpperCase() + activity.weekday.slice(1)} kl. {activity.time}</p>
                            
                            <div className='flex justify-between'>
                            <p className='mb-3'>Max. deltagere: {activity.maxParticipants}</p>
                            <p className='mb-3'>Tilmeldte: </p>
                            </div>
                            <Link className='bg-[#003147] text-white px-6 py-2 rounded-lg text-sm shadow-xl'
                             href={`/aktiviteter/${activity.users}`}>Deltagerliste</Link>
                        </article>
                    ))}
            </section>
        </>
    )
    }
}