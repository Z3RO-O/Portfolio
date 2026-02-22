import { useState, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { meta } from '@/content_option';
import { contactConfig } from '@/content_option';
import PageHead from '@/components/common/PageHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FormData {
  email: string;
  name: string;
  message: string;
  loading: boolean;
  show: boolean;
  alertmessage: string;
  variant: string;
}

const Contact = () => {
  const [formData, setFormdata] = useState<FormData>({
    email: '',
    name: '',
    message: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormdata(prev => ({ ...prev, loading: true }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result: { text: string }) => {
          console.log(result.text);
          setFormdata(prev => ({
            ...prev,
            loading: false,
            alertmessage: 'Success! Thank you for your message',
            variant: 'success',
            show: true,
          }));
        },
        (error: { text?: string }) => {
          console.error(error);
          setFormdata(prev => ({
            ...prev,
            loading: false,
            alertmessage: `Failed to send. ${error.text ?? 'Unknown error'}`,
            variant: 'danger',
            show: true,
          }));
        }
      );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <PageHead
        title={`${meta.title} | Contact`}
        description={meta.description}
      />
      <div className='w-full px-4'>
        <h1 className='text-4xl sm:text-5xl mb-4 font-bold'>Contact Me</h1>
        <hr className='border-border' />
      </div>

      {formData.show && (
        <div
          className={`relative p-4 my-4 rounded-lg border ${
            formData.variant === 'success'
              ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-900/20 dark:border-green-600 dark:text-green-400'
              : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-900/20 dark:border-red-600 dark:text-red-400'
          }`}
        >
          <p className='my-0 pr-8'>{formData.alertmessage}</p>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute top-2 right-2'
            onClick={() => setFormdata(prev => ({ ...prev, show: false }))}
            aria-label='Close'
          >
            ×
          </Button>
        </div>
      )}

      <div className='flex flex-col lg:flex-row w-full mt-8 lg:mt-16 gap-8 lg:gap-12 px-4'>
        <div className='flex flex-col gap-4 w-full lg:w-5/12'>
          <h3 className='text-2xl sm:text-3xl font-semibold'>Get in touch</h3>
          <p className='text-muted-foreground'>
            <strong>Email:</strong>{' '}
            <a
              className='underline hover:text-foreground'
              href={`mailto:${contactConfig.YOUR_EMAIL}`}
            >
              {contactConfig.YOUR_EMAIL}
            </a>
          </p>
          {contactConfig.YOUR_PHONE && (
            <p className='text-muted-foreground'>
              <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
            </p>
          )}
          <p className='text-muted-foreground'>{contactConfig.description}</p>
          <p className='text-muted-foreground'>{contactConfig.description2}</p>
        </div>

        <Card className='w-full lg:w-7/12'>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='Your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='your@email.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  name='message'
                  placeholder='Your message...'
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type='submit' size='lg' disabled={formData.loading}>
                {formData.loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {formData.loading && (
        <div className='fixed top-0 left-0 right-0 h-1 z-[9999] bg-primary overflow-hidden'>
          <div className='h-full w-full animate-[shift-rightwards_1s_ease-in-out_infinite] bg-secondary' />
        </div>
      )}
    </div>
  );
};

export default Contact;
