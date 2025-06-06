/**
 * Utility function to submit email to Mailchimp
 */
export const submitToMailchimp = (email: string, name?: string) => {
  try {
    // Create a hidden form to submit to Mailchimp
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://babysme.us1.list-manage.com/subscribe/post?u=e8b13927a2c82b4313e9b167f&id=8ee2a116a1';
    form.target = '_self';
    form.style.display = 'none';

    // Add name field if provided
    if (name) {
      const nameField = document.createElement('input');
      nameField.type = 'text';
      nameField.name = 'FNAME';
      nameField.value = name;
      form.appendChild(nameField);
    }

    // Add email field
    const emailField = document.createElement('input');
    emailField.type = 'email';
    emailField.name = 'EMAIL';
    emailField.value = email;
    form.appendChild(emailField);

    // Append form to body and submit
    document.body.appendChild(form);
    form.submit();
    
    return true;
  } catch (error) {
    console.error('Error submitting to Mailchimp:', error);
    return false;
  }
};