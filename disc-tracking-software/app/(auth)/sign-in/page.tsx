import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Sign In</h1>
        <p className="text-slate-500">Welcome back! Please enter your details.</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input 
            id="email" 
            type="email" 
            placeholder="email@example.com" 
            className="w-full p-2.5 bg-[#101835] hover:border-white rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#54c4c3] focus:ring-1 focus:ring-[#54c4c3] transition-colors"
            required 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <input 
            id="password" 
            type="password"
            placeholder="Please enter a password"
            className="w-full p-2.5 bg-[#101835] hover:border-white rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#54c4c3] focus:ring-1 focus:ring-[#54c4c3] transition-colors"
            required 
          />
        </div>
        <button type="submit" className="w-full bg-[#456fb6] text-white py-2.5 rounded-lg hover:bg-[#365a9c] cursor-pointer">
          Sign In
        </button>
      </form>
      <div className="text-center text-sm text-white/60">
        Don't have an account?{" "}
        <Link href="/create-account" className="underline hover:text-blue-600">
          Sign up
        </Link>
      </div>
      <div className="text-center text-sm text-white/60">
        <Link href="/" className="underline hover:text-blue-600">
          Back to homepage
        </Link>
      </div>

      
    </div>
  )
}
