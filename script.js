const programmes = [
  {
    title: "Public Health Technology",
    level: "ND / HND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Training for the Public Health Technician pathway in disease prevention, health promotion, surveillance, and community-based practice.",
    highlights: ["Environmental and community health", "Epidemiology and disease control", "Field practicum"]
  },
  {
    title: "Community Health",
    level: "ND / HND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Prepares students for primary healthcare support, community mobilisation, and health education services.",
    highlights: ["Primary health care", "Maternal and child health", "Community diagnosis"]
  },
  {
    title: "Family Healthcare Technology",
    level: "ND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "A practical pathway focused on family health support, preventive care, and basic clinical service delivery.",
    highlights: ["Family health records", "Health counselling", "Home and community care"]
  },
  {
    title: "Environmental Health Technology",
    level: "ND / HND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Covers sanitation, inspection, waste management, water quality, and environmental protection for public health.",
    highlights: ["Sanitation inspection", "Water and waste systems", "Occupational health"]
  },
  {
    title: "Health Education and Promotion",
    level: "ND / HND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Builds skills in behaviour change communication, health campaigns, school health, and wellness education.",
    highlights: ["Health communication", "Campaign planning", "Monitoring and evaluation"]
  },
  {
    title: "Epidemiology and Disease Control Technology",
    level: "ND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Introduces outbreak investigation, surveillance systems, immunisation support, and disease prevention.",
    highlights: ["Surveillance reports", "Outbreak response", "Vaccination programmes"]
  },
  {
    title: "Medical Laboratory Technology",
    level: "ND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Focuses on specimen collection, laboratory safety, diagnostic support, and quality control procedures.",
    highlights: ["Clinical chemistry basics", "Haematology support", "Laboratory safety"]
  },
  {
    title: "Medical Imaging Technology",
    level: "ND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "A diagnostic imaging pathway covering patient preparation, imaging equipment support, and radiation safety.",
    highlights: ["Imaging workflow", "Patient positioning", "Radiation protection"]
  },
  {
    title: "Health Information Management",
    level: "HND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Develops competence in medical records, hospital data, coding, reporting, and digital health information systems.",
    highlights: ["Medical records", "Health statistics", "Electronic health systems"]
  },
  {
    title: "Paramedics Technology",
    level: "ND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Practical emergency response training for pre-hospital care, triage, first aid, and ambulance service support.",
    highlights: ["Emergency response", "Basic life support", "Trauma care support"]
  },
  {
    title: "Dispensing Opticianry",
    level: "ND",
    cluster: "Health Sciences",
    filter: "health",
    summary: "Covers optical dispensing, lens handling, patient service, and eye-care retail practice.",
    highlights: ["Optical measurements", "Lens fitting", "Eye-care service"]
  },
  {
    title: "Dental Technology",
    level: "ND / HND",
    cluster: "Dental Sciences",
    filter: "dental",
    summary: "Training for Dental Health Technician and Dental Technology pathways, including oral appliances, prosthetic support, and dental materials.",
    highlights: ["Dental lab practice", "Prosthetic appliances", "Dental materials"]
  },
  {
    title: "Dental Therapy",
    level: "ND / HND",
    cluster: "Dental Sciences",
    filter: "dental",
    summary: "A patient-facing Dental Health Technician pathway covering preventive oral care, dental health education, and clinical support.",
    highlights: ["Oral health education", "Preventive dentistry", "Dental clinic practicum"]
  },
  {
    title: "Dental Surgery Technology",
    level: "ND / HND",
    cluster: "Dental Sciences",
    filter: "dental",
    summary: "Supports dental surgery teams through instrumentation, sterilisation, chairside assistance, and dental theatre workflow.",
    highlights: ["Chairside assistance", "Sterilisation protocols", "Dental surgery support"]
  },
  {
    title: "Pharmacy Technician",
    level: "ND",
    cluster: "Pharmacy",
    filter: "pharmacy",
    summary: "Prepares students for medicine handling, dispensing support, inventory control, and pharmacy service operations.",
    highlights: ["Dispensing support", "Drug inventory", "Pharmacy calculations"]
  },
  {
    title: "Pharmaceutical Technology",
    level: "ND",
    cluster: "Pharmacy",
    filter: "pharmacy",
    summary: "Introduces pharmaceutical production support, quality assurance, formulation basics, and industrial pharmacy operations.",
    highlights: ["Formulation support", "Quality assurance", "Production workflow"]
  },
  {
    title: "Medical Store Management Technology",
    level: "ND",
    cluster: "Pharmacy",
    filter: "pharmacy",
    summary: "Builds competence in medical inventory systems, procurement, storage, cold chain, and supply documentation.",
    highlights: ["Medical logistics", "Cold chain", "Stock documentation"]
  },
  {
    title: "Computer Science",
    level: "ND",
    cluster: "Information Technology",
    filter: "ict",
    summary: "Core computing programme covering programming, databases, web systems, and software problem solving.",
    highlights: ["Programming", "Databases", "Web development"]
  },
  {
    title: "Computer Engineering Technology",
    level: "ND / HND",
    cluster: "Information Technology",
    filter: "ict",
    summary: "Hardware and systems pathway for computer maintenance, embedded systems, networking, and digital electronics.",
    highlights: ["Computer hardware", "Networking", "Digital electronics"]
  },
  {
    title: "Software and Web Development",
    level: "HND",
    cluster: "Information Technology",
    filter: "ict",
    summary: "Advanced software pathway for modern websites, applications, APIs, and deployment workflows.",
    highlights: ["Frontend development", "Backend systems", "Deployment practice"]
  },
  {
    title: "Artificial Intelligence",
    level: "HND",
    cluster: "Information Technology",
    filter: "ict",
    summary: "Applied AI training for data preparation, machine learning basics, automation, and responsible AI use.",
    highlights: ["Data literacy", "Machine learning", "AI ethics"]
  },
  {
    title: "Cybersecurity Engineering",
    level: "Certificate / NOS",
    cluster: "Information Technology",
    filter: "ict",
    summary: "Skills-based route for network defence, security operations, threat awareness, and incident response basics.",
    highlights: ["Network security", "Threat monitoring", "Incident response"]
  },
  {
    title: "Data Science",
    level: "Certificate / NOS",
    cluster: "Information Technology",
    filter: "ict",
    summary: "Short-course pathway for data cleaning, analysis, visualisation, and practical reporting.",
    highlights: ["Data analysis", "Dashboards", "Reporting"]
  },
  {
    title: "Digital Content Creation",
    level: "Certificate / NOS",
    cluster: "Information Technology",
    filter: "ict",
    summary: "Creative digital skills for media production, design tools, editing, and online communication.",
    highlights: ["Content strategy", "Graphics", "Video editing"]
  }
];

const semesterLabels = {
  "nd1-1": "ND I - First Semester",
  "nd1-2": "ND I - Second Semester",
  "nd2-1": "ND II - First Semester",
  "nd2-2": "ND II - Second Semester"
};

const makeCourse = (code, title, unit = 2) => ({ code, title, unit });

const exactCourseCatalog = {
  "Public Health Technology": {
    "nd1-1": [
      makeCourse("PHT 111", "Introduction to Public Health", 3),
      makeCourse("MTH 101", "General Mathematics", 3),
      makeCourse("STA 101", "Introduction to Statistics", 2),
      makeCourse("GNS 230", "General Biology", 2),
      makeCourse("GST 101", "Use of English", 2),
      makeCourse("PHS 111", "Introduction to Pharmacology and Therapeutics", 2),
      makeCourse("COM 111", "Introduction to Computer Science", 3),
      makeCourse("PHT 112", "Immunology and Immunization", 3),
      makeCourse("GLT 111", "General Laboratory Technique", 3),
      makeCourse("DTH 115", "Introduction to Anatomy and Physiology", 3),
      makeCourse("GNS 127", "Citizenship Education", 2)
    ],
    "nd1-2": [
      makeCourse("GNS 213", "Introduction to Medical Sociology", 2),
      makeCourse("PHT 121", "Introduction to Health Education and Promotion", 3),
      makeCourse("GNS 112", "Introduction to General Chemistry", 3),
      makeCourse("PHT 122", "Introduction to Biostatistics", 3),
      makeCourse("EHT 125", "Public Health Nutrition", 3),
      makeCourse("PHT 124", "Substance Use and Abuse", 2),
      makeCourse("EHT 111", "Introduction to Environmental Health", 3),
      makeCourse("PHT 126", "Introduction to Demography", 2),
      makeCourse("CHO 136", "Introduction to Mental Health", 2),
      makeCourse("EHT 212", "Introduction to Epidemiology", 2),
      makeCourse("EED 126", "Introduction to Entrepreneurship Education", 2)
    ],
    "nd2-1": [
      makeCourse("PHT 201", "Introduction to Community Health", 2),
      makeCourse("PHT 211", "Introduction to Communicable and Non-Communicable Disease", 3),
      makeCourse("PHT 212", "Primary Health Care", 3),
      makeCourse("GNS 218", "Research Methodology", 2),
      makeCourse("PHT 213", "Introduction to Emergency Response", 2),
      makeCourse("PHT 214", "Maternal and Child Health", 3),
      makeCourse("STB 211", "Introduction to Microbiology and Parasitology", 3),
      makeCourse("PHT 216", "Seminar in Public Health", 2),
      makeCourse("EED 216", "Practice of Entrepreneurship", 2)
    ],
    "nd2-2": [
      makeCourse("PHT 221", "Public Health Planning and Management", 3),
      makeCourse("PHT 222", "First Aid", 3),
      makeCourse("EHT 211", "Introduction to Public Health Pest Management", 3),
      makeCourse("EHT 223", "Public/Environmental Health Laws", 3),
      makeCourse("PHT 225", "Global and Contemporary Health Issues", 2),
      makeCourse("EHT 315", "Health Economics", 2),
      makeCourse("PHT 227", "Project", 6),
      makeCourse("SIWES", "Supervised Industrial Work Experience Scheme", 0)
    ]
  },
  "Pharmacy Technician": {
    "nd1-1": [
      makeCourse("GNS 101", "Use of English I", 2),
      makeCourse("COM 101", "Introduction to Computing", 3),
      makeCourse("GNS 111", "Citizenship Education I", 2),
      makeCourse("STB 101", "General Biology", 5),
      makeCourse("STC 101", "General Chemistry", 5),
      makeCourse("STP 101", "General Physics", 5),
      makeCourse("MTH 111", "General Mathematics", 3),
      makeCourse("MSQ 111", "Mandatory Skills Qualification", 2),
      makeCourse("PTP 111", "Principles of Pharmacy Technician Practice I", 3),
      makeCourse("PTP 112", "Basic Dispensing Theory I", 3),
      makeCourse("PTP 113", "Introduction to Laboratory Techniques", 3)
    ],
    "nd1-2": [
      makeCourse("GNS 102", "Communication in English I", 2),
      makeCourse("GNS 121", "Citizenship Education II", 2),
      makeCourse("ENT 128", "Introduction to Entrepreneurship I", 3),
      makeCourse("STA 111", "Descriptive Statistics I", 2),
      makeCourse("PTP 121", "Anatomy and Physiology I", 4),
      makeCourse("PTP 122", "Basic Dispensing Theory II", 3),
      makeCourse("PTP 123", "Basic Dispensing Practical I", 3),
      makeCourse("PTP 124", "Pharmaceutical Calculations", 3),
      makeCourse("PTP 125", "Basic Microbiology I", 4),
      makeCourse("PTP 126", "Action and Uses of Medicines I", 3),
      makeCourse("PTP 127", "Primary Health Care I", 4),
      makeCourse("PTP 128", "SIWES", 4)
    ],
    "nd2-1": [
      makeCourse("ENT 126", "Introduction to Entrepreneurship II", 3),
      makeCourse("GNS 411", "Introduction to Psychology", 2),
      makeCourse("PTP 211", "Action and Uses of Medicines II", 4),
      makeCourse("PTP 212", "Basic Dispensing Theory III", 3),
      makeCourse("PTP 213", "Basic Dispensing Practical II", 3),
      makeCourse("PTP 214", "Anatomy and Physiology II", 4),
      makeCourse("PTP 215", "Logistics and Supply Chain Management System", 3),
      makeCourse("PTP 216", "Basic Microbiology II", 4),
      makeCourse("PTP 217", "Primary Health Care II", 4),
      makeCourse("PTP 218", "Research Methodology", 2)
    ],
    "nd2-2": [
      makeCourse("PTP 221", "Basic Dispensing Theory IV", 3),
      makeCourse("PTP 222", "Basic Dispensing Practical III", 3),
      makeCourse("PTP 223", "Computer Applications in Pharmacy", 3),
      makeCourse("PTP 224", "Anatomy and Physiology III", 4),
      makeCourse("PTP 225", "Principles of Pharmaceutical Technician Practice II", 2),
      makeCourse("PTP 226", "Action and Uses of Medicines III", 3),
      makeCourse("PTP 227", "Project", 4)
    ]
  },
  "Dental Technology": {
    "nd1-1": [
      makeCourse("STB 112", "Morphology and Physiology of Living Things", 3),
      makeCourse("STC 111", "General Principles of Chemistry", 3),
      makeCourse("STP 111", "Mechanics and Properties of Matter and Heat Energy", 3),
      makeCourse("STA 111", "Introduction to Statistics", 2),
      makeCourse("MTH 111", "Logic and Linear Algebra", 2),
      makeCourse("DTE 111", "Introduction to Dental Technology", 2),
      makeCourse("CHO 112", "Primary Health Care", 1),
      makeCourse("GNS 111", "Citizenship Education I", 2),
      makeCourse("COM 111", "Introduction to Computer Science", 2),
      makeCourse("DTE 112", "Tooth Morphology", 2),
      makeCourse("DTE 114", "Human Anatomy and Physiology I", 3),
      makeCourse("DTE 113", "Dental Material Science I", 1)
    ],
    "nd1-2": [
      makeCourse("PTD 111", "Technical Drawing", 1),
      makeCourse("EED 126", "Entrepreneurship Studies", 3),
      makeCourse("GNS 102", "Communication in English", 2),
      makeCourse("DTE 121", "Dental Prosthesis I", 3),
      makeCourse("DTE 122", "Dental Materials Science II", 2),
      makeCourse("DTE 123", "Introduction to Orthodontics Technology I", 2),
      makeCourse("GNS 124", "Medical Sociology", 2),
      makeCourse("DTE 124", "Human Anatomy and Physiology II", 3)
    ],
    "nd2-1": [
      makeCourse("DTE 224", "Dental Prosthodontics", 3),
      makeCourse("GNS 228", "Research Methodology", 1),
      makeCourse("EED 216", "Practice of Entrepreneurship", 2),
      makeCourse("DTE 213", "Dental Material Science III", 2),
      makeCourse("DTE 211", "Oral Physiology, Histology and Embryology", 1),
      makeCourse("DTE 212", "Dental Anatomy and Physiology I", 2),
      makeCourse("DTS 211", "Pharmacology I", 2),
      makeCourse("DTS 212", "Clinical Oral Hygiene", 2),
      makeCourse("HIM 111", "Health Information System I", 2),
      makeCourse("DTE 214", "Human Anatomy and Physiology III", 2),
      makeCourse("DTE 215", "Oral Pathology", 2),
      makeCourse("DTE 216", "General Pathology", 2)
    ],
    "nd2-2": [
      makeCourse("DTE 226", "Human Anatomy and Physiology II", 4),
      makeCourse("DTE 228", "Project/Seminar Writing", 6),
      makeCourse("DTE 225", "Dental Prosthodontics III", 3),
      makeCourse("DTE 224B", "Introduction to Orthodontics", 2),
      makeCourse("DTE 222", "Complete Dentures", 3),
      makeCourse("DTE 223", "Science of Dental Technology", 3),
      makeCourse("DTE 227", "SIWES Report Writing", 3)
    ]
  },
  "Dental Therapy": {
    "nd1-1": [
      makeCourse("STB 112", "Morphology and Physiology of Living Things", 2),
      makeCourse("BCH 111", "General Chemistry", 2),
      makeCourse("BPH 111", "Mechanics and Properties of Matter", 2),
      makeCourse("STA 111", "Introduction to Statistics", 2),
      makeCourse("CHM 111", "Primary Health Care", 2),
      makeCourse("PCT 111", "Introduction to Pharmacology", 3),
      makeCourse("GNS 101", "Use of English I", 2),
      makeCourse("GNS 111", "Citizenship Education I", 2),
      makeCourse("MSQ", "Mandatory Skills Qualification", 2),
      makeCourse("COM 111", "Introduction to Computing", 3),
      makeCourse("DTH 111", "Tooth Morphology and Tooth Carving I", 2),
      makeCourse("DTH 112", "Human Anatomy and Physiology I", 2),
      makeCourse("DTH 113", "Foundation of Dental Therapy", 2)
    ],
    "nd1-2": [
      makeCourse("GLT 111", "General Laboratory Techniques", 2),
      makeCourse("PTD 111", "Technical Drawing", 3),
      makeCourse("ENT 126", "Introduction to Entrepreneurship I", 3),
      makeCourse("GNS 121", "Citizenship Education II", 2),
      makeCourse("MSQ", "Mandatory Skills Qualification", 2),
      makeCourse("DTH 121", "Dental Therapy Instrumentation", 2),
      makeCourse("DTH 122", "Oral Physiology", 2),
      makeCourse("DTH 123", "Care and Maintenance of Dental Equipment", 2),
      makeCourse("DTH 124", "General Pathology I", 2),
      makeCourse("DTH 125", "Human Anatomy and Physiology II", 2),
      makeCourse("DTH 126", "Tooth Morphology and Tooth Carving II", 2),
      makeCourse("DTH 127", "Oral Hygiene", 3),
      makeCourse("SIWES", "Supervised Industrial Work Experience Scheme", 0)
    ],
    "nd2-1": [
      makeCourse("GNS 213", "Medical Sociology", 2),
      makeCourse("GNS 202", "Use of English II", 2),
      makeCourse("ENT 216", "Introduction to Entrepreneurship II", 2),
      makeCourse("DTH 211", "Oral Anatomy", 2),
      makeCourse("DTH 212", "Phantom Head", 3),
      makeCourse("DTH 213", "Oral Health Education", 2),
      makeCourse("DTH 214", "General Pathology II", 2),
      makeCourse("DTH 215", "Dental Instrumentation I", 2),
      makeCourse("DTH 216", "Dental Radiography I", 2),
      makeCourse("DTH 217", "Research Methodology in Dental Therapy", 2)
    ],
    "nd2-2": [
      makeCourse("STB 211", "Introductory Microbiology", 3),
      makeCourse("NUD 122", "Human Nutrition and Dietetics", 2),
      makeCourse("DTH 221", "First Aid and Dental Emergencies", 2),
      makeCourse("DTH 222", "Anatomy of Head and Neck", 2),
      makeCourse("DTH 223", "Principles of Sterilization", 2),
      makeCourse("DTH 224", "Dental Materials", 3),
      makeCourse("DTH 225", "Introduction to Clinical Practice", 2),
      makeCourse("DTH 226", "Project", 2)
    ]
  },
  "Dental Surgery Technology": {
    "nd1-1": [
      makeCourse("DST 111", "Foundation of Dental Surgery Technology", 3),
      makeCourse("DST 112", "Human Biology and Embryology", 3),
      makeCourse("DST 113", "Applied Physics", 2),
      makeCourse("DST 114", "Chemistry", 2),
      makeCourse("DST 115", "Medical Sociology", 2),
      makeCourse("DST 116", "Oral Health Science I", 2),
      makeCourse("DST 117", "Oral Anatomy and Oral Physiology", 3),
      makeCourse("DST 118", "Dental Instrumentation I", 3),
      makeCourse("GNS 101", "Use of English", 2),
      makeCourse("GNS 111", "Citizenship Education", 2),
      makeCourse("COM 101", "Introduction to Computer", 3)
    ],
    "nd1-2": [
      makeCourse("DST 121", "Human Biology II", 3),
      makeCourse("DST 122", "Foundation of DST II", 3),
      makeCourse("DST 123", "Nutrition and Health", 2),
      makeCourse("DST 124", "Introduction to Pharmacology", 2),
      makeCourse("GNS 125", "Behavioral Science II", 2),
      makeCourse("DST 126", "General Pathology", 3),
      makeCourse("DST 127", "Dental Instrumentation II", 3),
      makeCourse("STM 115", "Introduction to Microbiology", 3),
      makeCourse("DST 128", "Dental Health Care Practice I", 4),
      makeCourse("GNS 102", "Communication in English I", 2)
    ],
    "nd2-1": [
      makeCourse("DST 211", "Pharmacology II", 2),
      makeCourse("DST 212", "Radiography I", 3),
      makeCourse("DST 213", "Primary Health Care", 3),
      makeCourse("DST 214", "Dental Instrumentation III", 3),
      makeCourse("DST 215", "Sterilization and Infection Control", 2),
      makeCourse("GNS 213", "Introduction to Psychology", 2),
      makeCourse("DST 216", "Oral Health Education", 3),
      makeCourse("DST 227", "Research Methods", 2),
      makeCourse("DST 228", "Oral and Maxillofacial Surgery", 3),
      makeCourse("GNS 202", "Communication in English II", 2),
      makeCourse("EED 216", "Entrepreneurship Studies", 2)
    ],
    "nd2-2": [
      makeCourse("DST 221", "First Aid and Dental Emergencies", 3),
      makeCourse("DST 222", "Dental Materials and Bioscience I", 4),
      makeCourse("DST 223", "Pre and Post Operative Dental Care", 3),
      makeCourse("DST 224", "Radiography II", 3),
      makeCourse("DST 225", "Clinical Diseases and Diet Therapy I", 2),
      makeCourse("DST 226", "Oral Healthcare and Patient Records", 3),
      makeCourse("DST 227B", "Project", 3),
      makeCourse("DST 228B", "Restorative Dentistry I", 3),
      makeCourse("DST 229", "Oral Pathology and Oral Medicine", 3)
    ]
  }
};

const focusByProgramme = {
  "Community Health": ["Primary Health Care", "Community Diagnosis", "Maternal and Child Health", "Disease Prevention"],
  "Family Healthcare Technology": ["Family Health Records", "Home and Community Care", "Health Counselling", "Preventive Care"],
  "Environmental Health Technology": ["Environmental Sanitation", "Waste Management", "Water Quality Control", "Public Health Inspection"],
  "Health Education and Promotion": ["Health Communication", "Behaviour Change Communication", "Campaign Planning", "Monitoring and Evaluation"],
  "Epidemiology and Disease Control Technology": ["Disease Surveillance", "Outbreak Investigation", "Immunisation Support", "Epidemiological Reporting"],
  "Medical Laboratory Technology": ["General Laboratory Techniques", "Haematology Support", "Clinical Chemistry Basics", "Laboratory Quality Control"],
  "Medical Imaging Technology": ["Imaging Physics", "Patient Positioning", "Radiation Protection", "Imaging Equipment Care"],
  "Health Information Management": ["Health Records Management", "Health Statistics", "Medical Coding", "Electronic Health Information Systems"],
  "Paramedics Technology": ["Emergency Response", "Basic Life Support", "Trauma Care Support", "Ambulance Operations"],
  "Dispensing Opticianry": ["Optical Dispensing", "Ophthalmic Lenses", "Frame Fitting", "Eye-care Service Practice"],
  "Pharmaceutical Technology": ["Pharmaceutical Production", "Formulation Basics", "Quality Assurance", "Industrial Pharmacy Operations"],
  "Medical Store Management Technology": ["Medical Inventory Systems", "Procurement and Supply", "Cold Chain Management", "Stock Documentation"],
  "Computer Science": ["Computer Programming", "Database Systems", "Web Development", "Systems Analysis"],
  "Computer Engineering Technology": ["Digital Electronics", "Computer Hardware", "Computer Networks", "Embedded Systems"],
  "Software and Web Development": ["Frontend Development", "Backend Systems", "API Design", "Application Deployment"],
  "Artificial Intelligence": ["Data Preparation", "Machine Learning Basics", "Automation", "Responsible AI"],
  "Cybersecurity Engineering": ["Network Security", "Security Operations", "Threat Monitoring", "Incident Response"],
  "Data Science": ["Data Cleaning", "Data Analysis", "Dashboards", "Practical Reporting"],
  "Digital Content Creation": ["Graphics Production", "Video Editing", "Digital Publishing", "Content Strategy"]
};

function programmePrefix(title) {
  return title
    .split(/\s+/)
    .filter((word) => !["and", "of", "in"].includes(word.toLowerCase()))
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase() || "PHI";
}

function fallbackCatalog(programme) {
  const prefix = programmePrefix(programme.title);
  const focus = focusByProgramme[programme.title] || programme.highlights;
  return {
    "nd1-1": [
      makeCourse("GNS 101", "Use of English I", 2),
      makeCourse("GNS 111", "Citizenship Education I", 2),
      makeCourse("COM 101", "Introduction to Computing", 3),
      makeCourse("MTH 111", "General Mathematics", 3),
      makeCourse(`${prefix} 111`, `Introduction to ${programme.title}`, 3),
      makeCourse(`${prefix} 112`, focus[0] || "Professional Practice I", 2),
      makeCourse(`${prefix} 113`, "Laboratory, Studio, or Field Practice I", 2)
    ],
    "nd1-2": [
      makeCourse("GNS 102", "Communication in English", 2),
      makeCourse("ENT 126", "Introduction to Entrepreneurship I", 2),
      makeCourse("STA 111", "Introduction to Statistics", 2),
      makeCourse(`${prefix} 121`, focus[1] || "Professional Practice II", 3),
      makeCourse(`${prefix} 122`, "Applied Science and Safety", 2),
      makeCourse(`${prefix} 123`, "Practical Skills Workshop II", 3),
      makeCourse("SIWES", "Supervised Industrial Work Experience Scheme", 0)
    ],
    "nd2-1": [
      makeCourse("GNS 213", "Medical Sociology / Professional Communication", 2),
      makeCourse("ENT 216", "Practice of Entrepreneurship", 2),
      makeCourse("GNS 218", "Research Methodology", 2),
      makeCourse(`${prefix} 211`, focus[2] || "Departmental Operations I", 3),
      makeCourse(`${prefix} 212`, "Professional Ethics and Regulation", 2),
      makeCourse(`${prefix} 213`, "Advanced Practical Skills I", 3)
    ],
    "nd2-2": [
      makeCourse(`${prefix} 221`, focus[3] || "Departmental Operations II", 3),
      makeCourse(`${prefix} 222`, "Management and Quality Assurance", 2),
      makeCourse(`${prefix} 223`, "Contemporary Issues in Practice", 2),
      makeCourse(`${prefix} 224`, "Seminar", 2),
      makeCourse(`${prefix} 225`, "Project", 4)
    ]
  };
}

const courseCatalog = Object.fromEntries(
  programmes.map((programme) => [programme.title, exactCourseCatalog[programme.title] || fallbackCatalog(programme)])
);

const feeTable = {
  health: { nd: 185000, hnd: 215000, certificate: 95000 },
  dental: { nd: 225000, hnd: 255000, certificate: 120000 },
  pharmacy: { nd: 210000, hnd: 235000, certificate: 115000 },
  ict: { nd: 165000, hnd: 205000, certificate: 85000 }
};

const formatNaira = (amount) => new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0
}).format(amount);

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const grid = $("[data-programme-grid]");
const template = $("[data-programme-card-template]");
const searchInput = $("[data-course-search]");
const emptyState = $("[data-empty-state]");
const programmeSelect = $("[data-programme-select]");
const adminLoginForm = $("[data-admin-login-form]");
const adminPortal = $("[data-admin-portal]");
const adminWorkspace = $("[data-admin-workspace]");
const adminStatus = $("[data-admin-status]");
const applicationsList = $("[data-applications-list]");
const enrolledList = $("[data-enrolled-list]");
const contactsList = $("[data-contacts-list]");
const verificationsList = $("[data-verifications-list]");
const pinRequestsList = $("[data-pin-requests-list]");
const courseRegistrationsList = $("[data-course-registrations-list]");
const refreshAdminButton = $("[data-refresh-admin]");
const pinRequestForm = $("[data-pin-request-form]");
const courseRegistrationForm = $("[data-course-registration-form]");
const pinProgrammeSelect = $("[data-pin-programme-select]");
const registrationProgrammeSelect = $("[data-registration-programme-select]");
const registrationSemesterSelect = $("[data-registration-semester]");
const coursePicker = $("[data-course-picker]");
const courseTotal = $("[data-course-total]");
let activeFilter = "all";
const isAdminView = new URLSearchParams(window.location.search).get("admin") === "1";
let adminToken = isAdminView ? sessionStorage.getItem("philotimoCollegeAdminToken") || "" : "";
const MAX_PAYMENT_PROOF_SIZE = 1.5 * 1024 * 1024;

function renderProgrammes() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleProgrammes = programmes.filter((programme) => {
    const matchesFilter = activeFilter === "all" || programme.filter === activeFilter;
    const text = `${programme.title} ${programme.cluster} ${programme.summary} ${programme.highlights.join(" ")}`.toLowerCase();
    return matchesFilter && text.includes(query);
  });

  grid.innerHTML = "";
  visibleProgrammes.forEach((programme) => {
    const card = template.content.firstElementChild.cloneNode(true);
    $(".programme-card__cluster", card).textContent = programme.cluster;
    $(".programme-card__level", card).textContent = programme.level;
    $("h3", card).textContent = programme.title;
    $("p", card).textContent = programme.summary;

    const list = $("ul", card);
    programme.highlights.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.append(li);
    });

    $(".programme-card__button", card).addEventListener("click", () => {
      programmeSelect.value = programme.title;
      $("#apply").scrollIntoView({ behavior: "smooth", block: "start" });
      programmeSelect.focus({ preventScroll: true });
    });

    grid.append(card);
  });

  emptyState.hidden = visibleProgrammes.length > 0;
}

function populateProgrammeOptions(select) {
  if (!select) { return; }
  programmes.forEach((programme) => {
    const option = document.createElement("option");
    option.value = programme.title;
    option.textContent = `${programme.title} (${programme.level})`;
    select.append(option);
  });
}

function populateProgrammeSelect() {
  [programmeSelect, pinProgrammeSelect, registrationProgrammeSelect].forEach(populateProgrammeOptions);
}

function getPayload(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function setFormBusy(form, busy) {
  $$("button, input, select, textarea", form).forEach((control) => {
    control.disabled = busy;
  });
}

function readPaymentProof(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("Please upload proof of payment."));
      return;
    }

    if (file.size > MAX_PAYMENT_PROOF_SIZE) {
      reject(new Error("The proof of payment is too large. Please upload a file that is 1.5 MB or smaller."));
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve({
        proofFileName: file.name,
        proofFileType: file.type || "application/octet-stream",
        proofFileSize: file.size,
        proofDataUrl: reader.result
      });
    });
    reader.addEventListener("error", () => reject(new Error("The proof of payment could not be read.")));
    reader.readAsDataURL(file);
  });
}

function getSemesterCourses(programme, semester) {
  return courseCatalog[programme]?.[semester] || [];
}

function updateCourseSummary() {
  if (!coursePicker || !courseTotal) { return; }
  const checkedCodes = new Set($$("[data-course-checkbox]:checked", coursePicker).map((input) => input.value));
  const programme = registrationProgrammeSelect?.value || "";
  const semester = registrationSemesterSelect?.value || "";
  const selected = getSemesterCourses(programme, semester).filter((course) => checkedCodes.has(course.code));
  const totalUnits = selected.reduce((sum, course) => sum + Number(course.unit || 0), 0);
  courseTotal.textContent = selected.length
    ? `${selected.length} course${selected.length === 1 ? "" : "s"} selected, ${totalUnits} total unit${totalUnits === 1 ? "" : "s"}.`
    : "0 courses selected.";
}

function renderCoursePicker() {
  if (!coursePicker) { return; }
  const programme = registrationProgrammeSelect?.value || "";
  const semester = registrationSemesterSelect?.value || "";
  const courses = getSemesterCourses(programme, semester);
  coursePicker.innerHTML = "";

  if (!programme || !semester) {
    const message = document.createElement("p");
    message.textContent = "Select a department and semester to load the NBTE-aligned courses.";
    coursePicker.append(message);
    updateCourseSummary();
    return;
  }

  if (!courses.length) {
    const message = document.createElement("p");
    message.textContent = "No course list has been configured for this department and semester yet.";
    coursePicker.append(message);
    updateCourseSummary();
    return;
  }

  const heading = document.createElement("div");
  heading.className = "course-picker__heading";
  heading.innerHTML = `<strong>${programme}</strong><span>${semesterLabels[semester]}</span>`;
  coursePicker.append(heading);

  courses.forEach((course) => {
    const label = document.createElement("label");
    label.className = "course-option";
    label.innerHTML = `
      <input type="checkbox" value="${course.code}" data-course-checkbox checked>
      <span><strong>${course.code}</strong> ${course.title}</span>
      <em>${course.unit} unit${Number(course.unit) === 1 ? "" : "s"}</em>
    `;
    coursePicker.append(label);
  });

  updateCourseSummary();
}

async function apiRequest(path, options = {}) {
  const headers = { "Content-Type": "application/json" };
  if (options.auth && adminToken) {
    headers.Authorization = `Bearer ${adminToken}`;
  }

  const response = await fetch(path, {
    method: options.method || "POST",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "The request could not be completed.");
  }
  return data;
}

function setResult(output, message, tone = "success") {
  output.textContent = message;
  output.dataset.tone = tone;
}

function formatDate(value) {
  if (!value) { return "Not recorded"; }
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function statusLabel(status) {
  return String(status || "pending").replace(/-/g, " ");
}

function emailStatusText(email) {
  if (!email) { return ""; }
  const to = email.to ? ` to ${email.to}` : "";
  if (email.status === "sent") { return ` Email sent${to}.`; }
  if (email.status === "not-configured") { return ` Email notice saved${to}; SMTP is not configured yet.`; }
  if (email.status === "failed") { return ` Email notice saved${to}, but sending failed: ${email.error}`; }
  if (email.status === "skipped") { return ` Email not sent: ${email.error}`; }
  return ` Email status: ${email.status || "queued"}.`;
}

function updateFees() {
  const cluster = $("[data-fee-cluster]").value;
  const level = $("[data-fee-level]").value;
  const hostel = $("[data-hostel]").checked ? 65000 : 0;
  const acceptance = 25000;
  const portal = 7500;
  const lab = cluster === "ict" ? 18000 : 35000;
  const total = feeTable[cluster][level] + acceptance + portal + lab + hostel;
  $("[data-fee-total]").textContent = formatNaira(total);
}

function initNavigation() {
  const toggle = $("[data-nav-toggle]");
  const nav = $("[data-nav]");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initFilters() {
  $$(".filter-pill").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".filter-pill").forEach((pill) => pill.classList.remove("is-active"));
      button.classList.add("is-active");
      activeFilter = button.dataset.filter;
      renderProgrammes();
    });
  });

  searchInput.addEventListener("input", renderProgrammes);
}

function initApplicationForm() {
  const form = $("[data-application-form]");
  const result = $("[data-form-result]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setResult(result, "Submitting application...");

    try {
      const data = await apiRequest("/api/applications", { body: getPayload(form) });
      const reference = data.record?.reference || "generated";
      const password = data.tempPassword ? ` Portal password: ${data.tempPassword}.` : "";
      setResult(result, `Application submitted. Reference: ${reference}.${password} Status: Received for admissions screening.`);
      form.reset();
      if (adminToken) { loadAdminState(); }
    } catch (error) {
      setResult(result, error.message, "error");
    }
  });
}

function initPortalForms() {
  $("[data-login-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const output = $("[data-login-result]");
    setResult(output, "Checking portal access...");

    try {
      const data = await apiRequest("/api/student/login", { body: getPayload(event.currentTarget) });
      const record = data.record;
      setResult(output, `${record.fullName}: ${record.admissionStatus}. Programme: ${record.programme}. Payment: ${record.paymentStatus}.`);
    } catch (error) {
      setResult(output, error.message, "error");
    }
  });

  $("[data-status-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const output = $("[data-status-result]");
    setResult(output, "Checking admission status...");

    try {
      const data = await apiRequest("/api/admission-status", { body: getPayload(event.currentTarget) });
      const record = data.record;
      const matric = record.matricNumber ? ` Matric number: ${record.matricNumber}.` : "";
      setResult(output, `${record.fullName}: ${record.admissionStatus} for ${record.programme}.${matric}`);
    } catch (error) {
      setResult(output, error.message, "error");
    }
  });

  $("[data-verify-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const output = $("[data-verify-result]");
    setResult(output, "Submitting verification request...");

    try {
      const data = await apiRequest("/api/certificate-verifications", { body: getPayload(event.currentTarget) });
      setResult(output, data.message);
      event.currentTarget.reset();
      if (adminToken) { loadAdminState(); }
    } catch (error) {
      setResult(output, error.message, "error");
    }
  });
}

function initCourseRegistration() {
  if (!pinRequestForm || !courseRegistrationForm) { return; }

  [registrationProgrammeSelect, registrationSemesterSelect].forEach((control) => {
    control?.addEventListener("change", renderCoursePicker);
  });
  coursePicker?.addEventListener("change", updateCourseSummary);
  renderCoursePicker();

  pinRequestForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const output = $("[data-pin-request-result]");
    const data = new FormData(pinRequestForm);
    setResult(output, "Reading proof of payment...");

    try {
      setFormBusy(pinRequestForm, true);
      const file = data.get("paymentProof");
      const proof = await readPaymentProof(file instanceof File ? file : null);
      const payload = {
        fullName: data.get("fullName").toString().trim(),
        studentId: data.get("studentId").toString().trim(),
        email: data.get("email").toString().trim(),
        phone: data.get("phone").toString().trim(),
        programme: data.get("programme").toString(),
        semester: data.get("semester").toString(),
        amountPaid: data.get("amountPaid").toString().trim(),
        paymentReference: data.get("paymentReference").toString().trim(),
        paymentDate: data.get("paymentDate").toString().trim(),
        ...proof
      };
      const response = await apiRequest("/api/biodata-pin-requests", { body: payload });
      setResult(output, response.message);
      pinRequestForm.reset();
      if (adminToken) { loadAdminState(); }
    } catch (error) {
      setResult(output, error.message, "error");
    } finally {
      setFormBusy(pinRequestForm, false);
    }
  });

  courseRegistrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const output = $("[data-course-registration-result]");
    const data = new FormData(courseRegistrationForm);
    const programme = data.get("programme").toString();
    const semester = data.get("semester").toString();
    const checkedCodes = new Set($$("[data-course-checkbox]:checked", coursePicker).map((input) => input.value));
    const selectedCourses = getSemesterCourses(programme, semester).filter((course) => checkedCodes.has(course.code));

    if (!selectedCourses.length) {
      setResult(output, "Please select at least one course before registering.", "error");
      return;
    }

    setResult(output, "Submitting course registration...");
    try {
      setFormBusy(courseRegistrationForm, true);
      const response = await apiRequest("/api/course-registrations", {
        body: {
          pin: data.get("pin").toString().trim(),
          studentId: data.get("studentId").toString().trim(),
          email: data.get("email").toString().trim(),
          programme,
          semester,
          courses: selectedCourses
        }
      });
      setResult(output, `${response.message} Registration reference: ${response.record.registrationReference}.`);
      courseRegistrationForm.reset();
      renderCoursePicker();
      if (adminToken) { loadAdminState(); }
    } catch (error) {
      setResult(output, error.message, "error");
    } finally {
      setFormBusy(courseRegistrationForm, false);
    }
  });
}

function initContactForm() {
  $("[data-contact-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const output = $("[data-contact-result]");
    setResult(output, "Sending enquiry...");

    try {
      const data = await apiRequest("/api/contacts", { body: getPayload(event.currentTarget) });
      setResult(output, data.message);
      event.currentTarget.reset();
      if (adminToken) { loadAdminState(); }
    } catch (error) {
      setResult(output, error.message, "error");
    }
  });
}

function makeStatusChip(status) {
  const chip = document.createElement("span");
  const cleanStatus = String(status || "pending").toLowerCase();
  chip.className = `status-chip status-chip--${cleanStatus}`;
  chip.textContent = statusLabel(cleanStatus);
  return chip;
}

function recordCard({ title, status, meta = [], body = "", actions = [] }) {
  const card = document.createElement("article");
  card.className = "record-card";

  const heading = document.createElement("h4");
  heading.textContent = title;
  card.append(heading);

  if (status) { card.append(makeStatusChip(status)); }

  if (meta.length) {
    const metaWrap = document.createElement("div");
    metaWrap.className = "record-meta";
    meta.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      metaWrap.append(span);
    });
    card.append(metaWrap);
  }

  if (body) {
    const paragraph = document.createElement("p");
    paragraph.textContent = body;
    card.append(paragraph);
  }

  if (actions.length) {
    const actionWrap = document.createElement("div");
    actionWrap.className = "record-actions";
    actions.forEach(({ label, action, id, href, download }) => {
      if (href) {
        const link = document.createElement("a");
        link.className = "button button--ghost";
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener";
        if (download) { link.download = download; }
        link.textContent = label;
        actionWrap.append(link);
        return;
      }

      const button = document.createElement("button");
      button.className = "button button--ghost";
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => runAdminAction(action, id));
      actionWrap.append(button);
    });
    card.append(actionWrap);
  }

  return card;
}

function renderList(container, records, renderItem, emptyText) {
  container.innerHTML = "";
  if (!records.length) {
    const empty = document.createElement("p");
    empty.className = "empty-records";
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }

  records.forEach((record) => container.append(renderItem(record)));
}

function applicationActions(application) {
  const status = String(application.status || "pending").toLowerCase();
  const actions = [];

  if (status === "pending") {
    actions.push({ label: "Send To Screening", action: "screen-application", id: application.id });
    actions.push({ label: "Approve", action: "approve-application", id: application.id });
    actions.push({ label: "Reject", action: "reject-application", id: application.id });
  } else if (status === "screening") {
    actions.push({ label: "Approve", action: "approve-application", id: application.id });
    actions.push({ label: "Reject", action: "reject-application", id: application.id });
  } else if (status === "approved") {
    actions.push({ label: "Enrol Student", action: "enroll-student", id: application.id });
    if (application.paymentStatus !== "cleared") {
      actions.push({ label: "Mark Payment Cleared", action: "mark-payment-cleared", id: application.id });
    }
  } else if (status === "enrolled") {
    actions.push({
      label: application.paymentStatus === "cleared" ? "Mark Payment Pending" : "Mark Payment Cleared",
      action: application.paymentStatus === "cleared" ? "mark-payment-pending" : "mark-payment-cleared",
      id: application.id
    });
  } else if (status === "rejected") {
    actions.push({ label: "Reopen", action: "reopen-application", id: application.id });
  }

  return actions;
}

function renderApplication(application) {
  const matric = application.matricNumber ? `Matric: ${application.matricNumber}` : `Reference: ${application.reference}`;
  return recordCard({
    title: application.fullName,
    status: application.status,
    meta: [
      matric,
      application.programme,
      application.level,
      `Payment: ${application.paymentStatus || "pending"}`,
      formatDate(application.createdAt)
    ],
    body: `${application.admissionStatus || "Received for admissions screening"}; ${application.qualification || ""}`.trim(),
    actions: applicationActions(application)
  });
}

function renderContact(contact) {
  return recordCard({
    title: contact.name,
    status: contact.status,
    meta: [contact.email, formatDate(contact.createdAt)],
    body: contact.message,
    actions: contact.status === "responded" ? [] : [{ label: "Mark Responded", action: "close-contact", id: contact.id }]
  });
}

function renderVerification(verification) {
  return recordCard({
    title: verification.certificate,
    status: verification.status,
    meta: [formatDate(verification.createdAt)],
    body: verification.adminNote || "Awaiting administrator review.",
    actions: verification.status === "reviewed" ? [] : [{ label: "Mark Reviewed", action: "review-verification", id: verification.id }]
  });
}

function pinRequestActions(request) {
  const actions = [];
  if (request.proofDataUrl) {
    actions.push({
      label: "View Proof",
      href: request.proofDataUrl,
      download: request.proofFileName || "e-biodata-payment-proof"
    });
  }

  if (request.status === "pending") {
    actions.push({ label: "Verify and Issue PIN", action: "issue-biodata-pin", id: request.id });
    actions.push({ label: "Reject Payment", action: "reject-biodata-pin", id: request.id });
  } else {
    actions.push({ label: "Move To Pending", action: "reopen-biodata-pin", id: request.id });
  }
  return actions;
}

function renderPinRequest(request) {
  const pinLine = request.pin ? `PIN: ${request.pin}` : "PIN not issued";
  return recordCard({
    title: request.fullName,
    status: request.status,
    meta: [
      request.studentId,
      request.programme,
      semesterLabels[request.semester] || request.semester,
      `Payment ref: ${request.paymentReference}`,
      `Amount: ${formatNaira(Number(request.amountPaid || 0))}`,
      pinLine,
      formatDate(request.createdAt)
    ],
    body: `Email: ${request.email}; Phone: ${request.phone}`,
    actions: pinRequestActions(request)
  });
}

function courseRegistrationActions(registration) {
  if (registration.status === "approved") {
    return [{ label: "Reopen", action: "reopen-course-registration", id: registration.id }];
  }
  if (registration.status === "rejected") {
    return [{ label: "Reopen", action: "reopen-course-registration", id: registration.id }];
  }
  return [
    { label: "Approve Registration", action: "approve-course-registration", id: registration.id },
    { label: "Reject Registration", action: "reject-course-registration", id: registration.id }
  ];
}

function renderCourseRegistration(registration) {
  const courses = Array.isArray(registration.courses) ? registration.courses : [];
  const units = courses.reduce((sum, course) => sum + Number(course.unit || 0), 0);
  const courseText = courses
    .map((course) => `${course.code} ${course.title}`)
    .slice(0, 10)
    .join("; ");
  return recordCard({
    title: registration.fullName || registration.studentId,
    status: registration.status,
    meta: [
      registration.registrationReference,
      registration.studentId,
      registration.programme,
      semesterLabels[registration.semester] || registration.semester,
      `${courses.length} courses`,
      `${units} units`,
      formatDate(registration.createdAt)
    ],
    body: courseText || "No course list attached.",
    actions: courseRegistrationActions(registration)
  });
}

function renderAdminState(state) {
  const applications = state.applications || [];
  const contacts = state.contacts || [];
  const verifications = state.verifications || [];
  const pinRequests = state.pinRequests || [];
  const courseRegistrations = state.courseRegistrations || [];
  const enrolled = applications.filter((application) => application.status === "enrolled");

  $("[data-total-applications]").textContent = applications.length;
  $("[data-pending-applications]").textContent = applications.filter((application) => application.status === "pending" || application.status === "screening").length;
  $("[data-approved-applications]").textContent = applications.filter((application) => application.status === "approved").length;
  $("[data-enrolled-students]").textContent = enrolled.length;
  $("[data-pin-requests]").textContent = pinRequests.filter((request) => request.status === "pending").length;
  $("[data-issued-pins]").textContent = pinRequests.filter((request) => request.status === "issued").length;
  $("[data-course-registrations]").textContent = courseRegistrations.length;

  renderList(applicationsList, applications, renderApplication, "No applications have been submitted yet.");
  renderList(enrolledList, enrolled, renderApplication, "No students have been enrolled yet.");
  renderList(contactsList, contacts, renderContact, "No contact enquiries yet.");
  renderList(verificationsList, verifications, renderVerification, "No certificate verification requests yet.");
  renderList(pinRequestsList, pinRequests, renderPinRequest, "No e-biodata PIN request has been submitted yet.");
  renderList(courseRegistrationsList, courseRegistrations, renderCourseRegistration, "No semester course registration has been submitted yet.");
}

async function loadAdminState() {
  if (!isAdminView || !adminToken || !adminWorkspace || !adminStatus) { return; }

  try {
    const state = await apiRequest("/api/admin/state", { method: "GET", auth: true });
    adminWorkspace.hidden = false;
    renderAdminState(state);
    setResult(adminStatus, "Administrator workspace loaded.");
  } catch (error) {
    sessionStorage.removeItem("philotimoCollegeAdminToken");
    adminToken = "";
    adminWorkspace.hidden = true;
    setResult(adminStatus, error.message, "error");
  }
}

async function runAdminAction(action, id) {
  if (!isAdminView || !adminStatus) { return; }
  setResult(adminStatus, "Updating record...");

  try {
    const data = await apiRequest("/api/admin/action", {
      auth: true,
      body: { action, id }
    });
    renderAdminState(data.state);
    setResult(adminStatus, `${data.message}${emailStatusText(data.email)}`);
  } catch (error) {
    setResult(adminStatus, error.message, "error");
  }
}

function initAdminPortal() {
  if (!isAdminView || !adminPortal || !adminLoginForm || !adminWorkspace || !adminStatus || !refreshAdminButton) {
    return;
  }

  adminPortal.hidden = false;

  adminLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    setResult(adminStatus, "Unlocking administrator workspace...");

    try {
      const data = await apiRequest("/api/admin/login", { body: getPayload(adminLoginForm) });
      adminToken = data.token;
      sessionStorage.setItem("philotimoCollegeAdminToken", adminToken);
      adminLoginForm.reset();
      await loadAdminState();
    } catch (error) {
      setResult(adminStatus, error.message, "error");
    }
  });

  refreshAdminButton.addEventListener("click", loadAdminState);
  if (adminToken) { loadAdminState(); }
}

function initFeeEstimator() {
  $("[data-fee-form]").addEventListener("change", updateFees);
  updateFees();
}

document.addEventListener("DOMContentLoaded", () => {
  $("[data-year]").textContent = new Date().getFullYear();
  populateProgrammeSelect();
  renderProgrammes();
  initNavigation();
  initFilters();
  initApplicationForm();
  initFeeEstimator();
  initPortalForms();
  initCourseRegistration();
  initContactForm();
  initAdminPortal();
});
