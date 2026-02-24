
import { getActivities } from '../lib/dal';
import Link from 'next/link';

export default async function InstructorProfile( { userId } ) {

const allActivities = await getActivities();
const instructorActivities = allActivities.filter(
  activity => activity.instructorId === Number(userId)
);

    return (
    <section className='m-4'>
        <h2 className='text-xl font-semibold mt-8'>Mine hold</h2>
        {instructorActivities.map(activity => (
            <article className='my-4 bg-white/80 p-4 rounded-lg text-[#003147]'
                key={activity.id}>
                <h3 className='text-xl font-semibold'>{activity.name}</h3>
                <p className='mb-2'>{activity.weekday.charAt(0).toUpperCase() + activity.weekday.slice(1)} kl. {activity.time}</p>
                            
                <div className='flex justify-between'>
                    <p className='mb-3'>Max. deltagere: {activity.maxParticipants}</p>
                    <p className='mb-3'>Tilmeldte: {activity.users.length}</p>
                </div>
                <Link className='bg-[#003147] text-white px-6 py-2 rounded-lg text-sm shadow-xl'
                href={`/deltagerliste/${activity.id}`}>Deltagerliste</Link> {/* Opdateret link til deltagerliste */}
            </article>
        ))}
    </section>
    )
}