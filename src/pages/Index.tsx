import MenuCategory from "@/components/MenuCategory";
import MenuItem from "@/components/MenuItem";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-primary">✦</span>
            <div className="ornament-line w-12" />
            <span className="text-primary">✦</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-gradient-gold mb-3">
            CAFE BRUME
          </h1>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Premium Shisha Lounge
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="ornament-line w-20" />
            <span className="text-primary text-sm">❧</span>
            <div className="ornament-line w-20" />
          </div>
        </header>
        <main>
          <MenuCategory title="Chinese">
            <MenuItem name="Chicken Fried Rice" price="₹149" />
            <MenuItem name="Chicken Soft Noodles" price="₹149" />
            <MenuItem name="Egg Fried Rice" price="₹139" />
            <MenuItem name="Egg Soft Noodles" price="₹139" />
            <MenuItem name="Veg Fried Rice" price="₹120" />
            <MenuItem name="Veg Soft Noodles" price="₹120" />
            <MenuItem name="Mixed Fried Rice" price="₹130" />
          </MenuCategory>

          <MenuCategory title="Starters">
            <MenuItem name="Chicken 65" price="₹199" />
            <MenuItem name="Chilli Chicken" price="₹199" />
            <MenuItem name="Chicken lollipop" price="₹199" />
            <MenuItem name="Crispy Chicken" price="₹199" />
            <MenuItem name="Veg Manchurian" price="₹199" />
          </MenuCategory>

          <MenuCategory title="Snacks">
            <MenuItem name="French Fries" price="₹120" />
            <MenuItem name="Chicken Nuggets" price="₹199" />
            <MenuItem name="Harabara kabab" price="₹150" />
          </MenuCategory>

          <MenuCategory title="Mojito">
            <MenuItem name="Virgin Mojito" price="₹129" />
            <MenuItem name="Mint Mojito" price="₹129" />
            <MenuItem name="Blue Corraaco" price="₹129" />
            <MenuItem name="Ginger Mocktail" price="₹129" />
            <MenuItem name="Lychee" price="₹129" />
            <MenuItem name="Blue Berry" price="₹129" />
            <MenuItem name="Pineapple" price="₹129" />
            <MenuItem name="Lemon Soda" price="₹129" />
            <MenuItem name="Orange Mojito" price="₹129" />
          </MenuCategory>

          <MenuCategory title="Beverages">
            <MenuItem name="Water bottle" price="₹20" />
            <MenuItem name="Diet Coke" price="₹40" />
            <MenuItem name="Hell" price="₹60" />
            <MenuItem name="Predator" price="₹60" />
            <MenuItem name="Monster" price="₹125" />
            <MenuItem name="Red Bull" price="₹125" />
          </MenuCategory>
        </main>
        <footer className="text-center mt-16 pt-8 border-t border-border/30">
          <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
            © 2026 Cafe Brume
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
