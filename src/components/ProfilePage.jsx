import React from 'react';
import '../index.css'; 
import ProfileImage from '../assets/avatar-memo.jpeg';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram, FaTiktok, FaSnapchat } from 'react-icons/fa'; // استيراد الأيقونات

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500 mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">AHMED SADEK</h1>
          <p className="text-green font-semibold mb-4">Egypt, Cairo</p>
          <p className="text-[#eee] mb-4">
            &quot;Artist and Graphic Designer&quot;
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <a
            href="https://www.facebook.com/profile.php?id=100014644685943"
            className="flex items-center justify-center w-full text-lg font-semibold bg-gray-700 hover:bg-green hover:text-black py-2 px-4 rounded-md"
          >
            <FaFacebook className="text-xl mr-2" /> Facebook
          </a>
          <a
            href="https://www.instagram.com/ahmed._.sadek/"
            className="flex items-center justify-center w-full text-lg font-semibold bg-gray-700 hover:bg-green hover:text-black py-2 px-4 rounded-md"
          >
            <FaInstagram className="text-xl mr-2" /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@ahmed_sadek?_t=8pTQkT8ZRot&_r=1"
            className="flex items-center justify-center w-full text-lg font-semibold bg-gray-700 hover:bg-green hover:text-black py-2 px-4 rounded-md"
          >
            <FaTiktok className="text-xl mr-2" /> TikTok
          </a>
          <a
            href="https://snapchat.com/t/b7YY1dG4"
            className="flex items-center justify-center w-full text-lg font-semibold bg-gray-700 hover:bg-green hover:text-black py-2 px-4 rounded-md"
          >
            <FaSnapchat className="text-xl mr-2" /> Snapchat
          </a>
          <a
            href="https://wa.me/+201278352660"
            className="flex items-center justify-center w-full text-lg font-semibold bg-gray-700 hover:bg-green hover:text-black py-2 px-4 rounded-md"
          >
            <FaWhatsapp className="text-xl mr-2" /> WhatsApp
          </a>
          <a
            href="https://t.me/@Memo_Sadek"
            className="flex items-center justify-center w-full text-lg font-semibold bg-gray-700 hover:bg-green hover:text-black py-2 px-4 rounded-md"
          >
            <FaTelegram className="text-xl mr-2" /> Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
