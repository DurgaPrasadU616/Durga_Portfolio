import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  topic: z.string().min(3, "Please add a short topic"),
  message: z.string().min(10, "A message helps me reply well"),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const contactDefaults: ContactValues = {
  name: "",
  email: "",
  topic: "",
  message: "",
};