import { useParams, Link } from "react-router-dom";
import { getMenuItemById } from "@/data/menuData";

export default function MenuItemPage() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getMenuItemById(id) : null;

  if (!item) {
    return (
      <div className="container mx-auto py-16">
        <p className="text-xl">Item not found.</p>
        <Link to="/orders" className="underline">← Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl py-16">
      <h1 className="text-4xl font-bold mb-4">{item.nameEn}</h1>
      <p className="text-lg text-gray-500 mb-2">{item.nameJp}</p>

      {item.image && (
        <img 
          src={item.image} 
          alt={item.nameEn} 
          className="w-full mb-6 rounded-lg shadow"
        />
      )}

      <p className="text-2xl font-semibold mb-6">AED {item.price}</p>
      <p className="mb-10 text-lg">{item.detailedDescription || item.description}</p>

      <Link to="/orders" className="underline">← Back to Menu</Link>
    </div>
  );
}
