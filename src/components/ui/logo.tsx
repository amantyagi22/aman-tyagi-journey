import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  showText?: boolean;
  text?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  variant = "light",
  showText = true,
  text = "Aman",
}) => {
  // Determine size dimensions
  const dimensions = {
    sm: { width: 36, height: 36 },
    md: { width: 44, height: 44 },
    lg: { width: 56, height: 56 },
  };

  // Determine colors based on variant
  const colors = {
    light: {
      primary: "#FFFFFF",
      secondary: "#93C5FD", // blue-300
      accent: "#3B82F6", // blue-500
      shadow: "rgba(59, 130, 246, 0.3)",
    },
    dark: {
      primary: "#F8FAFC", // slate-50
      secondary: "#3B82F6", // blue-500
      accent: "#93C5FD", // blue-300
      shadow: "rgba(147, 197, 253, 0.3)",
    },
  };

  const { width, height } = dimensions[size];
  const { primary, secondary, accent, shadow } = colors[variant];

  return (
    <Link to="/" className="flex items-center">
      <div className="relative">
        <svg
          width={width}
          height={height}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
          style={{ filter: `drop-shadow(0 0 6px ${shadow})` }}
        >
          <path
            d="M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60C47.464 60 60 47.464 60 32C60 16.536 47.464 4 32 4Z"
            fill={secondary}
            fillOpacity="0.12"
          />
          <path
            d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8Z"
            stroke={accent}
            strokeWidth="2"
          />

          {/* Stylized A */}
          <path
            d="M32 15L42 45H37L34.5 37H29.5L27 45H22L32 15Z"
            fill={primary}
            strokeWidth="0.5"
            stroke={primary}
          />
          <path d="M30.5 33H33.5L32 28L30.5 33Z" fill={accent} />

          {/* Horizontal line */}
          <path
            d="M24 47H40"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {showText && (
        <span
          className={`ml-2 font-bold text-${
            variant === "light" ? "white" : "slate-800"
          }`}
        >
          {text}
        </span>
      )}
    </Link>
  );
};

export default Logo;
