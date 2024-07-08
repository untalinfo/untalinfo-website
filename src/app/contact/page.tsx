'use client'

import { InputComponent } from "./ui/components/Input";
import styles from "./ContactPage.module.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./lib/schema";
import contactFields from "./lib/constants";
import { Toaster, toast } from "sonner";


export default function ContactPage() {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
    resolver: yupResolver(contactSchema),
  });

  const handleContact = (data: any) => {
    toast.success("Enviando datos a whatsApp de untalinfo");
    const sirenaNumber = "573192338714";
    const message = `Hola, soy ${data.name}, ${data.email}. ${data.message}`;
    setTimeout(() => {
      window.open(
        `https://wa.me/${sirenaNumber}?text=${encodeURIComponent(message)}`
      )
    }, 800)
  }

  return (
    <section className={styles.container_contact_page}>
      <h3>Conact me!</h3>
      <p>
        Tienes alguna idea o proyecto y crees que podemos trabajar escribeme
      </p>
      <form
        onSubmit={handleSubmit(handleContact)}
        className={styles.container_from}
      >
        <InputComponent
          type="text"
          placeholder="Nombre"
          {...register(contactFields.NAME)}
          error={errors[contactFields.NAME]?.message}
        />
        <InputComponent
          type="email"
          placeholder="Correo"
          {...register(contactFields.EMAIL)}
          error={errors[contactFields.EMAIL]?.message}
        />
        <InputComponent
          placeholder="Mensaje"
          {...register(contactFields.MESSAGE)}
          error={errors[contactFields.MESSAGE]?.message}
        />
        <button
          type="submit"
          className={styles.submit_button}
          disabled={!errors || !isValid}
        >
          Contactar
        </button>
      </form>
      <Toaster richColors />
    </section>
  );
}