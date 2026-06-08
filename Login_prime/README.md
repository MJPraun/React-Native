# 🎬 Prime Video - Tela de Login (Clone)

Este projeto é um clone responsivo da tela de login da plataforma **Prime Video (Amazon)**.

O objetivo principal foi aplicar os conceitos fundamentais do ecossistema React, focando em componentização, manipulação de estados, efeitos colaterais e estilização escopada.

---

## 🚀 Tecnologias Utilizadas

* **React** (Biblioteca Javascript para construção de interfaces)
* **Vite** (Ferramenta de build rápida para o ecossistema frontend)
* **CSS Modules** (Estilização isolada e escopada por componente)
* **JavaScript (ES6+)**

---

## 🧠 Conceitos do React Aplicados no Projeto

Durante o desenvolvimento da aplicação, foram explorados e consolidados os seguintes recursos:

* **`useState` (Gerenciamento de Estado):** Utilizado como a "memória" do componente para capturar, armazenar e atualizar em tempo real os dados digitados nos campos de e-mail e senha.
* **`useEffect` & `useRef` (Efeitos Colaterais e Referências):** Implementados em conjunto para manipulação direta da DOM no carregamento da página. O `useEffect` detecta a renderização inicial e o `useRef` aplica o foco automático (`focus`) no primeiro campo de input, melhorando a experiência do usuário (UX).
* **Renderização Condicional:** Lógica aplicada para exibir um card informativo (`ResultBox`) no rodapé da página contendo os dados da última tentativa de envio, renderizado apenas se os campos de estado não estiverem vazios.
* **CSS Modules:** Abordagem de estilização nativa que gera um *hash* único para as classes CSS, garantindo que os estilos da tela de login fiquem totalmente restritos a ela, evitando vazamento de escopo.

---

## 📁 Estrutura de Pastas Importantes

```text
src/
 ├── assets/                 # Imagens e logotipos oficiais utilizados
 ├── App.css                 # Estilos globais da aplicação
 ├── App.jsx                 # Componente raiz
 ├── LoginForm.jsx           # Componente principal da tela de login (Hooks e Lógica)
 ├── LoginForm.module.css    # Estilização escopada (CSS Modules)
 └── main.jsx                # Ponto de entrada do React

---

## 📸 Demonstração da Tela

<img width="544" height="592" alt="screenshot" src="https://github.com/user-attachments/assets/310e5487-7908-4d12-9f4e-d6c626c660c2" />



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
