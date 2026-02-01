interface MenuItemProps {
  name: string;
  price: string;
}

const MenuItem = ({ name, price }: MenuItemProps) => {
  return (
    <div className="flex items-baseline justify-between gap-4 group">
      <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
        {name}
      </span>
      <span className="flex-1 border-b border-dotted border-border/50 min-w-8" />
      <span className="font-serif text-lg md:text-xl text-primary">
        {price}
      </span>
    </div>
  );
};

export default MenuItem;
