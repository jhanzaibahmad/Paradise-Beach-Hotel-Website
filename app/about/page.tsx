import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Leaf, Star } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-teal-600/30 z-10"></div>
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="About Paradise Beach Resort"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">About Paradise Beach Resort</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Where luxury meets the endless blue horizon</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1985, Paradise Beach Resort has been a beacon of luxury and hospitality for nearly four
                decades. What started as a vision to create the perfect beachfront getaway has evolved into one of the
                most prestigious resort destinations in the world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nestled along pristine white sand beaches with crystal-clear turquoise waters, our resort offers an
                unparalleled experience where every detail is crafted to perfection. From our world-class amenities to
                our exceptional service, we've built a reputation for creating unforgettable memories.
              </p>
              <p className="text-lg text-gray-600">
                Today, Paradise Beach Resort continues to set the standard for luxury hospitality, welcoming guests from
                around the globe to experience the magic of our tropical paradise.
              </p>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Resort History"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Paradise Beach Resort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
                <p className="text-gray-600">We go above and beyond to ensure every guest feels valued and cared for</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="pt-6">
                <Leaf className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Committed to protecting our beautiful environment for future generations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">Maintaining the highest standards in every aspect of our operations</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">Supporting our local community and creating lasting relationships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Amenities</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect vacation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Spa & Wellness" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spa & Wellness Center</h3>
              <p className="text-gray-600">Full-service spa with massage therapy, facials, and wellness treatments</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Fine Dining" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fine Dining Restaurant</h3>
              <p className="text-gray-600">Ocean-view restaurant featuring fresh seafood and international cuisine</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Infinity Pool" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Infinity Pool</h3>
              <p className="text-gray-600">Stunning infinity pool overlooking the ocean with poolside service</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Fitness Center" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fitness Center</h3>
              <p className="text-gray-600">State-of-the-art fitness equipment with personal training available</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Water Sports" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Water Sports Center</h3>
              <p className="text-gray-600">Kayaking, snorkeling, diving, and other exciting water activities</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Kids Club" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kids Club</h3>
              <p className="text-gray-600">Supervised activities and entertainment for children of all ages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Awards & Recognition</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">World's Best Beach Resort</h3>
                <p className="text-gray-600 text-sm">Travel + Leisure Awards 2023</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">5-Star Luxury Rating</h3>
                <p className="text-gray-600 text-sm">Forbes Travel Guide 2023</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white">
              <CardContent className="pt-6">
                <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Green Key Certification</h3>
                <p className="text-gray-600 text-sm">Environmental Excellence 2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
