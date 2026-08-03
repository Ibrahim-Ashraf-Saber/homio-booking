"use client";

import { useFormStatus } from "react-dom";

export default function ListingForm() {
  return <div>ListingForm</div>;
}

function SubmitButton({
  submitLabel,
  submittingLabel,
}: {
  submitLabel: string;
  submittingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
    >
      {pending ? submittingLabel : submitLabel}
    </button>
  );
}
