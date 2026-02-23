'use server';
import { cookies } from 'next/headers';

export async function AddUserToActivity(prevState, formData) {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken');
  if (!token) return { success: false, message: "Ikke logget ind" };


  const userId = formData.get('userId');
  const activityId = formData.get('activityId');

  const response = await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  });

  if (!response.ok) {
    return { success: false, message: "Tilmelding fejlede" };
  }
  return { success: true, message: "Tilmeldt!" };
}
