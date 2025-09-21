import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us-section.html',
  styleUrl: './contact-us-section.css',
  host: {
    'ngSkipHydration': 'true' // Add this temporarily
  }
})
export class ContactUsSection implements OnInit {
  contactForm!: FormGroup;
  isLoading = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    
    // Initialize EmailJS (uncomment when you set up EmailJS)
    emailjs.init('cQcClmeoXxp9y4CO9'); // Replace with your actual public key
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-()]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      projectDetails: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isLoading = true;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;

    const formData = this.contactForm.value;

    try {
      // Method 1: Using EmailJS (Recommended for frontend-only solution)
      await this.sendEmailWithEmailJS(formData);
      
      // Method 2: Alternative - Send to your backend API (if you have one)
      // await this.sendEmailToBackend(formData);
      
      this.showSuccessMessage = true;
      this.contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      this.showErrorMessage = true;
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 5000);
    } finally {
      this.isLoading = false;
    }
  }

  private async sendEmailWithEmailJS(formData: any): Promise<void> {
    // Uncomment and configure when you set up EmailJS
    
    const templateParams = {
      to_email: 'medo.aiman56@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.projectDetails,
      reply_to: formData.email
    };

    const response = await emailjs.send(
      'service_4xpt069',    // Replace with your EmailJS service ID
      'template_0xuca03',   // Replace with your EmailJS template ID
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
    

    // Temporary simulation (remove when EmailJS is set up)
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Email would be sent with data:', formData);
  }

  private async sendEmailToBackend(formData: any): Promise<void> {
    // Alternative method if you have a backend API
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'medo.aiman56@gmail.com',
        subject: `New Project Inquiry from ${formData.fullName}`,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        projectDetails: formData.projectDetails
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  // Helper methods for template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${this.getFieldLabel(fieldName)} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['pattern']) return 'Please enter a valid phone number';
      if (field.errors['minlength']) return `${this.getFieldLabel(fieldName)} is too short`;
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      email: 'Email Address',
      projectDetails: 'Project Details'
    };
    return labels[fieldName] || fieldName;
  }
}