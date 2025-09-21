"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import type { NoteResponse } from "@/lib/api";

import css from "./NotesClient.module.css";

interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [searchText, setSearchText] = useState("");
  const [debouncedText] = useDebounce(searchText, 500);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [debouncedText, tag]);

  const { data, isLoading, isError, error } = useQuery<NoteResponse, Error>({
    queryKey: ["notes", debouncedText, page, tag],
    queryFn: () => fetchNotes(page, debouncedText || "", tag),
    placeholderData: (prevData: NoteResponse | undefined): NoteResponse | undefined => prevData,
  });

  const totalPages = data?.totalPages || 0;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox searchText={searchText} onUpdate={setSearchText} />
        {totalPages > 1 && (
          <Pagination
            pageCount={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
        <Link href="/notes/action/create" className={css.createButton}>
          Create note +
        </Link>
      </header>

      <main>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {(error as Error).message}</p>}
        {!isLoading && !isError && data?.notes?.length === 0 && (
          <p>No notes found</p>
        )}
        {data?.notes && data.notes.length > 0 && <NoteList notes={data.notes} />}
      </main>
    </div>
  );
}
