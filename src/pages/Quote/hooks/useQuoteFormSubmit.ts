import type { QuoteFormData } from "@/types/quote.types";
import { useState } from "react";
import type { SnackbarKey, VariantType } from "notistack";

interface UseQuoteFormSubmitProps {
  notify: (message: string, variant: VariantType) => SnackbarKey;
}

interface SubmitResult {
  success: boolean;
  message: string;
}

export const useQuoteFormSubmit = ({ notify }: UseQuoteFormSubmitProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData: QuoteFormData): Promise<SubmitResult> => {
    if (isSubmitting) {
      return { success: false, message: "Submission already in progress" };
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const shouldSucceed = Math.random() > 0.1;

      if (!shouldSucceed) {
        throw new Error("Error simulado: Por Favor intente nuevamente");
      }

      const message = "Cotización enviada exitosamente";
      setSuccess(true);
      notify(message, "success");

      return { success: true, message };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar la cotización";
      setError(message);
      notify(message, "error");
      return { success: false, message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, success, submitForm };
};
