'use client';
import { useActionState } from 'react';
import { AddUserToActivity } from "./addActivity-action";


export default function AddActivityButton({ userId, activityId, alreadyJoined }) {
  const initialState = { success: false, message: "" };
  const [state, formAction, isPending] = useActionState(AddUserToActivity, initialState);

  return (
    <div className="absolute z-10">
      <form action={formAction}>
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="activityId" value={activityId} />
        <button
          className="bg-[#003147] text-white p-3 rounded-lg w-[200px] text-m m-8"
          type="submit"
          disabled={alreadyJoined || isPending}
        >
          {alreadyJoined ? "Allerede tilmeldt" : "Tilmeld"}
        </button>
        {state.message && <p>{state.message}</p>}
      </form>
    </div>
  );
}