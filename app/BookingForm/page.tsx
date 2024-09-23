// import React from 'react'

// const page = () => {
// 	return (
// 		<section className='flexCenter'>
// 			<h1></h1>
// 			<div className="my-10 mx-2 md:m-20 bg-gray-10 p-10 shadow-md rounded w-full max-w-[1000px] lg:mx-auto">
// 				<form className='flex flex-col gap-5 '>
// 					<section className='flex flex-col md:grid grid-cols-2 gap-5 flexBetween'>
// 						<div className="flex flex-col gap-2 w-full">
// 							<label className='text-gray-50'>First name</label>
// 							<input className="flex h-10 rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
// 								type="text"
// 								name="name"
// 							/>
// 						</div>
// 						<div className="flex flex-col gap-2 w-full">
// 							<label className='text-gray-50'>Last name</label>
// 							<input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
// 								type="text"
// 								name="name"
// 							/>
// 						</div>
// 					</section>

// 					<section className='flex flex-col md:grid grid-cols-2 gap-5 flexBetween'>
// 						<div className="flex flex-col gap-2 w-full">
// 							<label className='text-gray-50'>Email</label>
// 							<input className="flex h-10 rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
// 								type="text"
// 								name="name"
// 							/>
// 						</div>
// 						<div className="flex flex-col gap-2 w-full">
// 							<label className='text-gray-50'>Destination</label>
// 							<input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
// 								type="text"
// 								name="name"
// 							/>
// 						</div>
// 					</section>

// 					<button className='w-full bg-slate-700 py-2 text-white rounded-md hover:bg-slate-600'>Submit</button>
// 				</form>
// 			</div>
// 		</section>
// 	)
// }

// export default page



"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

export default function Page() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="">
      <Card className="w-full max-w-2xl mx-auto mt-10 mb-20">
        <CardHeader>
          <CardTitle>Travel Booking Form</CardTitle>
          <CardDescription>Fill in your travel details to book your next adventure.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 w-full">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2 w-full">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
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
              <Input id="destination" placeholder="Paris, France" required />
            </div>

            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="travelers">Number of Travelers</Label>
                <Input id="travelers" type="number" min="1" placeholder="2" required />
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

            <Button type="submit" className="w-full mt-10">Book Travel</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
