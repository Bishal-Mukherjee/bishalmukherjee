"use client"

import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase"

const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(250, "Message must be at most 250 characters")
    .required("Message is required"),
})

type ContactValues = Yup.InferType<typeof contactSchema>

export function ContactForm() {
  const formik = useFormik<ContactValues>({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const { error } = await supabase
          .from("contact_messages")
          .insert([
            {
              name: values.name,
              email: values.email,
              message: values.message,
            },
          ])

        if (error) throw error

        toast.success("Message sent successfully! Thank you.")
        resetForm()
      } catch (err: any) {
        console.error("Error submitting form to Supabase:", err)
        toast.error(err.message || "Failed to send message. Please try again.")
      } finally {
        setSubmitting(false)
      }
    },
  })

  const fieldError = (field: keyof ContactValues) =>
    formik.touched[field] && formik.errors[field]
      ? formik.errors[field]
      : undefined

  return (
    <>
      <div className="rounded-2xl border border-outline-variant/10 bg-surface p-8 text-left shadow-[0_20px_60px_rgba(45,55,72,0.06)] transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(45,55,72,0.1)] md:p-12 dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
        <form onSubmit={formik.handleSubmit} noValidate className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name Input */}
            <div className="space-y-1">
              <Label
                htmlFor="form-name"
                className="mb-2 ml-2 text-label-md font-bold text-on-surface-variant"
              >
                Name
              </Label>
              <Input
                id="form-name"
                {...formik.getFieldProps("name")}
                className={`min-h-8 w-full rounded-md! border bg-background px-4 text-body-md text-foreground transition-all outline-none focus:ring-3 focus:ring-primary/20 ${
                  fieldError("name")
                    ? "border-error focus:border-error"
                    : "border-outline-variant/20 focus:border-primary"
                }`}
                placeholder="John Doe"
                type="text"
                disabled={formik.isSubmitting}
              />
              {fieldError("name") && (
                <p className="ml-2 text-xs text-error">{fieldError("name")}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <Label
                htmlFor="form-email"
                className="mb-2 ml-2 text-label-md font-bold text-on-surface-variant"
              >
                Email
              </Label>
              <Input
                id="form-email"
                {...formik.getFieldProps("email")}
                className={`min-h-8 w-full rounded-md! border bg-background px-4 text-body-md text-foreground transition-all outline-none focus:ring-3 focus:ring-primary/20 ${
                  fieldError("email")
                    ? "border-error focus:border-error"
                    : "border-outline-variant/20 focus:border-primary"
                }`}
                placeholder="john@example.com"
                type="email"
                disabled={formik.isSubmitting}
              />
              {fieldError("email") && (
                <p className="ml-2 text-xs text-error">{fieldError("email")}</p>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-1">
            <Label
              htmlFor="form-message"
              className="mb-2 ml-2 text-label-md font-bold text-on-surface-variant"
            >
              Message
            </Label>
            <Textarea
              id="form-message"
              {...formik.getFieldProps("message")}
              className={`min-h-28 w-full resize-none rounded-lg border bg-background px-4 text-body-md text-foreground transition-all outline-none focus:ring-3 focus:ring-primary/20 ${
                fieldError("message")
                  ? "border-error focus:border-error"
                  : "border-outline-variant/20 focus:border-primary"
              }`}
              placeholder="How can I help you?"
              disabled={formik.isSubmitting}
            />
            <div className="flex items-start justify-between">
              {fieldError("message") ? (
                <p className="ml-2 text-xs text-error">
                  {fieldError("message")}
                </p>
              ) : (
                <span />
              )}
              <span className="ml-auto text-sm text-on-surface-variant/50">
                {formik.values.message.length}/250
              </span>
            </div>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            className="mt-2 w-full rounded-2xl py-6 font-bold shadow-md transition-all active:scale-[0.98]"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>
        </form>
      </div>
    </>
  )
}

