const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Site Map / User Flow Modal

const openWorkflow = document.getElementById("openWorkflow");
const openWorkflowLink = document.getElementById("openWorkflowLink");
const closeWorkflow = document.getElementById("closeWorkflow");
const workflowModal = document.getElementById("workflowModal");

const workflowImage = document.getElementById("workflowImage");
const workflowLabel = document.getElementById("workflowLabel");
const workflowCounter = document.getElementById("workflowCounter");

const prevFlow = document.getElementById("prevFlow");
const nextFlow = document.getElementById("nextFlow");

const flows = [
  {
    img: "images/userflow-home.jpg",
    label: "Home"
  },
  {
    img: "images/userflow-recipe-guide.jpg",
    label: "Recipe Guide"
  },
  {
    img: "images/userflow-packages.jpg",
    label: "Packages Offered"
  },
  {
    img: "images/userflow-bake.jpg",
    label: "Bake at Home Sets"
  },
  {
    img: "images/userflow-ingredients.jpg",
    label: "Ingredients"
  },
  {
    img: "images/userflow-contact.jpg",
    label: "Contact Us"
  },
  {
    img: "images/userflow-other-items.jpg",
    label: "Other Items"
  }
];

let currentFlow = 0;

function updateWorkflow() {
  if (!workflowImage || !workflowLabel || !workflowCounter) return;

  workflowImage.src = flows[currentFlow].img;
  workflowLabel.textContent = flows[currentFlow].label;
  workflowCounter.textContent = `${currentFlow + 1}/${flows.length}`;
}

function openWorkflowModal(startIndex = 0) {
  if (!workflowModal) return;

  currentFlow = startIndex;
  updateWorkflow();
  workflowModal.classList.add("show");
}

function closeWorkflowModal() {
  if (!workflowModal) return;

  workflowModal.classList.remove("show");
}

if (openWorkflow) {
  openWorkflow.addEventListener("click", function (e) {
    e.preventDefault();
    openWorkflowModal(0);
  });
}

if (openWorkflowLink) {
  openWorkflowLink.addEventListener("click", function (e) {
    e.preventDefault();
    openWorkflowModal(0);
  });
}

if (closeWorkflow) {
  closeWorkflow.addEventListener("click", closeWorkflowModal);
}

if (nextFlow) {
  nextFlow.addEventListener("click", function () {
    currentFlow = (currentFlow + 1) % flows.length;
    updateWorkflow();
  });
}

if (prevFlow) {
  prevFlow.addEventListener("click", function () {
    currentFlow = (currentFlow - 1 + flows.length) % flows.length;
    updateWorkflow();
  });
}

if (workflowModal) {
  workflowModal.addEventListener("click", function (e) {
    if (e.target === workflowModal) {
      closeWorkflowModal();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (!workflowModal || !workflowModal.classList.contains("show")) return;

  if (e.key === "Escape") {
    closeWorkflowModal();
  }

  if (e.key === "ArrowRight") {
    currentFlow = (currentFlow + 1) % flows.length;
    updateWorkflow();
  }

  if (e.key === "ArrowLeft") {
    currentFlow = (currentFlow - 1 + flows.length) % flows.length;
    updateWorkflow();
  }
});
// Wireframe Gallery

const wireframePreview = document.getElementById("wireframePreview");
const wireframeModal = document.getElementById("wireframeModal");
const wireframeModalImage = document.getElementById("wireframeModalImage");

const closeWireframe = document.getElementById("closeWireframe");

const prevWireframe = document.getElementById("prevWireframe");
const nextWireframe = document.getElementById("nextWireframe");

const prevWireframeModal = document.getElementById("prevWireframeModal");
const nextWireframeModal = document.getElementById("nextWireframeModal");

const wireframes = [
  "images/wireframe-home.png",
  "images/wireframe-recipe-guide.png",
  "images/wireframe-packages.png",
  "images/wireframe-bake.png",
  "images/wireframe-ingredients.png",
  "images/wireframe-contact.png",
  "images/wireframe-other-items.png"
];

let currentWireframe = 0;

function updateWireframe() {
  if (!wireframePreview || !wireframeModalImage) return;

  wireframePreview.src = wireframes[currentWireframe];
  wireframeModalImage.src = wireframes[currentWireframe];
}

function nextWireframeImage() {
  currentWireframe = (currentWireframe + 1) % wireframes.length;
  updateWireframe();
}

function prevWireframeImage() {
  currentWireframe =
    (currentWireframe - 1 + wireframes.length) % wireframes.length;
  updateWireframe();
}

if (nextWireframe) {
  nextWireframe.addEventListener("click", nextWireframeImage);
}

if (prevWireframe) {
  prevWireframe.addEventListener("click", prevWireframeImage);
}

if (wireframePreview) {
  wireframePreview.addEventListener("click", function () {
    updateWireframe();
    wireframeModal.classList.add("show");
  });
}

if (closeWireframe) {
  closeWireframe.addEventListener("click", function () {
    wireframeModal.classList.remove("show");
  });
}

if (nextWireframeModal) {
  nextWireframeModal.addEventListener("click", nextWireframeImage);
}

if (prevWireframeModal) {
  prevWireframeModal.addEventListener("click", prevWireframeImage);
}

if (wireframeModal) {
  wireframeModal.addEventListener("click", function (e) {
    if (e.target === wireframeModal) {
      wireframeModal.classList.remove("show");
    }
  });
}