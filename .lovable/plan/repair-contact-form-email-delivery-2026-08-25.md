# Repair contact-form email delivery

The contact form and server submission path already exist, and the current build passes. The confirmed blocker is that this project has no sender email domain configured, while the existing sender requires one.

## Implementation

1. **Configure the sender domain**
   - Connect an email sender subdomain based on the owned `vrsupplements.com` domain through Lovable's email setup.
   - Email delivery will activate after its DNS verification completes.

2. **Use the supported app-email setup**
   - Scaffold the managed email template registry, server-only send helper, and preview route for the configured domain.
   - Keep delivery synchronous and managed by Lovable; add no database tables, queues, or scheduled jobs.

3. **Create the contact notification template**
   - Build a branded contact-message email containing the submitted name, email, category, and message.
   - Send each submission only to the existing admin inbox, with the visitor's address as reply-to.
   - Use a submission-specific idempotency key to prevent accidental duplicate sends.

4. **Wire and harden the form**
   - Keep the current fields, validation, layout, and no-storage behavior.
   - Replace the custom raw-email implementation with the managed template helper.
   - Preserve clear success feedback and return an actionable failure message when the sender domain is still verifying or delivery fails.

5. **Verify end to end**
   - Confirm the project builds cleanly.
   - Submit the form in the preview and verify its success/error state.
   - Check the email delivery event after the sender domain is active.

## User action required

Open the email setup and connect a sender subdomain for `vrsupplements.com`. Exact DNS records will be shown there; sending cannot work until that domain is configured and verified.
