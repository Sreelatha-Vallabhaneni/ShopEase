import leatherBag from "@/assets/products/leather-bag.jpg";
import ceramicVase from "@/assets/products/ceramic-vase.jpg";
import scentedCandle from "@/assets/products/scented-candle.jpg";
import sunglasses from "@/assets/products/sunglasses.jpg";
import woolThrow from "@/assets/products/wool-throw.jpg";
import waterBottle from "@/assets/products/water-bottle.jpg";
import linenTote from "@/assets/products/linen-tote.jpg";
import deskOrganizer from "@/assets/products/desk-organizer.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const categories = ["All", "Bags", "Home", "Accessories", "Lifestyle"] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Cognac Crossbody Bag",
    price: 128,
    category: "Bags",
    image: leatherBag,
    description: "Hand-stitched leather crossbody in rich cognac. Adjustable strap, brass hardware.",
  },
  {
    id: "2",
    name: "Speckled Ceramic Vase",
    price: 64,
    category: "Home",
    image: ceramicVase,
    description: "Wheel-thrown stoneware vase with a creamy speckled glaze. Each one unique.",
  },
  {
    id: "3",
    name: "Amber & Cedar Candle",
    price: 38,
    category: "Home",
    image: scentedCandle,
    description: "Hand-poured soy candle with warm amber, cedar, and a hint of bergamot. 60-hour burn.",
  },
  {
    id: "4",
    name: "Tortoise Round Sunglasses",
    price: 95,
    category: "Accessories",
    image: sunglasses,
    description: "Acetate frame with polarized lenses. UV400 protection. Classic tortoise finish.",
  },
  {
    id: "5",
    name: "Oatmeal Wool Throw",
    price: 112,
    category: "Home",
    image: woolThrow,
    description: "Chunky-knit merino wool throw in warm oatmeal. Fringe detailing, 130×170 cm.",
  },
  {
    id: "6",
    name: "Matte Black Water Bottle",
    price: 34,
    category: "Lifestyle",
    image: waterBottle,
    description: "Double-wall insulated stainless steel. Keeps drinks cold 24h or hot 12h. 750ml.",
  },
  {
    id: "7",
    name: "Natural Linen Tote",
    price: 52,
    category: "Bags",
    image: linenTote,
    description: "Oversized linen-cotton tote with reinforced handles. Perfect daily carryall.",
  },
  {
    id: "8",
    name: "Walnut Desk Organizer",
    price: 78,
    category: "Lifestyle",
    image: deskOrganizer,
    description: "Solid walnut with three compartments. Oil-finished to highlight the natural grain.",
  },
];
