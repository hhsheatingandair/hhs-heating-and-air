import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Snowflake, Flame, Wrench } from "lucide-react";

export default function HVACWebsite() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">HHS Heating & Air Conditioning</h1>
            <p className="text-lg mb-6">Family owned HVAC company proudly serving the Inland Empire. No service call fees. Free estimates.</p>
            <a href="tel:9097678903">
              <Button className="bg-white text-blue-700 font-semibold rounded-2xl px-6 py-3">
                <Phone className="mr-2 h-5 w-5" /> Call 909-767-8903
              </Button>
            </a>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/featured/?hvac" className="rounded-2xl shadow-lg" />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="p-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Snowflake className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Air Conditioning</h3>
                <p>Installation, repair, and maintenance to keep you cool year-round.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Flame className="mx-auto mb-4 h-10 w-10 text-red-600" />
                <h3 className="text-xl font-semibold mb-2">Heating</h3>
                <p>Reliable heating solutions for homes and businesses.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Wrench className="mx-auto mb-4 h-10 w-10 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
                <p>Prevent breakdowns and extend the life of your system.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Booking */}
      <section className="p-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Service Online</h2>
          <p className="mb-6">Request service anytime. We’ll contact you quickly to confirm your appointment.</p>
          <a href="https://booking.housecallpro.com" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-2xl px-8 py-3">Book with Housecall Pro</Button>
          </a>
        </div>
      </section>

      {/* Financing */}
      <section className="p-10 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Financing Available</h2>
          <p className="mb-6">Flexible financing options available to make your HVAC investment affordable. Ask us about payment plans.</p>
          <p className="mb-4">We partner with trusted financing providers through Housecall Pro.</p>
          <a href="https://housecallpro.com/financing" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-2xl px-8 py-3">Apply for Financing</Button>
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-10 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">No Service Call Fee • Free Estimates</h2>
        <p className="mb-6">Call today and get honest, upfront pricing from a local Inland Empire HVAC company you can trust.</p>
        <a href="tel:9097678903">
          <Button className="bg-white text-blue-700 font-semibold rounded-2xl px-8 py-3">Call 909-767-8903</Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} HHS Heating & Air • Licensed & Insured</p>
      </footer>
    </div>
  );
}
