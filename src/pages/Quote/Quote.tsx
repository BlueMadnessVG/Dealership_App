import CarInfoSection from "./CarInfoSection/CarInfoSection";
import CommentsSection from "./CommentsSection/CommentsSection";
import PaymentInfoSection from "./PaymentInfoSection/PaymentInfoSection";
import PersonalInfoSection from "./PersonalInfoSection/PersonalInfoSection";
import SubmitSection from "./SubmitSection/SubmitSection";
import styles from "./Quote.module.css";
import { useQuoteForm } from "./hooks/useQuoteForm";
import { FormProvider } from "react-hook-form";
import { useQuoteFormSubmit } from "./hooks/useQuoteFormSubmit";

import carImg from "@/assets/images/Fiat-card-no-bg.png";
import type { QuoteFormData } from "@/schemas/quote.schema";
import { useSnackbar } from "notistack";

function Quote() {
  const methods = useQuoteForm();
  const { enqueueSnackbar } = useSnackbar();

  const { submitForm, isSubmitting, success, error } = useQuoteFormSubmit({
    notify: (message, variant) => enqueueSnackbar(message, { variant }),
  });

  const onSubmit = async (data: QuoteFormData) => {
    const result = await submitForm(data);
  };

  return (
    <div className={styles.quotePage}>
      <header className={styles.quotePage_header}>
        <span className={styles.quotePage_header_title}>COTIZADOR</span>
        <span className={styles.quotePage_header_sub}>
          ELIGE EL FIAT QUE VA CONTIGO
        </span>
        <h1>Elige el tuyo</h1>
        <img src={carImg} alt="" />
      </header>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={styles.quote_Form}
        >
          <CarInfoSection />
          <PersonalInfoSection />
          <PaymentInfoSection />
          <CommentsSection />
          <SubmitSection />
        </form>
      </FormProvider>
    </div>
  );
}

export default Quote;
