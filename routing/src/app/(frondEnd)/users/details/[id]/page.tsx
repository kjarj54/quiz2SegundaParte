"use client"
import ProfileDetails from "@/components/ProfileDetails";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const userId = parseInt(context.params.id);
  return (
    <>
      <ProfileDetails userID={userId}/>
    </>
  );
}
