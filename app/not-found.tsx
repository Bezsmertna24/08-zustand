"use client";

import type { Metadata } from 'next';
import css from './not-found.module.css';

export const metadata: Metadata = {
  title: '404 - Page not found | NoteHub',
  description: 'Ця сторінка не існує в NoteHub',
  openGraph: {
    title: '404 - Page not found | NoteHub',
    description: 'Ця сторінка не існує в NoteHub',
    url: 'https://your-vercel-url.vercel.app/404',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function NotFoundPage() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </main>
  );
}
