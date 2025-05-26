import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
   imports: [FormsModule] 
})
export class ContactComponent {
  
  onSubmit(form: NgForm) {
    if (form.invalid) return;

    emailjs.send('service_l752g96', 'template_09oxlsp', form.value, 'Re2-coVdA1vvv09gC')
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      })
      .catch((error) => {
        alert('Failed to send message. Error: ' + JSON.stringify(error));
      });
  }
}
