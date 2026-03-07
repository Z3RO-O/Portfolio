import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { profile, contactInfo } from '@/data/content.tsx';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    email: '',
    name: '',
    message: '',
    loading: false,
    alertmessage: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ ...form, loading: true });

    const templateParams = {
      from_name: form.email,
      user_name: form.name,
      to_name: profile.email,
      message: form.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
          setForm({
            ...form,
            loading: false,
            alertmessage: 'Thank you! I will get back to you soon.',
          });
          toast.success(form.alertmessage, { position: 'bottom-center' });
        },
        error => {
          console.log(error.text);
          setForm({
            ...form,
            alertmessage: 'Sorry, something went wrong. Please try again.',
          });
          toast.error(form.alertmessage, { position: 'bottom-center' });
        }
      );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='py-24 relative'>
      <div className='container px-4 max-w-3xl mx-auto'>
        <SectionHeading title='Contact' tag='ping' />

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='font-display text-lg text-foreground/80 text-center my-8 max-w-md mx-auto'>
            {contactInfo.description}
          </p>

          <div className='flex items-center justify-center mb-8'>
            <a
              href={`mailto:${profile.email}`}
              className='flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-white/80 transition-colors'
            >
              <Mail size={14} className='text-primary' />
              <span>{profile.email}</span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className='glass-panel rounded-lg p-6 space-y-4 max-w-md mx-auto'
          >
            <div className='flex items-center gap-2 mb-2'>
              <span className='w-2.5 h-2.5 rounded-full bg-destructive/60' />
              <span className='w-2.5 h-2.5 rounded-full bg-yellow-500/60' />
              <span className='w-2.5 h-2.5 rounded-full bg-primary/60' />
              <span className='ml-2 font-mono text-xs text-muted-foreground'>
                contact.sh
              </span>
            </div>

            <div>
              <label className='font-mono text-xs text-white/80 block mb-1'>
                Name:
              </label>
              <input
                type='text'
                name='name'
                required
                value={form.name}
                onChange={handleChange}
                className='w-full bg-background border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-hidden transition-colors'
              />
            </div>
            <div>
              <label className='font-mono text-xs text-white/80 block mb-1'>
                Email:
              </label>
              <input
                type='email'
                name='email'
                required
                value={form.email}
                onChange={handleChange}
                className='w-full bg-background border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-hidden transition-colors'
              />
            </div>
            <div>
              <label className='font-mono text-xs text-white/80 block mb-1'>
                Message:
              </label>
              <textarea
                name='message'
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className='w-full bg-background border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-hidden transition-colors resize-none'
              />
            </div>
            <Button variant='neon' type='submit' className='w-full' disabled={form.loading}>
              <Send size={14} />
              {form.loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
