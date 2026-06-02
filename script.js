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
const adminLoginForm = $("[data-admin-login-form]");
const adminWorkspace = $("[data-admin-workspace]");
const adminStatus = $("[data-admin-status]");
const applicationsList = $("[data-applications-list]");
const enrolledList = $("[data-enrolled-list]");
const contactsList = $("[data-contacts-list]");
const verificationsList = $("[data-verifications-list]");
const refreshAdminButton = $("[data-refresh-admin]");
let activeFilter = "all";
let adminToken = sessionStorage.getItem("philotimoCollegeAdminToken") || "";

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

function getPayload(form) {
  return Object.fromEntries(new FormData(form).entries());
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
    actions.forEach(({ label, action, id }) => {
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

function renderAdminState(state) {
  const applications = state.applications || [];
  const contacts = state.contacts || [];
  const verifications = state.verifications || [];
  const enrolled = applications.filter((application) => application.status === "enrolled");

  $("[data-total-applications]").textContent = applications.length;
  $("[data-pending-applications]").textContent = applications.filter((application) => application.status === "pending" || application.status === "screening").length;
  $("[data-approved-applications]").textContent = applications.filter((application) => application.status === "approved").length;
  $("[data-enrolled-students]").textContent = enrolled.length;

  renderList(applicationsList, applications, renderApplication, "No applications have been submitted yet.");
  renderList(enrolledList, enrolled, renderApplication, "No students have been enrolled yet.");
  renderList(contactsList, contacts, renderContact, "No contact enquiries yet.");
  renderList(verificationsList, verifications, renderVerification, "No certificate verification requests yet.");
}

async function loadAdminState() {
  if (!adminToken) { return; }

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
  setResult(adminStatus, "Updating record...");

  try {
    const data = await apiRequest("/api/admin/action", {
      auth: true,
      body: { action, id }
    });
    renderAdminState(data.state);
    setResult(adminStatus, data.message);
  } catch (error) {
    setResult(adminStatus, error.message, "error");
  }
}

function initAdminPortal() {
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
  initContactForm();
  initAdminPortal();
});
