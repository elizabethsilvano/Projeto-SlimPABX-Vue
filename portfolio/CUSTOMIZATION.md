# 🎨 Guia de Personalização - Portfólio

Este guia mostra como personalizar facilmente o portfólio para atender suas necessidades específicas.

## 🎯 Personalização Rápida

### 1. Informações Pessoais

#### No arquivo `index.html`:

**Nome e Título (Linha ~31-33):**
```html
<h1 class="hero-title">Seu Nome Aqui</h1>
<h2 class="hero-subtitle">Seu Cargo/Especialidade</h2>
```

**Email e Links Sociais (Linha ~49-59):**
```html
<a href="mailto:seu-email@email.com">
<a href="https://linkedin.com/in/seu-perfil">
<a href="https://github.com/seu-usuario">
```

**Localização (Linha ~536):**
```html
<p>Sua Cidade, Seu Estado/País</p>
```

### 2. Cores e Tema

#### No arquivo `css/style.css` (Linhas 1-20):

**Cores Principais:**
```css
:root {
    --primary-color: #42b983;      /* Cor principal */
    --secondary-color: #35495e;     /* Cor secundária */
    --accent-color: #ff6b6b;        /* Cor de destaque */
    
    --vue-color: #42b983;           /* Verde Vue.js */
    --react-color: #61dafb;         /* Azul React */
    --angular-color: #dd0031;       /* Vermelho Angular */
}
```

**Esquemas de Cores Sugeridos:**

**Azul Profissional:**
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #f59e0b;
```

**Verde Moderno:**
```css
--primary-color: #10b981;
--secondary-color: #047857;
--accent-color: #f97316;
```

**Roxo Criativo:**
```css
--primary-color: #8b5cf6;
--secondary-color: #6d28d9;
--accent-color: #ec4899;
```

**Vermelho Impactante:**
```css
--primary-color: #ef4444;
--secondary-color: #dc2626;
--accent-color: #fbbf24;
```

### 3. Tipografia

#### Trocar Fontes (no `index.html`, linha ~11):

**Opções Google Fonts:**

**Roboto (Moderna e Limpa):**
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```
```css
--font-primary: 'Roboto', sans-serif;
```

**Inter (Profissional):**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
```css
--font-primary: 'Inter', sans-serif;
```

**Montserrat (Elegante):**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
```css
--font-primary: 'Montserrat', sans-serif;
```

### 4. Adicionar Foto Pessoal

#### Substituir o ícone placeholder (linha ~61):

**Antes:**
```html
<div class="profile-placeholder">
    <i class="fas fa-user-circle"></i>
</div>
```

**Depois:**
```html
<div class="profile-image">
    <img src="images/profile.jpg" alt="Seu Nome">
</div>
```

**CSS adicional necessário:**
```css
.profile-image {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### 5. Adicionar/Remover Seções

#### Remover uma seção:

Basta comentar ou deletar a seção completa no HTML:

```html
<!-- Comentar para esconder
<section id="about" class="about">
    ...
</section>
-->
```

E remover do menu:
```html
<!-- <li><a href="#about" class="nav-link">Sobre</a></li> -->
```

#### Adicionar nova seção:

```html
<section id="nova-secao" class="nova-secao">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Título da Seção</h2>
        <!-- Conteúdo aqui -->
    </div>
</section>
```

Adicionar ao menu:
```html
<li><a href="#nova-secao" class="nav-link">Nova Seção</a></li>
```

## 📝 Personalizações Avançadas

### 6. Adicionar Mais Projetos

#### No arquivo `index.html` (após linha ~335):

```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-project-diagram"></i>
        </div>
        <div class="project-overlay">
            <a href="URL_DO_PROJETO" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Ver Projeto
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3>Nome do Projeto</h3>
        <p class="project-description">
            Descrição detalhada do projeto...
        </p>
        <div class="project-tech">
            <span>Tecnologia 1</span>
            <span>Tecnologia 2</span>
            <span>Tecnologia 3</span>
        </div>
        <div class="project-links">
            <a href="URL_GITHUB" target="_blank" class="btn-project">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="URL_DEMO" target="_blank" class="btn-project">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 7. Adicionar Novas Habilidades

#### No arquivo `index.html` (seção skills):

**Nova Habilidade com Barra:**
```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-node-js"></i>
    </div>
    <h4>Node.js</h4>
    <div class="skill-level">
        <div class="skill-bar" style="--skill-level: 75%"></div>
    </div>
    <span class="skill-percent">Intermediário</span>
</div>
```

**Nova Tag de Tecnologia:**
```html
<span><i class="fab fa-docker"></i> Docker</span>
```

### 8. Modificar Animações

#### No arquivo `js/main.js`:

**Velocidade do efeito de digitação (linha ~95):**
```javascript
setTimeout(typeText, 100);  // Mude 100 para mais ou menos
```

**Duração da animação dos contadores (linha ~106):**
```javascript
const timer = setInterval(() => {
    // Mude 2000 para mais ou menos milissegundos
}, 16);
```

**Velocidade do scroll suave (linha ~63):**
```javascript
window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'  // ou 'auto' para instantâneo
});
```

### 9. Adicionar Formulário de Contato

#### Adicionar HTML (na seção contact):

```html
<form class="contact-form" id="contactForm">
    <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
</form>
```

#### CSS para o formulário:

```css
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-primary);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--border-color);
    border-radius: var(--radius-md);
    font-family: var(--font-primary);
    transition: var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}
```

#### JavaScript já está preparado no `main.js` (linha ~223)

### 10. Adicionar Modo Escuro

#### Toggle no HTML (adicionar no navbar):

```html
<button id="darkModeToggle" class="dark-mode-toggle" aria-label="Toggle dark mode">
    <i class="fas fa-moon"></i>
</button>
```

#### CSS para Dark Mode:

```css
[data-theme="dark"] {
    --text-primary: #e2e8f0;
    --text-secondary: #cbd5e0;
    --text-light: #a0aec0;
    --bg-primary: #1a202c;
    --bg-secondary: #2d3748;
    --bg-dark: #0f172a;
    --border-color: #374151;
}

.dark-mode-toggle {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 20px;
    cursor: pointer;
    padding: 8px;
    transition: var(--transition-fast);
}

.dark-mode-toggle:hover {
    color: var(--primary-color);
}
```

#### JavaScript já está preparado no `main.js` (linha ~324)

### 11. Adicionar Imagens aos Projetos

#### Substituir placeholder:

**Antes:**
```html
<div class="project-placeholder">
    <i class="fas fa-phone-volume"></i>
</div>
```

**Depois:**
```html
<img src="images/projeto-slim-pabx.png" alt="Slim PABX Dashboard">
```

**CSS adicional:**
```css
.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-normal);
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}
```

### 12. Personalizar Estatísticas

#### No arquivo `index.html` (linha ~115-145):

```html
<div class="stat-card">
    <i class="fas fa-code"></i>      <!-- Ícone -->
    <h3>4+</h3>                      <!-- Número -->
    <p>Anos de Experiência</p>       <!-- Descrição -->
</div>
```

#### No arquivo `js/main.js` (linha ~115), ajustar valores:

```javascript
const values = [4, 10, 1000, 5];  // Seus valores aqui
```

### 13. Adicionar Certificações

#### Nova seção após Skills:

```html
<section id="certifications" class="certifications">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Certificações</h2>
        <div class="certifications-grid">
            <div class="cert-card" data-aos="fade-up">
                <i class="fas fa-certificate"></i>
                <h3>Nome da Certificação</h3>
                <p>Instituição</p>
                <span class="cert-date">Ano</span>
            </div>
            <!-- Mais certificações -->
        </div>
    </div>
</section>
```

## 🎨 Templates de Cores

### Template 1: Tech Blue
```css
--primary-color: #0ea5e9;
--secondary-color: #0284c7;
--accent-color: #f97316;
```

### Template 2: Nature Green
```css
--primary-color: #22c55e;
--secondary-color: #16a34a;
--accent-color: #eab308;
```

### Template 3: Creative Purple
```css
--primary-color: #a855f7;
--secondary-color: #9333ea;
--accent-color: #f472b6;
```

### Template 4: Professional Gray
```css
--primary-color: #64748b;
--secondary-color: #475569;
--accent-color: #06b6d4;
```

## 📱 Adicionar Links de Redes Sociais

#### No arquivo `index.html` (linha ~49):

**Twitter/X:**
```html
<a href="https://twitter.com/seu_usuario" target="_blank">
    <i class="fab fa-twitter"></i>
</a>
```

**Instagram:**
```html
<a href="https://instagram.com/seu_usuario" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

**WhatsApp:**
```html
<a href="https://wa.me/5511999999999" target="_blank">
    <i class="fab fa-whatsapp"></i>
</a>
```

**Medium:**
```html
<a href="https://medium.com/@seu_usuario" target="_blank">
    <i class="fab fa-medium"></i>
</a>
```

## 🔍 SEO Avançado

### Meta Tags Adicionais (no `<head>`):

```html
<!-- SEO Básico -->
<meta name="keywords" content="frontend, developer, vue.js, react, angular">
<meta name="author" content="Seu Nome">
<meta name="robots" content="index, follow">

<!-- Open Graph (Facebook) -->
<meta property="og:type" content="website">
<meta property="og:title" content="Seu Nome | Frontend Engineer">
<meta property="og:description" content="Sua descrição">
<meta property="og:image" content="URL_da_imagem_de_preview">
<meta property="og:url" content="URL_do_seu_portfolio">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Seu Nome | Frontend Engineer">
<meta name="twitter:description" content="Sua descrição">
<meta name="twitter:image" content="URL_da_imagem_de_preview">
```

## 🎯 Dicas Finais

1. **Teste sempre após cada mudança**
2. **Use o DevTools do navegador** para inspecionar elementos
3. **Mantenha backup** antes de grandes mudanças
4. **Valide HTML** em https://validator.w3.org/
5. **Teste responsividade** em vários dispositivos
6. **Otimize imagens** antes de adicionar (use TinyPNG)
7. **Mantenha consistência** no design

## 📚 Recursos Úteis

- **Cores:** https://coolors.co/
- **Ícones:** https://fontawesome.com/icons
- **Fontes:** https://fonts.google.com/
- **Gradientes:** https://cssgradient.io/
- **Animações CSS:** https://animate.style/
- **Imagens gratuitas:** https://unsplash.com/

---

**Precisa de ajuda?**
- Email: elizabeth.tj@hotmail.com
- LinkedIn: linkedin.com/in/elizabeth-silvano

**Divirta-se personalizando! 🎨✨**
