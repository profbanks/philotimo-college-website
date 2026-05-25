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
let activeFilter = "all";

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

function populateProgrammeSelect() {
  programmes.forEach((programme) => {
    const option = document.createElement("option");
    option.value = programme.title;
    option.textContent = `${programme.title} (${programme.level})`;
    programmeSelect.append(option);
  });
}

function generateReference() {
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PHI-${new Date().getFullYear()}-${suffix}`;
}

function saveApplication(application) {
  const existing = JSON.parse(localStorage.getItem("philotimoApplications") || "[]");
  existing.unshift(application);
  localStorage.setItem("philotimoApplications", JSON.stringify(existing.slice(0, 20)));
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const reference = generateReference();
    const application = {
      reference,
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      state: formData.get("state"),
      programme: formData.get("programme"),
      level: formData.get("level"),
      qualification: formData.get("qualification"),
      createdAt: new Date().toISOString(),
      status: "Received for admissions screening"
    };

    saveApplication(application);
    result.textContent = `Application submitted. Reference: ${reference}. Status: Received for admissions screening.`;
    form.reset();
  });
}

function initPortalForms() {
  $("[data-login-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = new FormData(event.currentTarget).get("studentId");
    $("[data-login-result]").textContent = `Portal demo: ${id} was recognised for login simulation.`;
  });

  $("[data-status-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const reference = new FormData(event.currentTarget).get("reference").toString().trim().toUpperCase();
    const applications = JSON.parse(localStorage.getItem("philotimoApplications") || "[]");
    const match = applications.find((application) => application.reference === reference);
    $("[data-status-result]").textContent = match
      ? `${match.fullName}: ${match.status} for ${match.programme}.`
      : "Reference not found in this browser. Submit the enrollment form first or check the number.";
  });

  $("[data-verify-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    $("[data-verify-result]").textContent = "Verification request received. Connect this module to official records before public launch.";
  });
}

function initContactForm() {
  $("[data-contact-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get("name");
    $("[data-contact-result]").textContent = `Thank you, ${name}. Your enquiry has been prepared for the admissions team.`;
    event.currentTarget.reset();
  });
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
  initContactForm();
});
