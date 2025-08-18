// ====================== FIREBASE CONFIGURAÇÃO ======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Cole aqui o seu firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyCe9YoAYWfX32cV-xldDGEqsF4Rz6kQgwE",
  authDomain: "contador-de-visitas-b0fe1.firebaseapp.com",
  projectId: "contador-de-visitas-b0fe1",
  storageBucket: "contador-de-visitas-b0fe1.appspot.com",
  messagingSenderId: "1075308910656",
  appId: "1:1075308910656:web:79608b32fd16e411a8e7a5"
};

// Inicializa Firebase e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Documento do contador
const contadorRef = doc(db, "contador", "visitas");

// Função para atualizar e exibir o contador
async function atualizarContador() {
  try {
    const docSnap = await getDoc(contadorRef);
    let visitas;
    if (docSnap.exists()) {
      visitas = docSnap.data().numero + 1;
      await updateDoc(contadorRef, { numero: visitas });
    } else {
      visitas = 1;
      await setDoc(contadorRef, { numero: visitas });
    }
    // Atualiza o rodapé de forma discreta
    const contadorEl = document.getElementById("contador");
    if (contadorEl) {
      contadorEl.innerText = visitas;
      contadorEl.style.color = "#cccccc"; // cinza claro
      contadorEl.style.fontSize = "0.8rem";
    }
  } catch (error) {
    console.error("Erro ao acessar o Firestore:", error);
  }
}

// Chama o contador assim que a página carrega
window.onload = atualizarContador;

// ====================== MÁQUINA DE ESCREVER ======================
document.addEventListener("DOMContentLoaded", () => {
  const text = "Bem vindo(a) ao meu Portfólio";
  let i = 0;
  const speed = 80;
  const typingEl = document.getElementById("typing-text");

  function typeWriter() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typingEl.textContent = "";
  typeWriter();

  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ScrollReveal
  ScrollReveal().reveal(".reveal", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 100,
    easing: "ease-in-out",
    reset: true,
    cleanup: true
  });
});

// ====================== MENU TOGGLE ======================
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu ul");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      menuList.classList.toggle("active");
    });
  }
});

// ====================== MODAL DE GIFS ======================
const gif1 = document.getElementById("gif-projeto1");
const gif2 = document.getElementById("gif-projeto2");
const modal = document.getElementById("gif-modal");
const modalGif = document.getElementById("modal-gif");

if (gif1) {
  gif1.addEventListener("click", () => {
    modalGif.src = gif1.src;
    modal.style.display = "flex";
  });
}
if (gif2) {
  gif2.addEventListener("click", () => {
    modalGif.src = gif2.src;
    modal.style.display = "flex";
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});

// ====================== DARK MODE ======================
document.addEventListener("DOMContentLoaded", () => {
  const darkToggleBtn = document.getElementById("dark-toggle");
  if (!darkToggleBtn) return;

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkToggleBtn.textContent = "Modo claro";
  } else {
    darkToggleBtn.textContent = "Modo escuro";
  }

  darkToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    darkToggleBtn.textContent = isDark ? "Modo claro" : "Modo escuro";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
