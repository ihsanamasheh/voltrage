import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import type { TemplateEntry } from "./registry";

export interface ContactMessageProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactMessageEmail({
  name = "Website visitor",
  email = "unknown@example.com",
  subject = "Product Query",
  message = "",
}: ContactMessageProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New contact message from ${name} — ${subject}`}</Preview>
      <Body style={{ backgroundColor: "#0a0a0a", margin: 0, padding: "32px 0" }}>
        <Container
          style={{
            backgroundColor: "#111111",
            border: "1px solid #262626",
            maxWidth: "560px",
            padding: "32px",
          }}
        >
          <Text
            style={{
              color: "#8f8f8f",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Voltrage — Contact Form
          </Text>
          <Heading
            style={{
              color: "#f5f5f5",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "22px",
              margin: "12px 0 24px",
            }}
          >
            {subject}
          </Heading>

          <Section>
            <Text style={detail}>
              <strong style={label}>Name:</strong> {name}
            </Text>
            <Text style={detail}>
              <strong style={label}>Email:</strong> {email}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#262626", margin: "24px 0" }} />

          <Text style={{ ...detail, whiteSpace: "pre-wrap" }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const detail: React.CSSProperties = {
  color: "#dcdcdc",
  fontFamily: "Helvetica, Arial, sans-serif",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 8px",
};

const label: React.CSSProperties = { color: "#8f8f8f" };

export const template = {
  component: ContactMessageEmail,
  displayName: "Contact form message",
  subject: (data: Record<string, unknown>) =>
    `[Voltrage] ${(data["subject"] as string) ?? "Contact"} — ${(data["name"] as string) ?? "Website visitor"}`,
  to: "info@vrsupplements.com",
  previewData: {
    name: "Alex Rivera",
    email: "alex@example.com",
    subject: "Wholesale",
    message: "Hi, I'd like to stock Voltrage in my gym. Can you send pricing?",
  },
} satisfies TemplateEntry;
