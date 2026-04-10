"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type FloatingContactProps = {
  labels: {
    button: string;
    panelTitle: string;
    panelDescription: string;
    contactName: string;
    contactRole: string;
    sendRequest: string;
    callPrefix: string;
    close: string;
  };
  phoneNumber: string;
  email: string;
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.31.56 3.59.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.19 2.47.56 3.59a1 1 0 0 1-.24 1l-2.2 2.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v.22l-9 5.4-9-5.4V6Zm0 2.56V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.56l-8.49 5.1a1 1 0 0 1-1.02 0L3 8.56Z" />
    </svg>
  );
}

export function FloatingContact({ labels, phoneNumber, email }: FloatingContactProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const normalizedPhone = useMemo(() => phoneNumber.replace(/\s+/g, ""), [phoneNumber]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!open) {
        return;
      }
      if (wrapperRef.current && event.target instanceof Node && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[340px] rounded-xl border border-slate-200 bg-white p-6 shadow-2xl sm:w-[360px]">
          <div className="flex items-start justify-between">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">{labels.panelTitle}</h3>
            <button
              type="button"
              aria-label={labels.close}
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700"
            >
              ×
            </button>
          </div>

          <p className="mt-3 text-base leading-relaxed text-slate-700">{labels.panelDescription}</p>

          <div className="mt-4 flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-lg font-semibold text-slate-700">
              {labels.contactName
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </div>
            <p className="mt-3 text-lg font-medium text-slate-900">{labels.contactName}</p>
            <p className="text-sm text-slate-500">{labels.contactRole}</p>
          </div>

          <div className="mt-5 grid gap-2">
            <Link
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-base font-semibold text-slate-800 transition-all duration-200 hover:border-brand-300 hover:bg-slate-50"
            >
              <MailIcon />
              {labels.sendRequest}
            </Link>
            <Link
              href={`tel:${normalizedPhone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-base font-semibold text-slate-800 transition-all duration-200 hover:border-brand-300 hover:bg-slate-50"
            >
              <PhoneIcon />
              {labels.callPrefix} {phoneNumber}
            </Link>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
          <PhoneIcon />
        </span>
        {labels.button}
      </button>
    </div>
  );
}
