import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { profile, contactInfo } from '@/data/content.tsx';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to backend later
    window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
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
          className='mt-12'
        >
          <p className='font-body text-sm text-foreground/60 text-center mb-8 max-w-md mx-auto'>
            {contactInfo.description}
          </p>

          <div className='flex items-center justify-center gap-6 mb-10 font-mono text-xs text-muted-foreground'>
            <span className='flex items-center gap-1.5'>
              <Mail size={14} className='text-primary' />
              {profile.email}
            </span>
            <span className='flex items-center gap-1.5'>
              <MapPin size={14} className='text-primary' />
              {profile.location}
            </span>
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
              <label className='font-mono text-xs text-muted-foreground block mb-1'>
                name:
              </label>
              <input
                type='text'
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className='w-full bg-background border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-hidden transition-colors'
              />
            </div>
            <div>
              <label className='font-mono text-xs text-muted-foreground block mb-1'>
                email:
              </label>
              <input
                type='email'
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className='w-full bg-background border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-hidden transition-colors'
              />
            </div>
            <div>
              <label className='font-mono text-xs text-muted-foreground block mb-1'>
                message:
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className='w-full bg-background border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-hidden transition-colors resize-none'
              />
            </div>
            <Button variant='neon' type='submit' className='w-full'>
              <Send size={14} />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
