import { PageIntro } from "@/components/ui/page-intro";
import { StatCard } from "@/components/ui/stat-card";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { uiShell } from "@/lib/ui-classes";
import { BadgeCheck, Building2, DollarSign, Sparkles } from "lucide-react";

export default async function HostDashboardPage() {
  const user = await requireUser();

  const listings = await prisma.listing.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  const listingCount = listings.length;
  const avgNightlyRate = listingCount
    ? Math.round(
        listings.reduce((total, listing) => total + listing.pricePerNight, 0) /
          listingCount,
      )
    : 0;
  const totalCapacity = listings.reduce(
    (total, listing) => total + listing.guestCount,
    0,
  );

  return (
    <main className={uiShell.pageContainer}>
      <PageIntro
        badge="Host workspace"
        icon={Sparkles}
        title={`Welcome back, ${user.name ?? "Host"}`}
        description="Manage your homes, publish new listings, and keep every stay ready for guests."
      />

      <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          label="Active Listings"
          value={listingCount}
          icon={Building2}
        />
        <StatCard
          label="Average Nightly Rate"
          value={`$${avgNightlyRate}`}
          icon={DollarSign}
        />
        <StatCard
          label="Total Guest Capacity"
          value={totalCapacity}
          icon={BadgeCheck}
        />
      </section>
    </main>
  );
}
