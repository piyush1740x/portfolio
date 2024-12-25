import React from 'react'

const footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 MyPortfolio. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="/Main.jsx" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/About.jsx" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/Projects.jsx" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="/Contact.jsx" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.827 9.827 0 01-2.828.775A4.933 4.933 0 0023.337 3a9.865 9.865 0 01-3.127 1.196 4.921 4.921 0 00-8.385 4.482A13.955 13.955 0 011.671 3.149a4.922 4.922 0 00-4.72-1.702A4.924 4.924 0 004.6 7.905a4.928 4.928 0 002.212-.611A4.918 4.918 0 002.6 11.472a4.922 4.922 0 002.212.611A4.922 4.922 0 012 18.557c0 0 .356.052.729.061a13.92 13.92 0 007.548-2.4 14.12 14.12 0 004.06-.853 13.8 13.8 0 01-3.353-.736 14.2 14.2 0 004.688-.482" />
            </svg>
          </a>
          <a
            href="https://github.com/piyush1740x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297C5.373.297 0 5.67 0 12.29c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.286-.012-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.746.084-.731.084-.731 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.806 1.305 3.49.998.108-.775.417-1.304.762-1.604-2.666-.301-5.467-1.336-5.467-5.932 0-1.31.468-2.382 1.236-3.22-.123-.302-.535-1.52.117-3.164 0 0 1.008-.322 3.303 1.23a11.45 11.45 0 016.006 0c2.296-1.552 3.302-1.23 3.302-1.23.653 1.644.241 2.862.118 3.164.768.838 1.236 1.91 1.236 3.22 0 4.61-2.806 5.63-5.475 5.927.43.37.812 1.102.812 2.222 0 1.607-.015 2.902-.015 3.293 0 .319.192.694.8.577C20.565 22.092 24 17.594 24 12.29 24 5.67 18.627.297 12 .297z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default footer