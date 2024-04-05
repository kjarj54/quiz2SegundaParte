"use client"
import FormAdmin from "@/components/FormAdmin";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const id = parseInt(context.params.id)
  return (
    <>
      <FormAdmin userID={id}/>
    </>
  );
}
