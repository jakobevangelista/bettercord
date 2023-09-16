import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl='/' />
      <ModeToggle />
      <div className=''>This is a protected route</div>
    </>
  );
}
