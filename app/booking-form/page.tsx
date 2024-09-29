"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Loader2 } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
import Image from 'next/image'



export default function Page() {
  const router = useRouter()


  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [redirectCountdown, setRedirectCountdown] = useState(8)


  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isDialogOpen && redirectCountdown > 0) {
      timer = setTimeout(() => {
        setRedirectCountdown(prev => prev - 1)
      }, 1000)
    } else if (isDialogOpen && redirectCountdown === 0) {
      router.push('/destination')
    }
    return () => clearTimeout(timer)
  }, [isDialogOpen, redirectCountdown, router])



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsDialogOpen(true)
      console.log('Form submitted')
    }, 3000)
  }

  return (
    <div className="">
      <Card className="w-full max-w-2xl mx-auto mt-10 mb-20">
        <CardHeader>
          <CardTitle>Travel Booking Form</CardTitle>
          <CardDescription>Fill in your travel details to book your next adventure.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 w-full">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2 w-full">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={`w-full justify-start text-left font-normal ${!startDate && "text-muted-foreground"}`}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={`w-full justify-start text-left font-normal ${!endDate && "text-muted-foreground"}`}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input id="destination" placeholder="Paris, France" />
            </div>

            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="travelers">Number of Travelers</Label>
                <Input id="travelers" type="number" min="1" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purpose">Travel Purpose</Label>
                <Select>
                  <SelectTrigger id="purpose">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leisure">Leisure</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full mt-10 flex" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? "Processing..." : "Proceed"}
            </Button>
          </form>
        </CardContent>
      </Card>



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
              <span className="text-red-500 text-sm">Redirecting to destination page in {redirectCountdown} seconds...</span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}