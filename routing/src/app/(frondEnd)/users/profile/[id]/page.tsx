"use client"
import ProfileCard from "@/components/ProfileCard";
type Params = {
  id: string;
};

export default function Page(context: { params: Params }) {
  const userId = parseInt(context.params.id);
  return (
    <>
      <ProfileCard userID={userId}/>
    </>
  );
}
