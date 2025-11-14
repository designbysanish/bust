// src/components/MenuSection.tsx
import { Link } from 'react-router-dom';
import { menuItems, MenuItem } from '@/data/menuData';

interface MenuSectionProps {
  categoryFilter?: string; // optional: filter by category
}

export const MenuSection = ({ categoryFilter }: MenuSectionProps) => {
  const itemsToShow: MenuItem[] = categoryFilter
    ? menuItems.filter(item => item.category === categoryFilter)
    : menuItems;

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-display font-bold mb-8 text-center">
        Our <span className="text-gradient">Menu</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itemsToShow.map(item => (
          <Link
            key={item.id}
            to={`/menu/${item.id}`} // <-- correct link to MenuItemDetail
            className="glass p-6 rounded-xl shadow-3d hover:shadow-elevated transition-all duration-300 hover:scale-105"
          >
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.nameEn}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-4xl">🍽️</span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-display font-bold mb-2">{item.nameEn}</h3>
            <p className="text-sm text-muted-foreground mb-3" dangerouslySetInnerHTML={{ __html: item.description }} />
            <span className="text-primary font-bold">{item.price} AED</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
