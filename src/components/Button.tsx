"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"


export default function BaseButton() {
  const { data: session } : any = useSession()
  console.log(session)
  if (session) {
    return (
      <div className="mx-4">
        Signed in as {session.user.name} <br />
        <Image src={session.user.image} width={100} height={50} alt="something"/>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
    <div className="mx-4">Not signed in</div>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}