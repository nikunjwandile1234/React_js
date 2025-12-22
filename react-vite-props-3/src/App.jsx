
import './App.css'
import InstaProfileCard from './components/card'

function App() {
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 
                     text-4xl font-bold mb-10 tracking-wide drop-shadow-[0_0_15px_rgba(255,20,180,0.6)]">
        INSTA PROFILE PAGE
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        <InstaProfileCard
          username="aditya kanchanwadkar"
          btntext="view aditya profile"
          profileurl="_._adiiiiiiiiie_._"
          viewprofileurl="https://www.instagram.com/_._adiiiiiiiiie_._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          imageurl="./assets-1/aditya-insta.png"
        />
        <InstaProfileCard
          username="pranav kanade"
          btntext="view pranav profile"
          profileurl="pranav07__"
          viewprofileurl="https://www.instagram.com/pranav07__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          imageurl="./assets-1/pranav-insta.png"
        />
        <InstaProfileCard
          username="Nikunj Wandile"
          btntext="view Nikunj profile"
          profileurl="niku_nj_wandile_428"
          viewprofileurl="https://www.instagram.com/niku_nj_wandile_428?igsh=MTIwMWF1a3YweTdxOA%3D%3D"
          imageurl="./assets-1/Nikunj-insta.png"
        />
      </div>

      <footer className="mt-16 text-gray-400 text-sm">
        © 2025 Insta Profile Showcase — Built with <span className="text-pink-500 font-semibold">React + Tailwind</span>
      </footer>
    </div>
  )
}

export default App

