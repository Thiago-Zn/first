import { AppLayoutClient } from "@/components/layout/app-layout-client";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayoutClient>{children}</AppLayoutClient>;
}

