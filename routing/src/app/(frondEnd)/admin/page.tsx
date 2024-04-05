"use client"
import SearchForm from "@/components/SearchForm";
import TableUser from "@/components/TableUser";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const id = context.params.id;
  return (
    <>
      <TableUser />
    </>
  );
}
