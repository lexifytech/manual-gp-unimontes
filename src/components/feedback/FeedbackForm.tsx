"use client";

import { useState, type FormEvent } from "react";
import {
  feedbackCategories,
  feedbackPeriodOptions,
  feedbackRecipientEmail,
} from "@/content/feedbackConfig";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function FeedbackForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = String(data.get("_gotcha") ?? "");
    if (honeypot.trim() !== "") {
      setState("success");
      form.reset();
      return;
    }

    const category = String(data.get("category") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const period = String(data.get("period") ?? "");
    const contactEmail = String(data.get("contactEmail") ?? "").trim();
    const pageContext = String(data.get("pageContext") ?? "").trim();

    if (!category || message.length < 10) {
      setState("error");
      setErrorDetail("Escolha um tema e escreva pelo menos 10 caracteres na sugestão.");
      return;
    }

    const categoryLabel =
      feedbackCategories.find((c) => c.value === category)?.label ?? category;

    const payload = {
      _subject: `[Manual GP] Sugestão — ${categoryLabel}`,
      _template: "table",
      category: categoryLabel,
      message,
      period: period || "Não informado",
      pageContext: pageContext || "Não informado",
      contactEmail: contactEmail || "Não informado",
      _captcha: "false",
    };

    setState("submitting");
    setErrorDetail(null);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(feedbackRecipientEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const body = (await response.json()) as { success?: string; message?: string };

      if (!response.ok || body.success !== "true") {
        throw new Error(body.message ?? "Falha ao enviar");
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorDetail(
        "Não foi possível enviar agora. Tente de novo em alguns minutos ou escreva diretamente para a coordenação.",
      );
    }
  }

  if (state === "success") {
    return (
      <div
        className="not-prose rounded-xl border border-uni-border bg-white p-6 shadow-sm"
        role="status"
      >
        <p className="text-lg font-semibold text-uni-blue-dark">Obrigado pelo feedback!</p>
        <p className="mt-2 text-sm text-uni-muted leading-relaxed">
          Sua sugestão foi registrada para a equipe do projeto. Se informou e-mail, a coordenação
          poderá entrar em contato quando necessário.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-4 text-sm font-semibold text-uni-link underline"
        >
          Enviar outra sugestão
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="not-prose max-w-xl space-y-5 rounded-xl border border-uni-border bg-white p-6 shadow-sm"
      noValidate
    >
      <p className="text-sm text-uni-muted leading-relaxed">
        Respostas são anônimas por padrão. Use o e-mail apenas se quiser retorno da coordenação.
      </p>

      <HoneypotField />

      <FormField>
        <label htmlFor="feedback-category" className="form-label">
          Sobre o que é a sugestão? <span className="text-uni-muted">(obrigatório)</span>
        </label>
        <select id="feedback-category" name="category" required className="form-control" defaultValue="">
          <option value="" disabled>
            Selecione um tema
          </option>
          {feedbackCategories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField>
        <label htmlFor="feedback-message" className="form-label">
          Descreva a sugestão ou o que faltou <span className="text-uni-muted">(obrigatório)</span>
        </label>
        <textarea
          id="feedback-message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="form-control resize-y"
          placeholder="Ex.: incluir passo a passo para cadastro no RU; link do edital de monitoria desatualizado…"
        />
      </FormField>

      <FormField>
        <label htmlFor="feedback-page" className="form-label">
          Página ou assunto relacionado <span className="text-uni-muted">(opcional)</span>
        </label>
        <input
          id="feedback-page"
          name="pageContext"
          type="text"
          className="form-control"
          placeholder="Ex.: Campus, Matriz, Oportunidades"
          autoComplete="off"
        />
      </FormField>

      <FormField>
        <label htmlFor="feedback-period" className="form-label">
          Em que momento do curso você está? <span className="text-uni-muted">(opcional)</span>
        </label>
        <select id="feedback-period" name="period" className="form-control" defaultValue="">
          {feedbackPeriodOptions.map((item) => (
            <option key={item.value || "na"} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField>
        <label htmlFor="feedback-email" className="form-label">
          E-mail para contato <span className="text-uni-muted">(opcional)</span>
        </label>
        <input
          id="feedback-email"
          name="contactEmail"
          type="email"
          className="form-control"
          placeholder="seu.email@academico.unimontes.br"
          autoComplete="email"
        />
      </FormField>

      {state === "error" && errorDetail && (
        <p className="text-sm text-red-700" role="alert">
          {errorDetail}{" "}
          <a href={`mailto:${feedbackRecipientEmail}`} className="underline font-medium">
            {feedbackRecipientEmail}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-uni-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-uni-blue-light disabled:opacity-60"
      >
        {state === "submitting" ? "Enviando…" : "Enviar sugestão"}
      </button>
    </form>
  );
}

function FormField({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5">{children}</div>;
}

function HoneypotField() {
  return (
    <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
      <label htmlFor="feedback-gotcha" className="sr-only">
        Não preencher
      </label>
      <input
        id="feedback-gotcha"
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}