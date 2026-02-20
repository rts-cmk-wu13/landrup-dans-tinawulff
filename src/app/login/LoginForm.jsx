'use client';
// Hvis vi skal bruge hooks, så skal det være en client component med 'use client' i toppen.
import { useActionState } from "react";
import { loginUser } from "./action";   

const initialState = {
    values: {
        username: '',
        password: ''
    },
    errors: undefined
};

export default function LoginForm() {

    const [state, formAction, isPending] = useActionState(loginUser, initialState);

    //console.log(state);

    return (
        <form action={formAction}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" defaultValue={state.values.username}/>
                {/* defaultvalue indsættes ud fra state, her er state enten inistialState eller den opdaterede state, med brugerens input values, optional chaining er derfor ikke nødvendig her, fordi vi har defineret en inistialState. */}
                {state.errors?.username && <p>{state.errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" defaultValue={state.values.password} />
                {state.errors?.password && <p>{state.errors.password}</p>}
            </div>
            <div>
                { state.errors?.form && <p>{state.errors.form}</p> }
                <button className="text-black" type="submit" disabled={isPending}>{ isPending ? "Logger ind..." : "Log ind" }</button>
            </div>
        </form>
    )
}   



// useActionState er et specielt React-hook,
// som Next.js har lavet til app-router
// (det er ikke et almindeligt React-hook, men et Next.js-hook).
//
// Det bruges til at håndtere state (tilstand) for forms,
// hvor du bruger server actions—altså funktioner,
// der kører på serveren, når en formular bliver sendt.

// De tre ting, du får fra useActionState, er altid:
// 1. state (tilstanden)
// 2. formAction (submit-funktionen)
// 3. isPending (om der er loading) 
// Men du bestemmer selv, hvad de skal hedde!
// Du kan kalde dem lige hvad du vil, fx:
// const [minState, minSubmit, loader] = useActionState(loginUser, initialState);
// Det vigtige er rækkefølgen, ikke navnet.
// Det er bare almindelig JavaScript “destructuring”.

// så hvis man skal forklare det til en eksamen siger man:
// jeg bruger useActionState hooket, som indeholder tre return/output values, som er:
// 1.tilstanden (jeg kalder den her "state"),
// 2. submit-funktionen (som her hedder formAction),
// 3. loading-status - (til at gøre noget imens min formAction kører/håndteres,så man fx ikke stopper funktionen i at køre ved at trykke flere gange på submit knappen og genstarter funktionens kald(?))
// denne kalder jeg isPending..
// så det er hvad hookets return values hedder som jeg sætter min useActionState's returnvalues til at "være" - (altså destructurere)
// som så bruger de to parametre:
// 1. loginUser som er min action-funktions navn (der altså køres ved nr. 2 submit og
// 2. min initialsState (? som henviser til "state"/tilstanden, og denne defineres værdierne af ovenfor?) 

// anden måde at forklare det på er:
// useActionState er et hook, der hjælper med at håndtere formularer, der bruger server actions i Next.js. 
// Det returnerer tre ting: 
// 1. Tilstanden (state): Her gemmes de aktuelle værdier og eventuelle fejl for formularen.
// 2. Submit-funktionen (formAction): Denne funktion bruges som action på min <form>, så loginUser-funktionen kaldes, når formularen submitter.
// 3. Loading-status (isPending): En boolean, der viser om submit-funktionen er i gang, så jeg fx kan disable submit-knappen imens.

// Jeg kalder hooket sådan her:
// const [state, formAction, isPending] = useActionState(loginUser, initialState);

// UseActionsState tager to argumenter:
// 1. loginUser er min action-funktion, som håndterer login-processen, når formularen submitter.
// 2. initialState er et objekt, der definerer startværdierne for state (fx tomme felter og ingen fejl).
// Rækkefølgen på hvad der står først i useActionState funktionen parametre er:
// Først “hvad skal ske?” ("funktionen"; loginUser), så hvad er "starttilstanden?” (initialState).
// Altså: “Først handlingen, så startværdierne”, så er du godt dækket ind!

// state vs initialState:
// initialState er det objekt (gemt i en const), du giver til useActionState som startpunkt for state. (Det er det, der fortæller hooket, hvordan state skal se ud i starten.)
// state er den aktuelle tilstand, som hooket håndterer og opdaterer, når formularen submitter og loginUser-funktionen kører. Det er det, du bruger i din komponent for at få adgang til de AKTUELLE værdier og fejl.
// I starten vil state være det samme som initialState, men
// initialState bruges kun til at fortælle hooket, hvad state skal være i starten.
// Derefter “overtager” state, og det er den, du bruger i resten af din komponent.

// Opsummering:
// initialState = startpunktet (ændrer sig aldrig)
// state = nuværende tilstand (kan ændre sig)
// De er ens i starten, men state kan ændre sig, initialState kan ikke.

