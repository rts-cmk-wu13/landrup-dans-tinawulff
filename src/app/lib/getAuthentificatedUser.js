import { cookies } from 'next/headers';
import { getUserDetails } from '../lib/dal';
import { redirect } from 'next/navigation';

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken');

  if (!token) {
    redirect('/login');
  }

  const userIdCookie = cookieStore.get("userId");
  const userId = userIdCookie?.value;

  const user = await getUserDetails(userId);
  return user;
}