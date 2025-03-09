"use client"

import React from "react";
import { siX, siGithub, siDevpost, siKaggle, siLeetcode, siInstagram, siHuggingface, siCodewars } from "simple-icons";
import { Linkedin } from "lucide-react"

const icons = [
  { name: "Email", url: "mailto:example@email.com", color: "#D14836", path: "M2 4.5l10 6 10-6M2 19.5l10-6 10 6M22 4.5V19.5H2V4.5" }, // Gmail (Manually added)
  { name: "X", url: "https://twitter.com", color: `#1DA1F2`, path: siX?.path },
  { name: "LinkedIn", url: "https://linkedin.com", color: `#0066C8`, image: "/linkedinhatesopensource.webp" }, // ✅ Using custom image
  { name: "GitHub", url: "https://github.com", color: `#181717`, path: siGithub?.path },
  { name: "Devpost", url: "https://devpost.com", color: `#003E54`, path: siDevpost?.path },
  { name: "Kaggle", url: "https://kaggle.com", color: `#20BEFF`, path: siKaggle?.path },
  { name: "LeetCode", url: "https://leetcode.com", color: `#FFA116`, path: siLeetcode?.path },
  { name: "Instagram", url: "https://instagram.com", color: `#E4405F`, path: siInstagram?.path },
  { name: "Hugging Face", url: "https://huggingface.co", color: `#FFC107`, path: siHuggingface?.path },
  { name: "Codewars", url: "https://codewars.com", color: `#AD2C27`, path: siCodewars?.path },
];

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-4 py-4">
      {icons.map(({ name, url, color, path, image }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110"
          style={{
            backgroundColor: color,
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0)")}
        >
          {image ? (
            <img src={image} alt={name} className="w-18 h-18" />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d={path || ""} />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}
