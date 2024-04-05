"use client"
import Form from "@/components/Form";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const userId = parseInt(context.params.id);
  return (
    <>
      <Form userID={userId} />
    </>
  );
}
