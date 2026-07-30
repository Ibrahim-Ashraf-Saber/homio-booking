import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { uiShell } from "@/lib/ui-classes";

type BookingsPageProps = {
  searchParams: Promise<{
    message?: string;
  }>;
};

export default async function BookingsPage({
  searchParams,
}: BookingsPageProps) {
  const user = await requireUser();
  const query = await searchParams;

  const reservations = await prisma.reservation.findMany({
    where: { userId: user.id },
    include: { listing: true },
    orderBy: { createdAt: "desc" },
  });

  const today = new Date();
  const activeBookings = reservations.filter(
    (reservation) => reservation.endDate >= today,
  );

  const totalCharged = reservations.reduce(
    (sum, reservation) => sum + reservation.totalPrice,
    0,
  );

  return (
    <main className={uiShell.pageContainer}>
      {/* TODO: PageIntro Component */}
      <p>PageIntro </p>

      {query.message ? (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">
          {query.message}
        </p>
      ) : null}

      <section className="mt-5 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* TODO: StatCard Component */}
        <p>StatCard</p>
      </section>

      <section className="mt-6 space-y-3 md:space-y-4">
        {reservations.length === 0 ? (
          // TODO: EmptyState Component
          <p>EmptyState</p>
        ) : (
          reservations.map((reservation) => (
            // TODO: ReservationCard Component
            <p>ReservationCard</p>
          ))
        )}
      </section>
    </main>
  );
}
