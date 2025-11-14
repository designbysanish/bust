import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const blogPosts = {
  '1': {
    title: 'The Art of Plating: Making Food Beautiful',
    content: `Food presentation is an art form that engages all the senses before the first bite. At AxisEnso, we believe that visual appeal is just as important as taste. Our chefs spend years perfecting their plating techniques to create dishes that are as beautiful as they are delicious.

The foundation of great plating starts with understanding color, texture, and composition. We use the principles of design - balance, contrast, and focal points - to create plates that tell a story. Each element is carefully placed to guide the diner's eye and create anticipation.

One of our signature techniques is using height to add drama. By stacking ingredients vertically rather than spreading them horizontally, we create visual interest and make even simple ingredients look sophisticated. We also pay careful attention to negative space - the empty areas of the plate are just as important as the filled ones.

Color plays a crucial role in our presentations. We source the freshest, most vibrant ingredients and use natural colors to create contrast. A bright green herb oil drizzled around a golden piece of fish, or purple microgreens atop a creamy risotto - these small touches make a big impact.

Texture is another key element. We combine crispy, creamy, and tender elements in each dish to create variety. The visual representation of these textures - seeing the crunch of a perfectly fried garnish or the smoothness of a purée - enhances the dining experience before the fork even touches the plate.`,
    author: 'Chef Takumi Yamamoto',
    date: 'October 1, 2025',
    category: 'Culinary Techniques',
  },
  '2': {
    title: 'Sustainable Sourcing: Our Farm Partnerships',
    content: `Sustainability isn't just a buzzword at AxisEnso - it's a core value that influences every decision we make. Our commitment to sustainable sourcing means working directly with local farmers and producers who share our values of quality, environmental stewardship, and ethical practices.

We've built strong relationships with over 20 local farms within a 50-mile radius of our restaurant. These partnerships allow us to source the freshest seasonal ingredients while supporting our local economy and reducing our carbon footprint. Every morning, our kitchen receives deliveries of vegetables harvested just hours earlier, ensuring peak freshness and flavor.

Our farm partners practice organic and regenerative agriculture methods that improve soil health and biodiversity. We visit these farms regularly to understand their practices and build trust. This connection to the source of our ingredients allows us to share authentic stories with our guests about where their food comes from.

Seafood sustainability is particularly important to us. We work exclusively with suppliers who follow responsible fishing practices and can trace the origin of every fish we serve. Our menu changes based on what's available and in season, reducing the environmental impact of our operations.

This commitment to sustainability extends beyond ingredients. We've implemented comprehensive waste reduction programs, including composting kitchen scraps and donating surplus food to local shelters. Our packaging for takeout orders uses biodegradable and recyclable materials.`,
    author: 'Isabella Rossi',
    date: 'September 28, 2025',
    category: 'Sustainability',
  },
  '3': {
    title: 'Wine Pairing Guide for Holiday Dinners',
    content: `The holiday season brings rich, complex flavors to the table, and selecting the right wine can elevate your meal from good to extraordinary. As AxisEnso's sommelier, I've spent years perfecting the art of wine pairing, and I'm excited to share my expertise for your holiday celebrations.

For turkey, the traditional centerpiece of many holiday meals, consider a medium-bodied Pinot Noir. Its bright acidity and red fruit notes complement the savory bird without overwhelming it. If you prefer white wine, a full-bodied Chardonnay with oak aging provides richness that matches the texture of turkey and creamy sides.

Ham calls for wines with a touch of sweetness to balance its salty-sweet profile. A German Riesling with off-dry characteristics works beautifully, as does a light-bodied Beaujolais with its fruity character. These wines also pair wonderfully with the glazes typically used on holiday hams.

For beef dishes like prime rib, reach for bold red wines. A Cabernet Sauvignon or Bordeaux blend has the tannins and structure to stand up to rich, fatty cuts of meat. These wines also complement mushroom-based dishes and earthy root vegetables common in holiday spreads.

Don't forget about sparkling wine! Champagne or quality Prosecco isn't just for toasting - it's incredibly versatile with food. The bubbles and acidity cut through rich, creamy dishes and cleanse the palate between bites. Start your meal with sparkling wine and appetizers for an elegant beginning.`,
    author: 'Chef Takumi Yamamoto',
    date: 'September 25, 2025',
    category: 'Wine & Beverages',
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <article className="container mx-auto max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="glass-strong p-12 rounded-2xl shadow-3d">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex items-center space-x-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;