import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FAQ } from '../../../../Shared/Interfaces/faq';
import { StatisticsSection } from "../../home/components/statistics-section/statistics-section";

@Component({
  selector: 'app-about-page',
  imports: [StatisticsSection],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage implements OnInit {
  
  faqs: FAQ[] = [
    {
      id: 1,
      question: "What makes AL Aik Designs different from other landscaping companies?",
      answer: "We combine award-winning design expertise with premium materials and cutting-edge technology. Our team includes certified landscape architects, pool engineers, and IoT specialists who work together to create truly unique outdoor living spaces that exceed expectations. With over 28 years of experience in the UAE, we have successfully delivered residential and commercial projects to the highest quality standards.",
      isOpen: false
    },
    {
      id: 2,
      question: "How long does a typical landscaping or pool project take?",
      answer: "Project timelines vary based on scope and complexity. Simple landscape installations typically take 2-4 weeks, while comprehensive pool and landscape projects can take 8-16 weeks. We provide detailed project schedules during the consultation phase and keep you informed throughout the entire process to ensure timely completion.",
      isOpen: false
    },
    {
      id: 3,
      question: "Do you provide warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our work. Structural work comes with a 5-year warranty, plants and soft landscaping have a 1-year guarantee, and pool equipment is covered for 2 years. We also offer ongoing maintenance services to ensure your investment continues to thrive.",
      isOpen: false
    },
    {
      id: 4,
      question: "Can you work within my budget?",
      answer: "Absolutely. We work with clients across various budget ranges and can customize our designs and material selections to meet your financial requirements. During our initial consultation, we'll discuss your budget and provide options that maximize value while achieving your vision.",
      isOpen: false
    },
    {
      id: 5,
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits and coordinate inspections as part of our comprehensive service. Our team is familiar with local regulations and building codes, ensuring your project complies with all requirements from start to finish.",
      isOpen: false
    },
    {
      id: 6,
      question: "What maintenance services do you provide?",
      answer: "We offer complete maintenance services including pool cleaning and chemical balancing, irrigation system maintenance, seasonal plant care, lawn maintenance, and equipment servicing. Our maintenance packages can be customized to your specific needs and schedule.",
      isOpen: false
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Scroll to top when component loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  toggleFAQ(faqId: number): void {
    this.faqs = this.faqs.map(faq => ({
      ...faq,
      isOpen: faq.id === faqId ? !faq.isOpen : faq.isOpen
    }));
  }
}