import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

async function getSearchResults(params: { [key: string]: string | string[] | undefined }) {
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Mock data
  return [
    { id: 1, name: "Luxury Beach Resort", location: "Maldives", price: 500 },
    { id: 2, name: "Mountain Retreat", location: "Swiss Alps", price: 300 },
    { id: 3, name: "City Center Hotel", location: "New York", price: 200 },
  ]
}


const page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const destinations = await getSearchResults(searchParams)


  return (
    <section className="py-10 flexCenter !flex-col mb-48">
      <div className='mb-10'>
        <h1 className="text-2xl font-bold text-start">Choose your destination plan</h1>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className='w-full'>
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
              <CardDescription>{destination.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${destination.price} / night</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/booking/${destination.id}`}>Book Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

    </section>
  )
}

export default page