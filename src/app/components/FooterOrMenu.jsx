
'use client';
import { usePathname } from 'next/navigation';
import Menu from './menu';
import HomeFooter from './HomeFooter';

export default function FooterOrMenu() {
  const pathname = usePathname();
  return pathname === '/' ? <HomeFooter /> : <Menu />;
}