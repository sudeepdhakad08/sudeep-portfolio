import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  isSending: boolean = false;
  messageSent: boolean = false
  errorMessage: string = '';

sendEmail(form: HTMLFormElement, event: Event): void {
  event.preventDefault();

  this.isSending = true;
  this.messageSent = false;
  this.errorMessage = '';

  emailjs.sendForm(
    'service_96odhmo',
    'template_cxairuu',
    form,
    {
      publicKey: '6otF601RyZdSGibT4'
    }
  )
  .then(() => {
    this.isSending = false;
    this.messageSent = true;
    form.reset();
  })
  .catch((error) => {
    this.isSending = false;
    this.errorMessage = 'Failed to send message. Please try again.';
    console.error('EmailJS Error:', error);
  });
}

}
