// "use client"

// import Link from 'next/link'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { useRouter } from 'next/navigation'
// import { useState, useEffect } from 'react'
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import Image from 'next/image'
// import { Loader2 } from 'lucide-react'


// const destinations = [
//   { id: 1, name: "Luxury Beach Resort", location: "Maldives", price: 500 },
//   { id: 2, name: "Mountain Retreat", location: "Swiss Alps", price: 300 },
//   { id: 3, name: "City Center Hotel", location: "New York", price: 200 },
// ]


// const Page = () => {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [isDialogOpen, setIsDialogOpen] = useState(false)
//   const [redirectCountdown, setRedirectCountdown] = useState(8)


//   useEffect(() => {
//     let timer: NodeJS.Timeout
//     if (isDialogOpen && redirectCountdown > 0) {
//       timer = setTimeout(() => {
//         setRedirectCountdown(prev => prev - 1)
//       }, 1000)
//     } else if (isDialogOpen && redirectCountdown === 0) {
//       router.push('/')
//     }
//     return () => clearTimeout(timer)
//   }, [isDialogOpen, redirectCountdown, router])

//   const handleSubmit = () => {
//     // e: React.FormEvent<HTMLFormElement>
//     // e.preventDefault()
//     setIsLoading(true)

//     setTimeout(() => {
//       setIsLoading(false)
//       setIsDialogOpen(true)
//       console.log('Form submitted')
//     }, 3000)
//   }


//   return (
//     <section className="py-10 flexCenter !flex-col mb-48 w-[80%] mx-auto">
//       <div className='mb-10 text-center'>
//         <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Choose your destination plan</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//         {destinations.map((destination: any) => (
//           <Card key={destination.id} className='w-full'>
//             <CardHeader>
//               <CardTitle>{destination.name}</CardTitle>
//               <CardDescription>{destination.location}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold text-gray-50">${destination.price} / night</p>
//             </CardContent>
//             <CardFooter>
//               <Button disabled={isLoading} className="w-full flex items-center bg-green-400 text-white py-2 rounded-md hover:opacity-80 hover:bg-green-500 transition-all duration-300" onClick={handleSubmit}>
//                 {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
//                 {isLoading ? "Booking..." : "Book Now"}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>


//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader className='flex flex-col gap-4 py-5'>
//             <div className="flex justify-center">
//               <Image src="/success-anime.gif" alt="success" className="w-[50%]" width={100} height={10} />
//             </div>
//             <DialogTitle className='text-xl md:text-3xl text-center text-gray-800'>Details Confirmed!</DialogTitle>
//             <DialogDescription className="text-center">
//               Your travel booking has been successfully submitted. We&apos;ll send you a confirmation email shortly with all the details.
//               <br />
//               <span className="text-red-500 text-sm">Redirecting to home page in {redirectCountdown} seconds...</span>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </section>
//   )
// }

// export default Page




"use client"

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

const destinations = [
  { id: 1, name: "Luxury Beach Resort", location: "Maldives", price: 500 },
  { id: 2, name: "Mountain Retreat", location: "Swiss Alps", price: 300 },
  { id: 3, name: "City Center Hotel", location: "New York", price: 200 },
]

const Page = () => {
  const router = useRouter()
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({})
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [redirectCountdown, setRedirectCountdown] = useState(8)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isDialogOpen && redirectCountdown > 0) {
      timer = setTimeout(() => {
        setRedirectCountdown(prev => prev - 1)
      }, 1000)
    } else if (isDialogOpen && redirectCountdown === 0) {
      router.push('/')
    }
    return () => clearTimeout(timer)
  }, [isDialogOpen, redirectCountdown, router])

  const handleSubmit = (destinationId: number) => {
    setLoadingStates(prev => ({ ...prev, [destinationId]: true }))

    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [destinationId]: false }))
      setIsDialogOpen(true)
      console.log('Form submitted for destination', destinationId)
    }, 3000)
  }

  return (
    <section className="py-10 flexCenter !flex-col mb-48 w-[80%] mx-auto">
      <div className='mb-10 text-center'>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Choose your destination plan</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {destinations.map((destination) => (
          <Card key={destination.id} className='w-full'>
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
              <CardDescription>{destination.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-50">${destination.price} / night</p>
            </CardContent>
            <CardFooter>
              <Button 
                disabled={loadingStates[destination.id]} 
                className="w-full flex items-center bg-green-400 text-white py-2 rounded-md hover:opacity-80 hover:bg-green-500 transition-all duration-300" 
                onClick={() => handleSubmit(destination.id)}
              >
                {loadingStates[destination.id] ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {loadingStates[destination.id] ? "Booking..." : "Book Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader className='flex flex-col gap-4 py-5'>
            <div className="flex justify-center">
              <Image src="/success-anime.gif" alt="success" className="w-[50%]" width={100} height={10} />
            </div>
            <DialogTitle className='text-xl md:text-3xl text-center text-gray-800'>Details Confirmed!</DialogTitle>
            <DialogDescription className="text-center">
              Your travel booking has been successfully submitted. We&apos;ll send you a confirmation email shortly with all the details.
              <br />
              <span className="text-red-500 text-sm">Redirecting to home page in {redirectCountdown} seconds...</span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Page