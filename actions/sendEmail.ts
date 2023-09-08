'use server';

import React from 'react';
import { Resend } from 'resend';
import {
  getErrorMessage,
  validateString,
} from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid Sender Email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid Message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Tia Portfolio <onboarding@resend.dev>',
      to: 'tiahwang44@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
