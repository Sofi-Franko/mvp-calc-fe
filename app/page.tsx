import React from "react";
import Link from "next/link";
import AuthProviders from "@/components/AuthProviders";

interface Session {
  user: string
}

const Home = () => {
  // let session: Session | null = null
  let session: Session | null = {user: "Sofi"}

  return !session
    ?
    <div>
      <p>You have to LogIn first</p>
      <AuthProviders />
    </div>
    :
    <div>
      <h2>Hola, {session.user}!</h2>
      <Link href="/create-stats" className="button">Share stats</Link>

      ...
      <div>Dashboard 1</div>
      <div>Dashboard 2</div>
      ...
    </div>
}

export default Home
