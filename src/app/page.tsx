import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home');
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
