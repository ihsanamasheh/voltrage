import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.enum(["Product Query", "Order", "Wholesale"]),
  message: z.string().trim().min(1, "Please enter a message").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("./contact-email.server");

    try {
      await sendContactEmail(data);
    } catch (error) {
      console.error("[contact] email send failed", error);
      throw new Error("We couldn't send your message. Please try again.");
    }

    return { ok: true as const };
  });
