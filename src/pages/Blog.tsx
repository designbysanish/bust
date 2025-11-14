import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Art of Plating: Making Food Beautiful',
      excerpt: 'Discover the techniques our chefs use to create visually stunning dishes...',
      author: 'Chef Takumi Yamamoto',
      date: 'October 1, 2025',
      category: 'Culinary Techniques',
    },
    {
      title: 'Sustainable Sourcing: Our Farm Partnerships',
      excerpt: 'Learn about our commitment to local, sustainable ingredients...',
      author: 'Isabella Rossi',
      date: 'September 28, 2025',
      category: 'Sustainability',
    },
    {
      title: 'Wine Pairing Guide for Holiday Dinners',
      excerpt: 'Expert tips on selecting the perfect wine for your festive meals...',
      author: 'Chef Takumi Yamamoto',
      date: 'September 25, 2025',
      category: 'Wine & Beverages',
    },
    {
      title: 'Behind the Scenes: A Day in Our Kitchen',
      excerpt: 'Take a virtual tour of our culinary operations and meet the team...',
      author: 'Chef Marcus Chen',
      date: 'September 20, 2025',
      category: 'Behind the Scenes',
    },
    {
      title: 'Seasonal Menu Inspiration',
      excerpt: 'How we craft our seasonal offerings using the freshest ingredients...',
      author: 'Isabella Rossi',
      date: 'September 15, 2025',
      category: 'Menu Updates',
    },
    {
      title: 'Hosting the Perfect Dinner Party',
      excerpt: 'Professional tips for creating memorable dining experiences at home...',
      author: 'James Anderson',
      date: 'September 10, 2025',
      category: 'Entertaining',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Culinary insights, recipes, and stories from our kitchen
            </p>
          </div>

          {/* Featured Post */}
          <Link to="/blog/1">
            <div className="glass-strong p-12 rounded-2xl shadow-3d mb-12 hover:shadow-elevated transition-all duration-300 cursor-pointer">
              <div className="mb-4">
                <span className="inline-block px-4 py-1 rounded-full glass text-sm font-semibold text-primary">
                  Featured
                </span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-4 hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{posts[0].date}</span>
                  </div>
                </div>
                <Button className="gradient-primary text-primary-foreground">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Link key={index} to={`/blog/${index + 2}`}>
                <div className="glass p-6 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full glass-strong text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 glass-strong p-12 rounded-2xl shadow-3d text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest recipes, culinary tips, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg glass border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-primary text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;