import Link from "next/link"

export default function CreateAccountPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">Create Account</h1>
        <p className="text-slate-500">Enter your information to get started.</p>
      </div>
      <form className="space-y-4 " suppressHydrationWarning>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
             <label htmlFor="firstName" className="text-sm font-medium text-white/90">First Name</label>
             <input 
              id="firstName" 
              placeholder="John" 
              className="w-full p-2.5 bg-[#101835] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#54c4c3] focus:ring-1 focus:ring-[#54c4c3] transition-colors" 
              required 
              suppressHydrationWarning
            />
          </div>
          <div className="space-y-2">
             <label htmlFor="lastName" className="text-sm font-medium text-white/90">Last Name</label>
             <input 
              id="lastName" 
              placeholder="Doe" 
              className="w-full p-2.5 bg-[#101835] hover:border-white rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#54c4c3] focus:ring-1 focus:ring-[#54c4c3] transition-colors" 
              required 
              suppressHydrationWarning
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/90">Email</label>
          <input 
            id="email" 
            type="email" 
            placeholder="john.doe@example.com" 
            className="w-full p-2.5 bg-[#101835] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#54c4c3] focus:ring-1 focus:ring-[#54c4c3] transition-colors"
            required 
            suppressHydrationWarning
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-white/90">Password</label>
          <input 
            id="password" 
            type="password" 
            placeholder="Please create a password" 
            className="w-full p-2.5 bg-[#101835] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#54c4c3] focus:ring-1 focus:ring-[#54c4c3] transition-colors"
            required 
            suppressHydrationWarning
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-white/90">Confirm Password</label>
          <input 
            id="confirmPassword" 
            type="password" 
            placeholder="Please confirm your password" 
            className="w-full p-2.5 bg-[#101835] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#54c4c3] focus:ring-1 focus:ring-[#54c4c3] transition-colors"
            required 
            suppressHydrationWarning
          />
        </div>
        <button type="submit" className="w-full bg-[#456fb6] text-white py-2.5 rounded-lg hover:bg-[#365a9c] cursor-pointer">
          Create Account
        </button>
      </form>
      <div className="text-center text-sm text-white/60">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-[a] font-medium hover:underline hover:text-blue-500 transition-colors">
          Sign in
        </Link>
      </div>
    </div>
    
  )
}
