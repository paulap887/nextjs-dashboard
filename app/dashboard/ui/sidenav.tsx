import Link from "next/link";
import AcmeLogo from "@/app/ui/acme-logo";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-6">
      <Link className="mb-2 block text-xl font-bold" href="/dashboard">
        <AcmeLogo />
      </Link>
      <div className="mt-auto flex grow flex-col gap-3 md:gap-5">
        <NavLinks />
      </div>
    </div>
  );
}
