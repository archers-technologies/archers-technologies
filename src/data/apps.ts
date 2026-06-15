import mergexImage from "@/assets/apps/mergex.png";
import velonErpImage from "@/assets/apps/velon-erp.png";

export interface AppFaq {
  question: string;
  answer: string;
}

export interface AppProduct {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  about: string;
  image: string;
  heroTitle: string;
  heroSubtitle: string;
  keyHighlights: string[];
  features: string[];
  howItWorks: string[];
  useCases: string[];
  benefits: string[];
  faq: AppFaq[];
  seo: {
    title: string;
    description: string;
  };
  category: string;
}

export const featuredApps: AppProduct[] = [
  {
    slug: "mergex",
    name: "MergeX",
    tagline: "Merge Thousands of CSV Files into One in Minutes",
    shortDescription:
      "A fast, lightweight desktop application that combines hundreds or thousands of CSV files with identical headers into a single, clean output file.",
    longDescription:
      "MergeX is a professional desktop application designed to simplify large-scale CSV file consolidation. Organizations often receive data from multiple departments, systems, locations, or reporting periods in separate files. Manually merging these files can be time-consuming and error-prone. MergeX automates the process by allowing users to select or drag and drop multiple CSV files, validate matching headers, and generate a single consolidated output file. The application uses stream-based processing to efficiently handle large datasets while minimizing memory consumption. With built-in progress tracking, cancellation support, header mismatch detection, encoding compatibility, and post-merge file access options, MergeX provides a reliable solution for operations, finance, logistics, reporting, analytics, and data management teams.",
    about:
      "MergeX was built to solve one of the most common challenges in data management: consolidating multiple CSV files quickly and accurately. Whether you're managing reports, operational data, customer records, or analytics exports, MergeX helps transform scattered files into a single organized dataset with minimal effort.",
    image: mergexImage,
    heroTitle: "Merge Thousands of CSV Files with One Click",
    heroSubtitle:
      "Fast, accurate, and reliable CSV file consolidation for businesses, analysts, and data teams.",
    keyHighlights: [
      "Merge 1000+ CSV files",
      "Header validation",
      "Large file support",
      "Progress tracking",
      "Cross-platform compatibility",
      "Stream-based performance",
    ],
    features: [
      "Drag-and-drop CSV upload",
      "Merge 1000+ CSV files",
      "Automatic header validation",
      "Header mismatch detection",
      "Skip non-matching files",
      "Single consolidated output file",
      "Stream-based processing",
      "Progress tracking",
      "Cancel running operations",
      "UTF-8 and ANSI encoding support",
      "Open merged file directly",
      "Open destination folder after completion",
      "Windows and macOS support",
    ],
    howItWorks: [
      "Select or drag-and-drop multiple CSV files.",
      "MergeX validates headers across all files.",
      "The application identifies any mismatched files.",
      "Users can continue, skip mismatches, or cancel.",
      "MergeX merges all valid records into one output file.",
      "Download or open the merged file instantly.",
    ],
    useCases: [
      "Sales reporting consolidation",
      "Financial data aggregation",
      "Inventory and warehouse reporting",
      "Logistics and shipment records",
      "HR attendance and payroll exports",
      "CRM data consolidation",
      "Survey and research datasets",
      "Government and compliance reporting",
      "Business intelligence preparation",
      "Data migration projects",
    ],
    benefits: [
      "Saves significant manual effort",
      "Reduces spreadsheet errors",
      "Handles large datasets efficiently",
      "Improves reporting workflows",
      "Increases operational productivity",
      "Ensures data consistency",
      "Works without complex setup",
      "Suitable for technical and non-technical users",
    ],
    faq: [
      {
        question: "What file formats are supported?",
        answer: "MergeX currently focuses on CSV file merging.",
      },
      {
        question: "Can MergeX handle thousands of files?",
        answer:
          "Yes. MergeX is designed to efficiently process large batches of CSV files.",
      },
      {
        question: "What happens if headers do not match?",
        answer:
          "MergeX detects mismatches and allows users to skip incompatible files.",
      },
      {
        question: "Does MergeX work offline?",
        answer:
          "Yes. MergeX is a desktop application and can be used without an internet connection.",
      },
      {
        question: "Is MergeX available for Windows and macOS?",
        answer: "Yes. MergeX supports both platforms.",
      },
    ],
    seo: {
      title: "MergeX | CSV File Merge Software for Windows & macOS",
      description:
        "MergeX is a powerful CSV merge tool that combines thousands of CSV files into one output file. Features header validation, mismatch detection, large file support, and cross-platform compatibility.",
    },
    category: "Desktop Application",
  },
  {
    slug: "velon-erp",
    name: "Velon ERP",
    tagline: "Smart. Simple. Scalable.",
    shortDescription:
      "A modern cloud-based, multi-tenant ERP platform to manage CRM, quotations, inventory, sales, procurement, billing, and operational workflows from one system.",
    longDescription:
      "Velon ERP is a scalable SaaS ERP solution built for startups, SMEs, and growing enterprises. The platform combines CRM, quotation management, inventory control, procurement, sales operations, customer management, role-based access control, audit logs, subscription management, and multi-workspace capabilities into one secure environment. Built with a modern architecture, Velon ERP enables organizations to streamline business processes, improve visibility, reduce manual work, and support growth through automation and centralized data management.",
    about:
      "Velon ERP was created to simplify business management through a unified platform that connects sales, operations, inventory, procurement, customer management, and administration. Its flexible architecture allows businesses to scale while maintaining control, visibility, and efficiency.",
    image: velonErpImage,
    heroTitle: "Manage Your Entire Business from One Platform",
    heroSubtitle:
      "Streamline sales, CRM, quotations, inventory, procurement, billing, departments, branches, and team collaboration in a powerful cloud-based platform.",
    keyHighlights: [
      "Multi-tenant architecture",
      "CRM & customer management",
      "Inventory & procurement",
      "Quotation management",
      "Dashboard & analytics",
      "Role-based access control",
    ],
    features: [
      "Multi-Tenant Architecture",
      "CRM & Customer Management",
      "Quotation Management",
      "Sales Pipeline Tracking",
      "Inventory Management",
      "Procurement Management",
      "Branch Management",
      "Department Management",
      "User & Role Management",
      "Audit Logs & Activity Tracking",
      "Subscription & Billing Management",
      "Secure Authentication & OTP Verification",
      "Customer Portal",
      "Dashboard & Analytics",
      "Document & Record Management",
      "Workflow Automation",
    ],
    howItWorks: [
      "Create your organization workspace.",
      "Add departments, branches, and users.",
      "Manage leads and customers through CRM.",
      "Generate and approve quotations.",
      "Track inventory and procurement activities.",
      "Monitor business operations from centralized dashboards.",
      "Manage subscriptions, permissions, and reporting.",
    ],
    useCases: [
      "Trading Companies",
      "Distribution Businesses",
      "Manufacturing Companies",
      "Service Providers",
      "Construction Firms",
      "Logistics Companies",
      "Retail Businesses",
      "Multi-Branch Organizations",
      "SaaS Businesses",
      "Growing SMEs",
    ],
    benefits: [
      "Increased operational efficiency",
      "Centralized business management",
      "Reduced manual processes",
      "Better team collaboration",
      "Improved customer relationship management",
      "Enhanced data security",
      "Scalable multi-branch operations",
      "Faster quotation and sales workflows",
      "Complete business visibility",
    ],
    faq: [
      {
        question: "What is Velon ERP?",
        answer:
          "A cloud-based ERP platform designed to manage business operations from one place.",
      },
      {
        question: "Is Velon ERP suitable for multiple branches?",
        answer: "Yes, it supports multi-branch and multi-department operations.",
      },
      {
        question: "Does Velon ERP include CRM?",
        answer: "Yes, CRM and quotation management are core modules.",
      },
      {
        question: "Is Velon ERP secure?",
        answer:
          "Yes, it includes role-based permissions, audit logs, authentication, and tenant isolation.",
      },
      {
        question: "Can Velon ERP be customized?",
        answer:
          "Yes, enterprise deployments can be customized to meet specific business requirements.",
      },
    ],
    seo: {
      title:
        "Velon ERP | Modern Cloud ERP, CRM, Inventory & Business Management Software",
      description:
        "Velon ERP is a powerful cloud-based ERP platform featuring CRM, inventory management, quotations, procurement, billing, branches, departments, and multi-tenant business management tools.",
    },
    category: "Cloud SaaS Platform",
  },
];

export function getAppBySlug(slug: string): AppProduct | undefined {
  return featuredApps.find((app) => app.slug === slug);
}
