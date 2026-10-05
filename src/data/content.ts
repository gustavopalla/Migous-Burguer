export const brand = {
  name: "Migou's",
  fullName: "Migou's Burger",
  city: "Campinas · SP",
  address: "Avenida Arymana, 818",
  district: "Parque Dom Pedro II · Campinas, SP",
  phoneLabel: "(19) 99661-9466",
  whatsapp: "https://wa.me/5519996619466",
  orderUrl: "https://menu.beefood.com.br/migousburgercampinas",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Arymana+818+Campinas+SP",
};

export const hours = [{ day: "Todos os dias", time: "17h30 – 23h00" }];

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  photo?: string;
};

export type MenuCategory = { id: string; label: string; items: MenuItem[] };

const p = (slug: string) => `/images/menu/${slug}.webp`;

export const menu: MenuCategory[] = [
  {
    id: "lanches",
    label: "Lanches",
    items: [
      {
        name: "Burger Duplo",
        desc: "Pão de brioche, 2 hambúrgueres artesanais de 90g, dois tipos de queijos quentes (cheddar e prato fatiados) e molho especial caseiro.",
        price: "R$ 32,00",
        photo: p("burger-duplo"),
      },
      {
        name: "Frango Steak",
        desc: "Pão de brioche, frango empanado de 100g, alface americana, cebola, dois tipos de queijos quentes (cheddar e prato fatiados) e molho especial caseiro.",
        price: "R$ 32,00",
      },
      {
        name: "Salada Duplo",
        desc: "Pão de brioche, 2 hambúrgueres artesanais de 90g, dois tipos de queijos quentes (cheddar e prato fatiados), alface americana fresca, tomate, cebola roxa e molho especial caseiro.",
        price: "R$ 38,00",
      },
      {
        name: "Bacon Duplo",
        desc: "Pão de brioche, 2 hambúrgueres artesanais de 90g, dois tipos de queijos quentes (cheddar e prato fatiados), bacon em pedaços e molho especial caseiro.",
        price: "R$ 40,00",
      },
      {
        name: "Onion Duplo",
        desc: "2 carnes de 90 gramas no pão brioche, queijo cheddar, queijo prato, barbecue, 3 onion rings e molho especial.",
        price: "R$ 41,00",
      },
      {
        name: "Big Triplo",
        desc: "Pão de brioche, 3 hambúrgueres artesanais de 90g, dois tipos de queijos quentes (cheddar e prato fatiados), bacon, alface americana fresca, tomate, cebola roxa e molho especial caseiro.",
        price: "R$ 48,00",
      },
      {
        name: "Catupiry Empanado Duplo",
        desc: "Pão de brioche, 2 hambúrgueres artesanais de 90g, dois tipos de queijos quentes (cheddar e prato fatiados), bacon em pedaços, molho especial, geleia de pimenta e requeijão catupiry empanado.",
        price: "R$ 54,00",
      },
      {
        name: "Costelinha Duplo",
        desc: "2 carnes de 90 gramas no pão brioche, queijo cheddar, queijo prato, molho da casa, cebola, cream cheese e costelinha suína defumada num leve barbecue. Ideal pra quem curte uma experiência agridoce.",
        price: "R$ 54,00",
      },
      {
        name: "Piscininha de Cheddar",
        desc: "Pão de brioche, 2 hambúrgueres de 90g, uma fatia de queijo cheddar, uma fatia de queijo prato, bacon e molho. Acompanha cheddar cremoso e bacon em cubos no potinho de 250ml.",
        price: "R$ 57,00",
      },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    items: [
      {
        name: "Combo Kids",
        desc: "Lanche com pão de brioche, 1 hambúrguer de 90g, queijo cheddar, queijo prato e molho. Acompanha batata P, suco de uva Kapo, bala Fini e um mimo.",
        price: "R$ 49,00",
        photo: p("combo-kids"),
      },
      {
        name: "Combo Burger",
        desc: "Burger Duplo + fritas P + bebida.",
        price: "R$ 54,00",
        photo: p("combo-burger"),
      },
      {
        name: "Combo Frango",
        desc: "Frango Steak + fritas P + bebida.",
        price: "R$ 54,00",
        photo: p("combo-frango"),
      },
      {
        name: "Combo Picles",
        desc: "Pão de brioche, 2 hambúrgueres artesanais de 90g, cheddar e prato fatiados, picles agridoce, cebola roxa, ketchup, mostarda e molho especial caseiro + fritas P + bebida.",
        price: "R$ 60,00",
        photo: p("combo-picles"),
      },
      {
        name: "Combo Salada",
        desc: "Salada Duplo + fritas P + bebida.",
        price: "R$ 60,00",
        photo: p("combo-salada"),
      },
      {
        name: "Combo Bacon",
        desc: "Bacon Duplo + fritas P + bebida.",
        price: "R$ 62,00",
        photo: p("combo-bacon"),
      },
      {
        name: "Combo Onion",
        desc: "Onion Duplo + fritas P + bebida.",
        price: "R$ 63,00",
        photo: p("combo-onion"),
      },
      {
        name: "Combo Big",
        desc: "Big Triplo + fritas P + bebida.",
        price: "R$ 70,00",
        photo: p("combo-big"),
      },
      {
        name: "Combo Catupiry Empanado",
        desc: "Catupiry Empanado Duplo + fritas P + bebida.",
        price: "R$ 76,00",
        photo: p("combo-catupiry"),
      },
      {
        name: "Combo Costelinha",
        desc: "Costelinha Duplo + fritas P + bebida.",
        price: "R$ 76,00",
        photo: p("combo-costelinha"),
      },
    ],
  },
  {
    id: "porcoes",
    label: "Porções",
    items: [
      { name: "Batata Crinkle Tradicional", desc: "200g", price: "R$ 20,00" },
      { name: "Porção de Nuggets", desc: "8 unidades", price: "R$ 21,00" },
      { name: "Porção de Onion Rings", desc: "10 unidades", price: "R$ 24,00" },
      {
        name: "Batata Crinkle + Cheddar e Bacon",
        desc: "Serve em média 2 pessoas (390g)",
        price: "R$ 37,00",
      },
      {
        name: "Batata com Catupiry e Bacon",
        desc: "Serve em média 2 pessoas (390g)",
        price: "R$ 45,00",
      },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    items: [
      { name: "Casquinha", price: "R$ 6,00", photo: p("casquinha") },
      {
        name: "Sundae",
        desc: "Com amendoim granulado e calda à sua escolha · 170ml",
        price: "R$ 11,00",
        photo: p("sundae"),
      },
      {
        name: "Milkshake",
        desc: "400ml",
        price: "A partir de R$ 26,00",
        photo: p("milkshake"),
      },
      { name: "Churros", price: "R$ 27,00", photo: p("churros") },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { name: "Água sem gás", desc: "500ml", price: "R$ 5,00" },
      { name: "Água com gás", desc: "500ml", price: "R$ 5,00" },
      { name: "Coca-Cola", desc: "Lata 350ml", price: "R$ 8,00" },
      { name: "Coca-Cola sem açúcar", desc: "350ml", price: "R$ 8,00" },
      { name: "Guaraná Antarctica", desc: "350ml", price: "R$ 8,00" },
      { name: "Guaraná Antarctica sem açúcar", desc: "350ml", price: "R$ 8,00" },
      { name: "Schweppes", desc: "350ml", price: "R$ 8,00" },
      { name: "Schweppes sem açúcar", desc: "350ml", price: "R$ 8,00" },
      { name: "Fanta Laranja", desc: "350ml", price: "R$ 8,00" },
      { name: "Fanta Uva", desc: "350ml", price: "R$ 8,00" },
      { name: "Del Valle Pêssego", desc: "290ml", price: "R$ 8,00" },
      { name: "Del Valle Uva", desc: "290ml", price: "R$ 8,00" },
      { name: "Heineken", desc: "Long neck 330ml", price: "R$ 14,00" },
      { name: "Stella Artois", desc: "Long neck 330ml", price: "R$ 14,00" },
      {
        name: "Suco natural de laranja",
        desc: "Sem adição de açúcar · 500ml",
        price: "R$ 15,00",
      },
    ],
  },
];

const find = (cat: string, name: string) =>
  menu.find((c) => c.id === cat)!.items.find((i) => i.name === name)!;

export const highlights = [
  find("lanches", "Burger Duplo"),
  find("combos", "Combo Catupiry Empanado"),
  find("combos", "Combo Costelinha"),
  find("combos", "Combo Big"),
];

export const featuredCombos = [
  find("combos", "Combo Burger"),
  find("combos", "Combo Bacon"),
  find("combos", "Combo Big"),
];

export const faqs = [
  {
    q: "Como faço meu pedido?",
    a: "Pelo cardápio digital (botão “Pedir agora”) ou chamando a gente no WhatsApp, (19) 99661-9466.",
  },
  {
    q: "A maionese é cobrada?",
    a: "Não. Todos os lanches do cardápio saem com maionese cortesia.",
  },
  {
    q: "Tem opção para crianças?",
    a: "Tem sim: o Combo Kids vem com lanche de 1 hambúrguer de 90g, batata P, suco de uva, bala Fini e um mimo.",
  },
  {
    q: "Tem promoção de aniversário?",
    a: "Tem. No seu aniversário o milkshake é por nossa conta, ou uma porção de batata com cheddar e bacon. Chame no WhatsApp para confirmar as condições.",
  },
  {
    q: "Qual o horário de funcionamento?",
    a: "Todos os dias, das 17h30 às 23h.",
  },
  {
    q: "Onde fica o Migou's?",
    a: "Avenida Arymana, 818, Parque Dom Pedro II, Campinas · SP. Trabalhamos com delivery.",
  },
];

export const features = [
  { icon: "/images/icon-blend.png", title: "2 × 90g", text: "Carnes artesanais" },
  { icon: "/images/icon-fresh.png", title: "Brioche", text: "Pão macio em todos os lanches" },
  { icon: "/images/icon-delivery.png", title: "Delivery", text: "Em Campinas · SP" },
];

export const navLinks = [
  { href: "#destaques", label: "Destaques" },
  { href: "#combos", label: "Combos" },
  { href: "#cardapio-completo", label: "Cardápio" },
  { href: "#local", label: "Onde estamos" },
  { href: "#faq", label: "Dúvidas" },
];
