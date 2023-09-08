'use client';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { sendEmail } from '@/actions/sendEmail';
import useSectionInView from '@/hook/use-section-in-view';
import SectionHeading from './section-heading';
import SubmitButton from './submit-button';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title='Contact Me' />
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{' '}
        <a
          className='underline'
          href='mailto:tiahwang44@gmail.com'
        >
          tiahwang44@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className='mt-10 flex flex-col'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack outline-none focus:border-black focus:border-2'
          type='email'
          name='senderEmail'
          required
          maxLength={500}
          placeholder='Your Email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 resize-none outline-none focus:border-black focus:border-2'
          name='message'
          required
          maxLength={5000}
          placeholder='Your Message'
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
