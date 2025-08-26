// app/page.tsx
'use client';

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  User,
  ArrowRight,
  ShieldAlert,
  Zap,
  Users,
  MapPin,
  Star,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary mr-6 hover:opacity-90 transition"
          >
            <ShieldAlert className="h-7 w-7 text-primary" />
            <span>FixIt Local</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <Link href="/features" className="hover:text-primary transition">
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-primary transition"
            >
              How It Works
            </Link>
            <Link href="/get-started" className="hover:text-primary transition">
              Get Started
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login/citizen">Citizen Login</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/login/admin">Admin Login</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex-grow flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1500&q=80"
          alt="Hero background"
          fill
          className="absolute inset-0 -z-10 object-cover brightness-[0.3]"
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full font-semibold tracking-wide shadow-lg animate-pulse">
            Empowering Communities, One Report at a Time
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Swachh Bharat, <span className="text-primary">Swachh Future</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-200 mb-10"
        >
          FixIt Local connects citizens and authorities for a cleaner, safer,
          and more vibrant neighborhood. Report, track, and resolve civic issues
          with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Link href="/citizen/dashboard/report">
              Report an Issue <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Link href="#how-it-works">Learn More</Link>
          </Button>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 bg-gradient-to-r from-gray-900/80 to-black/80 border-y border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Trusted by communities & organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Swachh_Bharat_Abhiyan_Logo.svg/320px-Swachh_Bharat_Abhiyan_Logo.svg.png"
              alt="Swachh Bharat"
              width={80}
              height={40}
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Indian_Government_Emblem.png/320px-Indian_Government_Emblem.png"
              alt="Govt"
              width={60}
              height={40}
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/UNICEF_Logo.png/320px-UNICEF_Logo.png"
              alt="UNICEF"
              width={80}
              height={40}
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/World_Bank_logo.svg/320px-World_Bank_logo.svg.png"
              alt="World Bank"
              width={80}
              height={40}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Use FixIt Local?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Zap className="h-10 w-10" />}
              title="Fast & Easy Reporting"
              description="Snap a photo, pinpoint the location, and submit in seconds. No paperwork, no hassle."
              imageUrl="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Transparent Tracking"
              description="Follow your report’s journey from 'Pending' to 'Resolved' with real-time updates and notifications."
              imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            />
            <FeatureCard
              icon={<MapPin className="h-10 w-10" />}
              title="Community Impact"
              description="See the difference you make. Every report helps build a cleaner, safer, and more connected neighborhood."
              imageUrl="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-pink-500/10 border-y border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">What Citizens Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <TestimonialCard
              name="Amit Sharma"
              role="Resident, Delhi"
              text="Reporting potholes and garbage dumps is now so easy! Our street was cleaned within days. Highly recommended."
            />
            <TestimonialCard
              name="Priya Verma"
              role="Community Volunteer"
              text="FixIt Local brings people together. I love tracking progress and seeing real change in my area."
            />
            <TestimonialCard
              name="Ravi Kumar"
              role="Municipal Officer"
              text="The admin dashboard helps us prioritize and resolve issues faster. It’s a win-win for everyone."
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="how-it-works" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <StepCard
              number="1"
              title="Report"
              description="Describe the issue, add photos & location."
            />
            <StepCard
              number="2"
              title="Review"
              description="Admins verify and assign resolution."
            />
            <StepCard
              number="3"
              title="Resolve"
              description="Departments fix & update status."
            />
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        id="get-started"
        className="py-24 bg-gradient-to-r from-primary to-pink-500 text-white text-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-lg">
            Join your neighbors and take the first step towards a cleaner
            tomorrow. Every report counts!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:scale-105 transition"
            >
              <Link href="/login/citizen">
                <User className="mr-2" /> Citizen Login
              </Link>
            </Button>
            <Button
              size="lg"
              variant="default"
              asChild
              className="bg-black hover:bg-gray-800 hover:scale-105 transition"
            >
              <Link href="/login/admin">
                <Building className="mr-2" /> Admin Login
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-950 border-t border-gray-800 mt-auto">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} FixIt Local. All rights reserved.
          <div className="mt-2 space-x-6">
            <Link href="#" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
            <Link
              href="mailto:contact@fixitlocal.com"
              className="hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// FeatureCard
function FeatureCard({
  icon,
  title,
  description,
  imageUrl,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
      className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-primary/30 transition-all"
    >
      <div className="relative w-full h-40">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 text-center">
        <div className="mb-3 p-3 rounded-full bg-primary/10 text-primary inline-flex shadow">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

// StepCard
function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)" }}
      className="bg-gray-900 p-6 rounded-xl shadow-md border border-primary/20 max-w-xs mx-auto transition-all"
    >
      <div className="w-14 h-14 mb-4 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto shadow">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

// TestimonialCard
function TestimonialCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 shadow-lg max-w-sm mx-auto border border-gray-700 flex flex-col items-center">
      <Star className="text-yellow-400 mb-2" />
      <p className="text-gray-200 italic mb-4">"{text}"</p>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-primary">{name}</span>
        <span className="text-xs text-gray-400">{role}</span>
      </div>
    </div>
  );
}
