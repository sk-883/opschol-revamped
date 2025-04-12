'use client'
import { PrismaClient } from "@repo/db";
export default function Butto(){
  async function entry(){
      const res = await fetch('http://localhost:3001/create-customer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    }),
  })
  }

    return(
        <button onClick={entry}>clickme</button> 
    )
}
