"use client";

import { FormEvent, useState } from "react";

type ContactEmailFormProps = {
  labels: {
    formTitle: string;
    nameLabel: string;
    emailInputLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendButton: string;
    defaultSubject: string;
    defaultMessage: string;
    toEmail: string;
  };
};

export function ContactEmailForm({ labels }: ContactEmailFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(labels.defaultSubject);
  const [message, setMessage] = useState(decodeURIComponent(labels.defaultMessage));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `${message}\n\nName: ${name}\nEmail: ${email}`;
    const mailtoUrl = `mailto:${labels.toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">{labels.formTitle}</h2>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">{labels.nameLabel}</label>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">{labels.emailInputLabel}</label>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">{labels.subjectLabel}</label>
          <input
            required
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">{labels.messageLabel}</label>
          <textarea
            required
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-700"
        >
          {labels.sendButton}
        </button>
      </form>
    </section>
  );
}
