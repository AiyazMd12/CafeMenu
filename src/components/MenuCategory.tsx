import { ReactNode } from "react";

interface MenuCategoryProps {
  title: string;
  children: ReactNode;
}

const MenuCategory = ({ title, children }: MenuCategoryProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="ornament-line flex-1" />
        <h2 className="font-serif text-2xl md:text-3xl text-foreground whitespace-nowrap">
          {title}
        </h2>
        <div className="ornament-line flex-1" />
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default MenuCategory;
