'use client';
import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link className={clsx(
            "flex h-[48px] items-center gap-3 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 md:px-6",
            {
              "bg-sky-100 text-blue-600": pathname === link.href,
              "text-gray-600": pathname !== link.href,
            }
          )} key={link.name} href={link.href}>
            <LinkIcon className="h-6 w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}