//Detaljeside for holdet som hentes ud fra dets id
import { getActivityDetails } from '../../lib/dal';
import { notFound } from 'next/navigation';
import Image from 'next/image';


export default async function ActivityDetailPage({ params }) {
        const { id } = await params
    const aktivitet = await getActivityDetails(id)

    console.log(aktivitet)

      if (aktivitet.succes === false) {
    return (
        <main> 
            <h1>Oops, something went wrong.</h1> 
            <p>{aktivitet.message}</p>
        </main>
    )
  }

  if (!aktivitet.name) return notFound();
    return (
        <main>
            <article>
            <Image width={300} height={300} src={aktivitet.asset.url} alt={aktivitet.name} unoptimized/>
            <h1>{aktivitet.name}</h1>
            <p>{aktivitet.minAge} - {aktivitet.maxAge}</p>
            <p>{aktivitet.description}</p>
            </article>
        </main>
    )
    
}