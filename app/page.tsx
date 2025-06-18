import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Wifi, Car, Coffee, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Beach Hotel View"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Paradise Beach Resort</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Where luxury meets the endless blue horizon</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6">
              <Link href="/booking">Book Your Stay</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-teal-600 text-lg px-8 py-6"
            >
              <Link href="/rooms">Explore Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Paradise Beach Resort?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience unparalleled luxury with breathtaking ocean views and world-class amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-blue-50 to-white">
              <CardContent className="pt-6">
                <Waves className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Beachfront Location</h3>
                <p className="text-gray-600">Direct access to pristine white sand beaches</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-blue-50 to-white">
              <CardContent className="pt-6">
                <Wifi className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Amenities</h3>
                <p className="text-gray-600">Free WiFi, spa, pool, and fitness center</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-blue-50 to-white">
              <CardContent className="pt-6">
                <Coffee className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
                <p className="text-gray-600">Ocean-view restaurant with fresh seafood</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-blue-50 to-white">
              <CardContent className="pt-6">
                <Car className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Valet Parking</h3>
                <p className="text-gray-600">Complimentary valet and concierge services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Luxury Accommodations</h2>
            <p className="text-xl text-gray-600">Choose from our selection of premium rooms and suites</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Ocean View Room"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Ocean View Room</h3>
                <p className="text-gray-600 mb-4">Spacious room with panoramic ocean views</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-600">$299/night</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Beachfront Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Beachfront Suite</h3>
                <p className="text-gray-600 mb-4">Luxury suite with private beach access</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-600">$499/night</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Presidential Villa"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Presidential Villa</h3>
                <p className="text-gray-600 mb-4">Ultimate luxury with private pool</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-600">$899/night</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Guests Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Absolutely stunning location with incredible service. The ocean view from our room was breathtaking,
                  and the staff went above and beyond to make our stay memorable."
                </p>
                <div className="font-semibold text-gray-800">Sarah Johnson</div>
                <div className="text-gray-600 text-sm">Honeymooner</div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Perfect family vacation spot! The kids loved the beach activities, and we enjoyed the spa and fine
                  dining. Will definitely be returning next year."
                </p>
                <div className="font-semibold text-gray-800">Michael Chen</div>
                <div className="text-gray-600 text-sm">Family Vacation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Dream Vacation?</h2>
          <p className="text-xl mb-8">Book now and experience paradise at Paradise Beach Resort</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-teal-600">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-teal-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
