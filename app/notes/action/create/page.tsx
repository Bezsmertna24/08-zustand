import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';

export const metadata = {
  title: 'Create note',
  description: 'Створіть нову нотатку в NoteHub',
  openGraph: {
    title: 'Create note',
    description: 'Створіть нову нотатку в NoteHub',
    url: 'https://your-vercel-url.vercel.app/notes/action/create',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
