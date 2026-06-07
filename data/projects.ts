export type Project = {
  slug: string;
  title: string;
  period: string;
  role: string;
  tagline: string;
  impact: string[];
  stack: string[];
  story: string;
  challenges: string[];
  nextSteps: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "duke-electric-vehicles-telemetry",
    title: "Duke Electric Vehicles Telemetry Platform",
    period: "Aug 2025 - Present",
    role: "Telemetry Device Lead, Electrical Communications",
    tagline: "Built a long-range telemetry system and live diagnostics dashboard for the race car.",
    impact: [
      "Enabled real-time CAN bus visibility from up to 2.5 miles via ESP32-to-ESP32 LoRa.",
      "Designed the electrical schematic and firmware pipeline for error-tolerant data acquisition.",
      "Developed a React + TypeScript dashboard to speed testing and race-day troubleshooting."
    ],
    stack: ["C++", "ESP32", "LoRa", "CAN Bus", "React", "TypeScript"],
    story:
      "I led the full loop from embedded communication design to UI delivery so electrical and software teams could debug from one shared source of truth.",
    challenges: [
      "Maintaining reliable packets under noisy race conditions.",
      "Creating a dashboard fast enough for live diagnostics without overloading operators."
    ],
    nextSteps: [
      "Add replay mode for test sessions.",
      "Expand telemetry channels and anomaly alerts."
    ],
    featured: true
  },
  {
    slug: "duke-enable-emg-prosthetics",
    title: "Duke eNable EMG Prosthetics",
    period: "Aug 2025 - Present",
    role: "Project Iteration + Project Leyman Member",
    tagline: "Prototyping adaptive assistive devices with cleaner EMG signal pathways.",
    impact: [
      "Developed and tested a 3D printed wrist adapter to improve daily usability for an amputee client.",
      "Contributed to full-scale robotic arm prototyping with DC motor actuation.",
      "Improved EMG acquisition circuitry to reduce noise before motor control integration."
    ],
    stack: ["EMG", "Circuit Design", "DC Motors", "3D Printing", "Control Prototyping"],
    story:
      "This project connects my engineering interests with direct user impact by combining hardware iteration, instrumentation, and human-centered design.",
    challenges: [
      "Reducing signal noise enough for stable intent detection.",
      "Balancing mechanical robustness with lightweight comfort."
    ],
    nextSteps: [
      "Tune closed-loop control behavior for smoother grip transitions.",
      "Test additional attachment designs with user feedback cycles."
    ],
    featured: true
  },
  {
    slug: "first-robotics-autonomous-systems",
    title: "FIRST Robotics Autonomous Systems",
    period: "Sep 2021 - Jun 2025",
    role: "Captain + Software & Electrical Subteam Lead",
    tagline: "Scaled a student robotics program while shipping reliable autonomous performance.",
    impact: [
      "Led a 10-person Java software team on vision localization, Kalman-filter sensor fusion, and path planning.",
      "Helped drive the team to FIRST World Championships for the first time in school history.",
      "Oversaw cross-functional mechanical and electrical integration while managing a $57,500 budget."
    ],
    stack: ["Java", "Computer Vision", "Kalman Filters", "Path Planning", "Electrical Integration"],
    story:
      "I grew from builder to captain by translating strategy into technical execution, and technical execution into team momentum.",
    challenges: [
      "Integrating software reliability with strict competition timelines.",
      "Aligning teams across electrical, software, and mechanical dependencies."
    ],
    nextSteps: [
      "Mentor younger teams on robust autonomous architecture.",
      "Document reusable competition-season engineering playbooks."
    ],
    featured: true
  },
  {
    slug: "forensis-record-digitization",
    title: "ForensiS Record Digitization Tooling",
    period: "Jun 2025 - Aug 2025",
    role: "Software and Hardware Engineer",
    tagline: "Cut manual production friction through software tooling and hardware support.",
    impact: [
      "Built a Python internal tool to digitize and process production records.",
      "Reduced repetitive manual entry and improved operational throughput.",
      "Supported scanner rebuilds and server-side issue diagnostics across technical operations."
    ],
    stack: ["Python", "Workflow Automation", "Hardware Diagnostics", "IT Troubleshooting"],
    story:
      "I worked across software and hardware constraints to improve business process efficiency and reliability for production teams.",
    challenges: [
      "Designing tools around non-technical user workflows.",
      "Diagnosing mixed hardware/software issues under production pressure."
    ],
    nextSteps: [
      "Package ingestion logic into reusable modules.",
      "Add reporting dashboards for throughput and data-quality metrics."
    ]
  }
];

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project]));
