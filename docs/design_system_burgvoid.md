# Design System — BurgVoid

Documentação dos padrões visuais, tokens de design, componentes e diretrizes extraídos do layout **BurgVoid**.

---

## 1. Cores

### Paleta Primária, Secundária e Neutros
| Categoria | Nome | Código HEX | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| **Primária** | Brand Orange | `#F38307` | Botões de destaque, preço, destaques de títulos, badges primários |
| **Primária** | Brand Orange Hover | `#D87100` | Estado de hover/interação dos elementos de destaque |
| **Secundária** | Dark Navy | `#12202E` | Card de fundo "Best Combos", cabeçalhos pesados, CTA secundário top-bar |
| **Secundária** | Dark Navy Hover | `#0B1520` | Hover em elementos Dark Navy |
| **Background Principal** | Cream Canvas | `#FAF5EC` | Fundo principal da página (seção Hero e Rodapé CTA) |
| **Background Cards** | Soft Warm Card | `#FBF3E8` | Card background suave da seção de destaques ("Featured Menu") |
| **Neutros** | Surface White | `#FFFFFF` | Fundo do container central do menu e de seções divididas |
| **Neutros** | Text Primary Dark | `#1B1C1E` | Títulos, textos principais, nomes dos produtos |
| **Neutros** | Text Muted / Body | `#52525B` | Descrições curtas dos pratos, textos secundários de apoio |
| **Neutros** | Border Light | `#E5E0D8` | Bordas de botões vazados, linhas divisórias e contornos |

### Cores de Estado e Feedback
| Estado | Código HEX | Uso Recomendado |
| :--- | :--- | :--- |
| **Hover (Primary)** | `#D87100` | Transição suave ao passar o mouse sobre botões laranjas |
| **Active / Pressed** | `#B85E00` | Clique efetuado nos botões primários |
| **Success** | `#22C55E` | Confirmação de pedido, itens adicionados ao carrinho |
| **Error / Alert** | `#EF4444` | Alertas de campos incorretos ou erro no formulário |
| **Focus Ring** | `#F38307` | Anel de foco acessível para navegação via teclado |

---

## 2. Tipografia

### Famílias Tipográficas
*   **Display / Headings (Títulos Dramáticos):** `Bebas Neue`, `Impact` ou `Alfa Slab One` (Display sem-serifa condensada e encorpada com estética *chunky* e moderna).
*   **Body & Navigation (Corpo e Navegação):** `Plus Jakarta Sans`, `Inter` ou `Poppins` (Sem-serifa moderna, com excelente legibilidade em pequenas telas).

### Escala Tipográfica
| Nível | Família | Tamanho (px / rem) | Peso (Weight) | Height (Line-Height) | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (Hero Headline)** | Display | 64px / 4.0rem | 900 (Black) | 1.05 | 0.02em |
| **H1 (Section Titles)** | Display | 36px / 2.25rem | 800 (ExtraBold) | 1.15 | 0.05em |
| **H2 (Card / Banner Title)** | Display | 28px / 1.75rem | 800 (ExtraBold) | 1.20 | 0.03em |
| **H3 (Product Name)** | Body | 18px / 1.125rem | 800 (ExtraBold) | 1.25 | -0.01em |
| **Price Tag** | Body | 16px / 1.0rem | 800 (ExtraBold) | 1.20 | 0.00em |
| **Body Primary** | Body | 15px / 0.938rem | 500 (Medium) | 1.50 | 0.00em |
| **Body Small / Captions** | Body | 13px / 0.812rem | 400 (Regular) | 1.40 | 0.01em |
| **Nav Links / Buttons** | Body | 14px / 0.875rem | 700 (Bold) | 1.00 | 0.02em |

---

## 3. Tokens CSS (`:root`)

```css
:root {
  /* Brand Colors */
  --color-primary: #F38307;
  --color-primary-hover: #D87100;
  --color-primary-active: #B85E00;
  --color-secondary: #12202E;
  --color-secondary-hover: #0B1520;

  /* Background Colors */
  --color-bg-main: #FAF5EC;
  --color-bg-card-warm: #FBF3E8;
  --color-bg-white: #FFFFFF;

  /* Neutral Text Colors */
  --color-text-main: #1B1C1E;
  --color-text-muted: #52525B;
  --color-text-white: #FFFFFF;
  --color-border: #E5E0D8;

  /* Feedback Colors */
  --color-success: #22C55E;
  --color-error: #EF4444;

  /* Typography */
  --font-display: 'Alfa Slab One', 'Bebas Neue', sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* Typography Sizes */
  --font-size-display: 4rem;
  --font-size-h1: 2.25rem;
  --font-size-h2: 1.75rem;
  --font-size-h3: 1.125rem;
  --font-size-body: 0.938rem;
  --font-size-sm: 0.812rem;

  /* Spacing Scale */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-card: 0 10px 25px -5px rgba(18, 32, 46, 0.08);
  --shadow-button: 0 4px 12px rgba(243, 131, 7, 0.25);
}
```

---

## 4. Layout

### Container e Grid
*   **Max-Width Container:** `1200px` (centralizado via `margin: 0 auto`).
*   **Grid de Produtos (Desktop):** 4 colunas (`grid-cols-4`, gap de `20px`).
*   **Grid de Produtos (Tablet):** 2 colunas (`grid-cols-2`, gap de `16px`).
*   **Grid de Produtos (Mobile):** 1 coluna (`grid-cols-1`, gap de `16px`).

### Breakpoints
| Breakpoint | Largura | Comportamento do Layout |
| :--- | :--- | :--- |
| **Mobile** | `< 640px` | Layout empilhado em coluna única; menu em drawer/hambúrguer. |
| **Tablet** | `640px - 1024px` | Menu simplificado; grid de produtos em 2 colunas. |
| **Desktop** | `> 1024px` | Layout expandido em 4 colunas; visualização completa de elementos fotográficos. |

---

## 5. Componentes

### 1. Botões (`Button`)

```html
<!-- Botão Primário (Pill Fill) -->
<button class="bg-[#F38307] hover:bg-[#D87100] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-200 text-sm">
  Explore Menu
</button>

<!-- Botão Secundário (Pill Outlined) -->
<button class="bg-transparent hover:bg-black/5 text-[#1B1C1E] font-bold py-3 px-8 rounded-full border-2 border-[#1B1C1E] transition-all duration-200 text-sm">
  Order Now
</button>

<!-- Botão Dark Banner CTA -->
<button class="bg-[#12202E] hover:bg-[#0B1520] text-white font-bold py-2.5 px-6 rounded-full text-xs transition-colors">
  Order Now
</button>
```

### 2. Cards de Produtos (`Product Card`)

```html
<div class="bg-[#FBF3E8] rounded-2xl p-5 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-200">
  <div class="w-full h-36 mb-4 flex items-center justify-center">
    <img src="/images/burger-sample.png" alt="Beef Cheese" class="max-h-full object-contain filter drop-shadow-md" />
  </div>
  <h3 class="font-extrabold text-[#1B1C1E] text-base tracking-wide uppercase mb-2">BEEF CHEESE</h3>
  <p class="text-[#52525B] text-xs leading-relaxed mb-4 line-clamp-2">Juicy beef patty with melted cheese and fresh veggies.</p>
  <span class="text-[#F38307] font-extrabold text-sm mt-auto">Rp 42.000</span>
</div>
```

### 3. Banner Destaque ("Best Combos")

```html
<div class="bg-[#12202E] rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white">
  <div class="z-10 space-y-4 max-w-sm text-center md:text-left">
    <span class="text-[#F38307] font-bold text-xs tracking-widest uppercase">— OUR —</span>
    <h2 class="text-4xl font-black text-white tracking-wider">BEST COMBOS</h2>
    <div>
      <button class="bg-[#F38307] hover:bg-[#D87100] text-white font-bold py-3 px-8 rounded-full text-sm transition-all">
        Order Combo
      </button>
    </div>
  </div>
  <div class="mt-6 md:mt-0 relative z-10 flex gap-2">
    <!-- Imagens compostas dos hambúrgueres sobre tábuas/pratos -->
  </div>
</div>
```

### 4. Navegação Superior (`Header Nav`)

```html
<header class="w-full bg-[#FAF5EC] py-4 px-8 flex items-center justify-between max-w-7xl mx-auto">
  <!-- Logo -->
  <div class="flex items-center gap-2">
    <span class="text-2xl">🍔</span>
    <span class="text-2xl font-black tracking-tight text-[#12202E]">BurgVoid</span>
  </div>
  
  <!-- Links -->
  <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1B1C1E]">
    <a href="#" class="text-[#F38307] font-bold">Home</a>
    <a href="#" class="hover:text-[#F38307] transition-colors">Menu</a>
    <a href="#" class="hover:text-[#F38307] transition-colors">Promo</a>
    <a href="#" class="hover:text-[#F38307] transition-colors">About</a>
    <a href="#" class="hover:text-[#F38307] transition-colors">Contact</a>
  </nav>

  <!-- Action CTA -->
  <button class="bg-[#12202E] hover:bg-[#0B1520] text-white font-bold py-2.5 px-6 rounded-full text-xs transition-colors">
    Order Now
  </button>
</header>
```

### 5. Badges de Benefícios (`Feature Badges`)

```html
<div class="flex items-center gap-3">
  <div class="w-10 h-10 rounded-full bg-[#F38307]/15 flex items-center justify-center text-[#F38307]">
    <!-- Ícone de Vetor / Ilustrativo -->
    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><!-- icon path --></svg>
  </div>
  <div class="text-left">
    <h4 class="font-extrabold text-xs text-[#1B1C1E] uppercase">100%</h4>
    <p class="text-[11px] text-[#52525B] leading-tight">Fresh Ingredients</p>
  </div>
</div>
```

---

## 6. Responsividade

### Diretrizes Mobile-First
1.  **Mobile (< 640px):**
    *   O container Hero reorganiza a imagem do hambúrguer para o topo ou centro, abaixo dos títulos.
    *   A grid de produtos exibe 1 card por linha com largura estendida.
    *   O cabeçalho converte os links em um menu *Hamburger* lateral.
    *   O banner Dark "Best Combos" reduz padding e alinha textos centralizadamente.

2.  **Tablet (640px - 1024px):**
    *   Grid do menu passa a exibir 2 ou 3 colunas de cards.
    *   Badges de vantagens ("Fresh Ingredients", "Fast Delivery") ficam dispostos em grid de 2x2.

3.  **Desktop (> 1024px):**
    *   Exibição completa de 4 colunas no menu de destaques.
    *   Elemento orgânico de background (pincelada/onda laranja) ativo no canto superior direito do Hero.

---

## 7. Usabilidade e Acessibilidade

1.  **Contraste Tipográfico (WCAG AA):**
    *   Texto escuro (`#1B1C1E`) sobre fundo Creme (`#FAF5EC`) atinge razão de contraste superior a **12:1** (Aprovado AAA).
    *   Texto branco (`#FFFFFF`) sobre o botão Primário Laranja (`#F38307`) atinge contraste aproximado de **3.1:1**. Recomenda-se o uso de fonte com peso `ExtraBold` (900) para manter legibilidade em textos de tamanho médio/grande.
2.  **Área de Toque (Touch Targets):**
    *   Todos os botões em formato de pílula têm altura mínima de **44px** a **48px**, garantindo alvos de toque seguros em telas móveis.
3.  **Foco Visível:**
    *   Elementos interativos (botões, links, inputs) devem ter `outline-color: #F38307` e `outline-offset: 2px` para navegação via teclado.
4.  **Hierarquia Visual Claríssima:**
    *   A diferenciação de escala entre o Hero Display (`64px`) e os nomes de produtos (`18px`) estabelece uma sequência de leitura fluida.

---

## 8. Direção de Imagens

### Estilo Fotográfico
*   **Iluminação e Saturação:** Imagens fotográficas de alta definição com iluminação quente e realce na suculência e textura dos ingredientes (queijo derretido, vegetais frescos, brilho nos pães).
*   **Fundo e Isolamento:** Fotos sem fundo estático (PNG transparente com sombra projetada suave/suave realista no plano horizontal) para integração total com o fundo Creme (`#FAF5EC`).
*   **Elementos Gráficos e Ilustrativos:**
    *   Pinceladas/Texturas Laranjas em estilo *Brush/Paint Splash* delimitando bordas e fundos.
    *   Setas desenhadas à mão (hand-drawn scribbles) na cor preta para indicar detalhes do produto.
    *   Ícones flat minimalistas em tons de laranja para seções de facilidades/benefícios.

---

## 9. Regras de Implementação

### Convenções de Nomenclatura e Tailwind CSS
*   **Prefixos de Cores Tailwind Personalizados:**
    ```javascript
    // tailwind.config.js
    module.exports = {
      theme: {
        extend: {
          colors: {
            burgvoid: {
              orange: '#F38307',
              'orange-hover': '#D87100',
              navy: '#12202E',
              cream: '#FAF5EC',
              card: '#FBF3E8',
              dark: '#1B1C1E',
              gray: '#52525B',
            }
          },
          fontFamily: {
            display: ['Alfa Slab One', 'Bebas Neue', 'sans-serif'],
            body: ['Plus Jakarta Sans', 'sans-serif'],
          }
        }
      }
    }
    ```

### Boas Práticas
*   Utilize a classe `drop-shadow-lg` nativa nas imagens de alimentos sem fundo para criar profundidade com o plano do card.
*   Mantenha os cantos dos botões sempre totalmente arredondados (`rounded-full`).
*   Mantenha os cantos dos cards de produto com arredondamento moderado a alto (`rounded-2xl` ou `rounded-3xl`).

### O Que Evitar
*   ❌ Não utilize sombras frias ou pretas puras (`rgba(0,0,0,1)`). Dê preferência a sombras com nuances quentes ou tom Navy diluído.
*   ❌ Não misture fontes serifadas clássicas; mantenha a estética moderna e apetitosa do projeto.
*   ❌ Não utilize fundos completamente brancos puro (`#FFFFFF`) na página inteira; o tom Creme (`#FAF5EC`) é fundamental para a identidade aconchegante da marca.