//hent ind lisetevisning med aktiviteter/hold med fetch og ved klik på aktiviteten gå til detaljesiden/den aktivitets id -> /aktiviteter/[id]
import Menu from '../components/Menu';

import { getActivities } from '../lib/dal';
import Link from 'next/link';
import ActivityCard from '../components/activityCard';
import Search from '../components/search/search';

export default async function ActivitiesPage () {
  const activities = await getActivities();

  if (activities.succes === false) {
    return (
        <main> 
            <h1>Oops, something went wrong.</h1> 
            <p>{activities.message}</p>
        </main>
    )
  }

  return (
    <>
    <header>
      <Search />
    </header>
    <main className='pb-14'>
    <section >
     <h1 className='mx-8 my-4 text-4xl'>Aktiviteter</h1>

     { activities.map(activity => (
    <ActivityCard activity={activity} key={activity.id}/>
     ))}
    </section>
    </main>
    < Menu />
    </>
  );
}

// Derudover vises en knap hvor brugere kan klikke for at tilmelde sig denne aktivitet.
// Hvis en bruger allerede er tilmeldt denne aktivitet, vises teksten ”Forlad” på knappen og brugeren kan
// klikke for at forlade aktiviteten.
// Hvis en bruger ikke er logget ind, vises knappen ikke.

// Det skal ikke være muligt at tilmelde sig samme aktivitet flere gange. Derudover skal en bruger ikke kunne
// tilmelde sig aktiviteter, som foregår samme ugedag.
// Alle aktiviteter har en aldersbegrænsning. Det skal ikke være muligt at kunne tilmelde sig en aktivitet hvis
// man ikke er inden for den aktuelle begrænsning.