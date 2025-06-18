import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Bed, Bath } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const rooms = [
  {
    id: 1,
    name: "Ocean View Room",
    description: "Spacious room with panoramic ocean views and modern amenities",
    price: 299,
    image: "/placeholder.svg?height=400&width=600",
    guests: 2,
    beds: 1,
    baths: 1,
    amenities: ["Ocean View", "Free WiFi", "Mini Bar", "Room Service"],
    features: ["King Size Bed", "Private Balcony", "Work Desk", "Smart TV"],
  },
  {
    id: 2,
    name: "Deluxe Ocean Suite",
    description: "Luxurious suite with separate living area and stunning ocean views",
    price: 399,
    image: "/placeholder.svg?height=400&width=600",
    guests: 4,
    beds: 1,
    baths: 2,
    amenities: ["Ocean View", "Free WiFi", "Mini Bar", "Room Service", "Spa Access"],
    features: ["King Size Bed", "Living Room", "Kitchenette", "Two Balconies"],
  },
  {
    id: 3,
    name: "Beachfront Suite",
    description: "Premium suite with direct beach access and private terrace",
    price: 499,
    image: "/placeholder.svg?height=400&width=600",
    guests: 4,
    beds: 2,
    baths: 2,
    amenities: ["Beach Access", "Free WiFi", "Mini Bar", "Room Service", "Spa Access", "Concierge"],
    features: ["Two Bedrooms", "Private Terrace", "Beach Chairs", "Premium Amenities"],
  },
  {
    id: 4,
    name: "Presidential Villa",
    description: "Ultimate luxury villa with private pool and dedicated butler service",
    price: 899,
    image: "/placeholder.svg?height=400&width=600",
    guests: 6,
    beds: 3,
    baths: 3,
    amenities: ["Private Pool", "Butler Service", "Beach Access", "Free WiFi", "Full Kitchen", "Spa Access"],
    features: ["Three Bedrooms", "Private Pool", "Full Kitchen", "Butler Service", "Garden View"],
  },
  {
    id: 5,
    name: "Garden View Room",
    description: "Comfortable room overlooking tropical gardens with modern amenities",
    price: 199,
    image: "/placeholder.svg?height=400&width=600",
    guests: 2,
    beds: 1,
    baths: 1,
    amenities: ["Garden View", "Free WiFi", "Mini Bar", "Room Service"],
    features: ["Queen Size Bed", "Garden Balcony", "Work Desk", "Smart TV"],
  },
  {
    id: 6,
    name: "Family Suite",
    description: "Spacious family suite with connecting rooms and kid-friendly amenities",
    price: 449,
    image: "/placeholder.svg?height=400&width=600",
    guests: 6,
    beds: 2,
    baths: 2,
    amenities: ["Ocean View", "Free WiFi", "Mini Bar", "Room Service", "Kids Club Access"],
    features: ["Two Bedrooms", "Kids Area", "Connecting Rooms", "Family Balcony"],
  },
]

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-teal-600/30 z-10"></div>
        <Image src="/placeholder.svg?height=600&width=1200" alt="Hotel Rooms" fill className="object-cover" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Luxury Accommodations</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Choose from our selection of premium rooms and suites</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-full">
                    <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                        <p className="text-gray-600 mb-4">{room.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-teal-600">${room.price}</div>
                        <div className="text-sm text-gray-500">per night</div>
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="flex items-center space-x-6 mb-6 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5" />
                        <span>{room.guests} guests</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bed className="h-5 w-5" />
                        <span>
                          {room.beds} bed{room.beds > 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bath className="h-5 w-5" />
                        <span>
                          {room.baths} bath{room.baths > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="bg-teal-100 text-teal-700">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        {room.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">4.9 (127 reviews)</span>
                      </div>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href="/booking">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Perfect Room?</h2>
          <p className="text-xl mb-8">Experience luxury and comfort at Paradise Beach Resort</p>
          <Button asChild size="lg" variant="secondary" className="text-teal-600">
            <Link href="/booking">Book Your Stay Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
