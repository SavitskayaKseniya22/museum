'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './nav-link.module.scss';

function NavLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link className={styles['nav-link']} href={href}>
      {children}
    </Link>
  );
}

export default NavLink;
