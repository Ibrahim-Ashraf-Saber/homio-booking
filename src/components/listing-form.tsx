"use client";

import { useFormStatus } from "react-dom";

type ListingFormProps = {
  action: (formData: FormData) => Promise<void>;
  submitLabel?: string;
  submittingLabel?: string;
  initialValues?: {
    title: string;
    category: string;
    description: string;
    locationValue: string;
    pricePerNight: number;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    imageSrc: string;
    imageGallery: string[];
  };
};

export default function ListingForm({
  action,
  submitLabel = "Publish listing",
  submittingLabel = "Publishing...",
  initialValues,
}: ListingFormProps) {
  return <div>ListingForm</div>;
}

type FieldInputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  min?: number;
  defaultValue?: string | number;
};

function FieldInput({
  name,
  label,
  placeholder,
  type = "text",
  min,
  defaultValue,
}: FieldInputProps) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-medium text-ink-600">{label}</span>
      <input
        name={name}
        required
        type={type}
        min={min}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="rounded-xl border border-ink-300 px-3 py-2 text-sm text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}
type FieldTextareaProps = {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  defaultValue?: string;
};

function FieldTextarea({
  name,
  label,
  placeholder,
  className,
  defaultValue,
}: FieldTextareaProps) {
  return (
    <label className={`grid gap-1.5 ${className ?? ""}`}>
      <span className="text-xs font-medium text-ink-600">{label}</span>
      <textarea
        name={name}
        required
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={4}
        className="rounded-xl border border-ink-300 px-3 py-2 text-sm text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
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
