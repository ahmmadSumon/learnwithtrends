"use client";
import { useState, useRef, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Final.webp";
import { cn } from "../../lib/utils";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const components = [
    {
      title: "SEO Optimization",
      href: "/services/seo-optimization",
      description: "Boost your website's visibility and ranking with expert search engine optimization techniques.",
    },
    {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Engage your audience and grow your brand presence on social media platforms.",
    },
    {
      title: "Content Strategy",
      href: "/services/content-strategy",
      description: "Develop a tailored content plan that drives engagement and conversions.",
    },
    {
      title: "Web Development",
      href: "/services/web-development",
      description: "Create custom websites that are fast, responsive, and designed to convert visitors into customers.",
    },
    {
      title: "Email Marketing",
      href: "/services/email-marketing",
      description: "Craft email campaigns that build relationships and drive conversions.",
    },
    {
      title: "PPC Advertising",
      href: "/services/ppc-advertising",
      description: "Maximize your ROI with targeted pay-per-click advertising across platforms like Google Ads.",
    },
    {
      title: "Graphic Design",
      href: "/services/graphic-design",
      description: "Design visually appealing graphics and branding materials to enhance your business identity.",
    },
    {
      title: "Video Marketing",
      href: "/services/video-marketing",
      description: "Produce engaging video content to capture your audience's attention and tell your brand's story.",
    },
    {
      title: "Conversion Rate Optimization",
      href: "/services/cro",
      description: "Optimize your website and marketing funnel to turn visitors into customers.",
    },
    {
      title: "App Development",
      href: "/services/app-development",
      description: "Develop user-friendly mobile apps that provide value and enhance customer engagement.",
    },
    {
      title: "Influencer Marketing",
      href: "/services/influencer-marketing",
      description: "Collaborate with influencers to promote your brand and reach a wider audience.",
    },
    {
      title: "Analytics & Reporting",
      href: "/services/analytics-reporting",
      description: "Gain actionable insights from data to measure performance and optimize strategies.",
    }
  ];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };
  return (
    <div className="navbar flex items-center justify-between max-w-7xl mx-auto py-3">
      <Link href="/">
        <div className="navbar-brand flex items-center justify-center">
          <Image className="h-[50px] w-[50px]" src={logo} alt="Logo" />
          <p className="font-bold text-inherit">Learn With Trends</p>
        </div>
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden mx-5">
        <button onClick={toggleMenu} className="text-xl">
          {menuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex navbar-content">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="text-md"> Home</div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-[#C8E0FB]"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          LearnWithTrends
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn with Trends offers digital marketing services, tutorials, tips, and tools to help you build an online presence and master digital marketing through real case studies.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem className="hover:bg-[#C8E0FB]" href="/docs" title="Blog">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem className="hover:bg-[#C8E0FB]" href="/docs/installation" title="Courses">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem className="hover:bg-[#C8E0FB]" href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[1000px] md:grid-cols-3 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className="hover:bg-[#C8E0FB]"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/career" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Career
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/courses">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          <button onClick={toggleMenu} className="self-end p-4">
            ✖️
          </button>
          <div className="flex flex-col items-center">
            <Link href="/" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="flex flex-col items-center">
              <button onClick={toggleResources} className="py-2 text-lg flex justify-between w-full">
                Resources
                {resourcesOpen ? "▼" : "►"}
              </button>
              {resourcesOpen && (
                <div className="flex flex-col items-start pl-4">
                  <Link href="/blog" className="py-1 text-lg" onClick={() => setMenuOpen(false)}>Blog</Link>
                  <Link href="/courses" className="py-1 text-lg" onClick={() => setMenuOpen(false)}>Courses</Link>
                  <Link href="/docs/primitives/typography" className="py-1 text-lg" onClick={() => setMenuOpen(false)}>Typography</Link>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center">
              <button onClick={toggleSolutions} className="py-2 text-lg flex justify-between w-full">
                Solutions
                {solutionsOpen ? "▼" : "►"}
              </button>
              {solutionsOpen && (
                <div className="flex flex-col items-start pl-4">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="py-1 text-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/courses" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Courses</Link>
            <div className="navbar-item bg-[#093E61] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#C8E0FB] hover:text-black transition-all">
              <Link href="#" className="button">SCHEDULE APPOINTMENT</Link>
            </div>
          </div>
        </div>
      )}

      <div className="navbar-content hidden md:flex items-center justify-center">
        <div className="navbar-item bg-[#093E61] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#C8E0FB] hover:text-black transition-all">
          <Link href="#" className="button">SCHEDULE APPOINTMENT</Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";