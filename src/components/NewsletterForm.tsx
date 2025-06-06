import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewsletterFormProps {
  buttonText?: string;
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  buttonText = 'Prenumerera', 
  className = '' 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Create iframe for target
      const iframeId = 'mailchimp-iframe';
      let iframe = document.getElementById(iframeId) as HTMLIFrameElement;
      
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = iframeId;
        iframe.name = iframeId;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }
      
      // Create a form that targets the iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://babysme.us1.list-manage.com/subscribe/post?u=e8b13927a2c82b4313e9b167f&id=8ee2a116a1';
      form.target = iframeId;
      form.style.display = 'none';

      // Add email field
      const emailField = document.createElement('input');
      emailField.type = 'email';
      emailField.name = 'EMAIL';
      emailField.value = email;
      form.appendChild(emailField);

      // Append form to body and submit
      document.body.appendChild(form);
      form.submit();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
      }, 100);

      setMessage('Tack för din prenumeration!');
      setEmail('');
    } catch (error) {
      console.error('Error submitting to Mailchimp:', error);
      setMessage('Ett fel uppstod. Försök igen senare.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Din e-postadress"
          className="rounded-full mb-2"
          required
        />
        <Button 
          type="submit" 
          className="w-full btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Skickar...' : buttonText}
        </Button>
        {message && (
          <p className="mt-2 text-sm text-center">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;