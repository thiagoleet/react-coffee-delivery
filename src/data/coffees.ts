import { Coffee } from "@/models/Coffee";

const coffees: Coffee[] = [
  {
    id: "tradicional",
    name: "Espresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: "/expresso.png",
    price: 999,
    tags: ["tradicional"],
  },
  {
    id: "americano",
    name: "Espresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: "/americano.png",
    price: 999,
    tags: ["tradicional"],
  },
  {
    id: "expresso-cremoso",
    name: "Espresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: "/expresso-cremoso.png",
    price: 999,
    tags: ["tradicional"],
  },
  {
    id: "cafe-gelado",
    name: "Espresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: "/cafe-gelado.png",
    price: 999,
    tags: ["tradicional", "gelado"],
  },
  {
    id: "cafe-com-leite",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: "/cafe-com-leite.png",
    price: 999,
    tags: ["tradicional", "com leite"],
  },
  {
    id: "latte",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: "/latte.png",
    price: 999,
    tags: ["tradicional", "com leite"],
  },
  {
    id: "capuccino",
    name: "Cappuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: "/capuccino.png",
    price: 999,
    tags: ["tradicional", "com leite"],
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: "/macchiato.png",
    price: 999,
    tags: ["tradicional", "com leite"],
  },
  {
    id: "mochaccino",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: "/mochaccino.png",
    price: 999,
    tags: ["tradicional", "com leite"],
  },
  {
    id: "chocolate-quente",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: "/chocolate-quente.png",
    price: 999,
    tags: ["especial", "com leite"],
  },
  {
    id: "cubano",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: "/cubano.png",
    price: 999,
    tags: ["especial", "alcoólico", "gelado"],
  },
  {
    id: "havaiano",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: "/havaiano.png",
    price: 999,
    tags: ["especial"],
  },
  {
    id: "arabe",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: "/arabe.png",
    price: 999,
    tags: ["especial"],
  },
  {
    id: "irlandes",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: "/irlandes.png",
    price: 999,
    tags: ["especial", "alcoólico"],
  },
];

export default coffees;
