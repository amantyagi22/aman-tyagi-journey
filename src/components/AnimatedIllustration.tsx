
import React, { useEffect, useRef } from "react";

const AnimatedIllustration = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth * devicePixelRatio;
      const height = canvas.clientHeight * devicePixelRatio;
      
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    };
    
    // Set initial dimensions
    setCanvasDimensions();
    
    // Create particles
    const particleCount = 50;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      connections: number[];
    }> = [];
    
    // Generate colors
    const colors = [
      '#4F46E5', // indigo
      '#3B82F6', // blue
      '#8B5CF6', // purple
      '#EC4899', // pink
      '#6366F1', // indigo
    ];
    
    // Init particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 5 + 2;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        connections: []
      });
    }
    
    // Draw function
    const draw = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particle positions and draw
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Find connections
        particle.connections = [];
        for (let j = 0; j < particles.length; j++) {
          if (j === index) continue;
          
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            particle.connections.push(j);
            
            // Draw connection
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 100})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      
      // Draw code-like elements (binary, brackets, etc)
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const char = Math.random() > 0.5 ? '01' : '{}';
        const opacity = Math.random() * 0.2 + 0.05;
        
        ctx.fillStyle = `rgba(79, 70, 229, ${opacity})`;
        ctx.font = `${Math.floor(Math.random() * 12) + 8}px monospace`;
        ctx.fillText(char, x, y);
      }
      
      requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Handle resize
    window.addEventListener('resize', setCanvasDimensions);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-50 via-blue-50 to-white"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L12 3L4 7M20 7V17L12 21M20 7L12 11M12 21L4 17V7M12 21V11M4 7L12 11" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedIllustration;
