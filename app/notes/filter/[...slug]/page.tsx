import css from "./NoteClient.module.css";
import NoteListClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

export default async function App() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["notes", { query: "", page: 1 }],
    queryFn: () => fetchNotes(1, ""),
  });
  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteListClient />
      </HydrationBoundary>
    </div>
  );
}