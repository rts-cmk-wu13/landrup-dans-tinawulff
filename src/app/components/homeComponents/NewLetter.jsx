'use client';
import { useActionState } from "react";
import { registerEmail } from "./action";   

const initialState = {
    values: {
        email: ''
    },
    errors: undefined
};

export default function NewLetter() {
 const [state, formAction, isPending] = useActionState(registerEmail, initialState);

return (
   
 <section>
    <h2 className="text-4xl">Nyhedsbrev</h2>

    <p className="text-m leading-[1.2]">Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>

    {state.success && (
    <p>Tak for din tilmelding til nyhedsbrevet, du vil snart modtage mails fra os.</p>
    )}
    <form className="flex" action={formAction}>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" defaultValue={state.values.email} placeholder="Email"/>
            {/* defaultvalue indsættes ud fra state, her er state enten inistialState eller den opdaterede state, med brugerens input values, optional chaining er derfor ikke nødvendig her, fordi vi har defineret en inistialState. */}
            {state.errors?.email && <p>{state.errors.email}</p>}
        </div>
        <div>
            { state.errors?.form && <p>{state.errors.form}</p> }
            <button className="text-black" type="submit" disabled={isPending}>{ isPending ? "regitrerer mail..." : "Tilmeld" }</button>
        </div>
    </form>

</section>
)

}