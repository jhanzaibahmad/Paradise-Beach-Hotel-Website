"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Bed, Star } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const rooms = [
  {
    id: 1,
    name: "Garden View Room",
    price: 199,
    image: "/placeholder.svg?height=200&width=300",
    guests: 2,
    beds: 1,
    description: "Comfortable room overlooking tropical gardens",
  },
  {
    id: 2,
    name: "Ocean View Room",
    price: 299,
    image: "/placeholder.svg?height=200&width=300",
    guests: 2,
    beds: 1,
    description: "Spacious room with panoramic ocean views",
  },
  {
    id: 3,
    name: "Deluxe Ocean Suite",
    price: 399,
    image: "/placeholder.svg?height=200&width=300",
    guests: 4,
    beds: 1,
    description: "Luxurious suite with separate living area",
  },
  {
    id: 4,
    name: "Family Suite",
    price: 449,
    image: "/placeholder.svg?height=200&width=300",
    guests: 6,
    beds: 2,
    description: "Spacious family suite with connecting rooms",
  },
  {
    id: 5,
    name: "Beachfront Suite",
    price: 499,
    image: "/placeholder.svg?height=200&width=300",
    guests: 4,
    beds: 2,
    description: "Premium suite with direct beach access",
  },
  {
    id: 6,
    name: "Presidential Villa",
    price: 899,
    image: "/placeholder.svg?height=200&width=300",
    guests: 6,
    beds: 3,
    description: "Ultimate luxury villa with private pool",
  },
]

export default function BookingPage() {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRoom) {
      alert("Please select a room first")
      return
    }

    const selectedRoomData = rooms.find((room) => room.id === selectedRoom)
    console.log("Booking submitted:", { ...bookingData, selectedRoom: selectedRoomData })
    alert("Booking request submitted! We will contact you shortly to confirm your reservation.")
  }

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn)
      const checkOut = new Date(bookingData.checkOut)
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  const calculateTotal = () => {
    if (selectedRoom) {
      const room = rooms.find((r) => r.id === selectedRoom)
      const nights = calculateNights()
      const roomsCount = Number.parseInt(bookingData.rooms)
      if (room && nights > 0) {
        return room.price * nights * roomsCount
      }
    }
    return 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-teal-600/30 z-10"></div>
        <Image src="/placeholder.svg?height=600&width=1200" alt="Book Your Stay" fill className="object-cover" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Book Your Stay</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Reserve your perfect getaway at Paradise Beach Resort</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Room Selection */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Select Your Room</h2>
              <div className="grid gap-6">
                {rooms.map((room) => (
                  <Card
                    key={room.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedRoom === room.id ? "ring-2 ring-teal-600 shadow-lg" : ""
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={room.image || "/placeholder.svg"}
                          alt={room.name}
                          fill
                          className="object-cover rounded-l-lg"
                        />
                      </div>
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                            <p className="text-gray-600 mb-4">{room.description}</p>
                            <div className="flex items-center space-x-4 text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span className="text-sm">{room.guests} guests</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Bed className="h-4 w-4" />
                                <span className="text-sm">
                                  {room.beds} bed{room.beds > 1 ? "s" : ""}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-teal-600">${room.price}</div>
                            <div className="text-sm text-gray-500">per night</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">4.9</span>
                          </div>
                          <div
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                              selectedRoom === room.id ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {selectedRoom === room.id ? "Selected" : "Select Room"}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Booking Details */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h3>

                  <form onSubmit={handleBooking} className="space-y-4">
                    {/* Date Selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkIn">Check-in</Label>
                        <Input
                          id="checkIn"
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => handleInputChange("checkIn", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut">Check-out</Label>
                        <Input
                          id="checkOut"
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => handleInputChange("checkOut", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Guest and Room Selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="guests">Guests</Label>
                        <Select
                          value={bookingData.guests}
                          onValueChange={(value) => handleInputChange("guests", value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5 Guests</SelectItem>
                            <SelectItem value="6">6 Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="rooms">Rooms</Label>
                        <Select value={bookingData.rooms} onValueChange={(value) => handleInputChange("rooms", value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Room</SelectItem>
                            <SelectItem value="2">2 Rooms</SelectItem>
                            <SelectItem value="3">3 Rooms</SelectItem>
                            <SelectItem value="4">4 Rooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Guest Information */}
                    <div className="space-y-4 pt-4 border-t">
                      <h4 className="font-semibold text-gray-800">Guest Information</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={bookingData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={bookingData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={bookingData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Booking Summary */}
                    {selectedRoom && calculateNights() > 0 && (
                      <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-gray-800">Booking Summary</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Room:</span>
                            <span>{rooms.find((r) => r.id === selectedRoom)?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Nights:</span>
                            <span>{calculateNights()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Rooms:</span>
                            <span>{bookingData.rooms}</span>
                          </div>
                          <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                            <span>Total:</span>
                            <span className="text-teal-600">${calculateTotal()}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={!selectedRoom}>
                      {selectedRoom ? "Book Now" : "Select a Room First"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Policies */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Booking Policies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Cancellation Policy</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Free cancellation up to 48 hours before check-in</li>
                  <li>• Cancellations within 48 hours: 1 night charge</li>
                  <li>• No-shows: Full stay charge</li>
                  <li>• Peak season may have different policies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Check-in/Check-out</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Check-in: 3:00 PM</li>
                  <li>• Check-out: 11:00 AM</li>
                  <li>• Early check-in/late check-out available (fees may apply)</li>
                  <li>• Valid ID required at check-in</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Information</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Credit card required to secure reservation</li>
                  <li>• Payment due at check-in</li>
                  <li>• We accept all major credit cards</li>
                  <li>• Resort fee: $25/night (includes WiFi, pool, gym)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Information</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Minimum age for check-in: 21 years</li>
                  <li>• Pet-friendly rooms available (additional fees)</li>
                  <li>• Smoking prohibited in all rooms</li>
                  <li>• Complimentary airport shuttle service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
