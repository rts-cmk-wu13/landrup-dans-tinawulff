'use client'

import { useActionState } from "react";
import { CreateUser } from "./creat-action";  

const initialState = {
    values: {
        username: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: '',
        age: ''
    },
    errors: undefined
};


    export default function CreateUserForm() {
     const [state, formAction, isPending] = useActionState(CreateUser, initialState);

    return (
        <form action={formAction} 
        className="mx-7 flex flex-col gap-6">
            <h1 className="text-4xl my-4">Opret bruger</h1>

            <div>
                <input className="bg-[#E9E9E9] w-full text-[#003147] p-3 text-lg"
                 type="text"
                 name="firstname"
                 defaultValue={state.values.firstname}
                 placeholder="Fornavn"/>
                {/* defaultvalue indsættes ud fra state, her er state enten inistialState eller den opdaterede state, med brugerens input values, optional chaining er derfor ikke nødvendig her, fordi vi har defineret en inistialState. */}
                {state.errors?.firstname && <p>{state.errors.firstname}</p>}
            </div>

            <div>
                <input className="bg-[#E9E9E9] w-full text-[#003147] p-3 text-lg"
                 type="text"
                 name="lastname"
                 defaultValue={state.values.lastname}
                 placeholder="Efternavn"/>
                {/* defaultvalue indsættes ud fra state, her er state enten inistialState eller den opdaterede state, med brugerens input values, optional chaining er derfor ikke nødvendig her, fordi vi har defineret en inistialState. */}
                {state.errors?.lastname && <p>{state.errors.lastname}</p>}
            </div>


            <div>
                <input className="bg-[#E9E9E9] w-full text-[#003147] p-3 text-lg"
                 type="text"
                 name="username"
                 defaultValue={state.values.username}
                 placeholder="Brugernavn"/>
                {/* defaultvalue indsættes ud fra state, her er state enten inistialState eller den opdaterede state, med brugerens input values, optional chaining er derfor ikke nødvendig her, fordi vi har defineret en inistialState. */}
                {state.errors?.username && <p>{state.errors.username}</p>}
            </div>

            <div>
                <input className="bg-[#E9E9E9] w-full text-[#003147] p-3 text-lg"
                 type="text"
                 name="age"
                 defaultValue={state.values.age}
                 placeholder="Alder"/>
                {/* defaultvalue indsættes ud fra state, her er state enten inistialState eller den opdaterede state, med brugerens input values, optional chaining er derfor ikke nødvendig her, fordi vi har defineret en inistialState. */}
                {state.errors?.age && <p>{state.errors.age}</p>}
            </div>

            <div>
                <input className="bg-[#E9E9E9] w-full text-[#003147] p-3 text-lg"
                type="password"
                name="password"
                defaultValue={state.values.password}
                placeholder="Adgangskode"/>
                {state.errors?.password && <p>{state.errors.password}</p>}
            </div>

               <div>
                <input className="bg-[#E9E9E9] w-full text-[#003147] p-3 text-lg"
                type="password"
                name="confirmPassword"
                defaultValue={state.values.confirmPassword}
                placeholder="Gentag Adgangskode"/>
                {state.errors?.confirmPassword && <p>{state.errors.confirmPassword}</p>}
            </div>

            <div className="mx-10 flex justify-center">
                { state.errors?.form && <p>{state.errors.form}</p> }
                <button className="text-[#003147] bg-[#E9E9E9] p-3 w-full max-w-[300px] rounded-lg text-lg"
                type="submit"
                disabled={isPending}>{ isPending ? "Opretter bruger..." : "Opret bruger" }</button>
            </div>
            {state.success && <p className="text-green-600">{state.success}</p>}
    
        </form>
    )
}