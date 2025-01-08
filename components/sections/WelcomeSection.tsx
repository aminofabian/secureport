'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Server, Terminal, Activity, Wifi, AlertTriangle } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function WelcomeSection() {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const [threatCount, setThreatCount] = useState(0);
  const [systemLoad, setSystemLoad] = useState(23);

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  // Simulated threat detection
  useEffect(() => {
    const interval = setInterval(() => {
      setThreatCount(prev => {
        const newCount = Math.floor(Math.random() * 3);
        return newCount;
      });
      setSystemLoad(prev => {
        const newLoad = Math.floor(20 + Math.random() * 15);
        return newLoad;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Terminal effect
  useEffect(() => {
    if (typedTextRef.current) {
      const messages = [
        "Scanning network perimeter...",
        "Monitoring system activity...",
        "Updating security protocols...",
        "Analyzing potential threats...",
      ];
      let messageIndex = 0;
      
      const typeMessage = async () => {
        const text = messages[messageIndex];
        let index = 0;
        
        if (typedTextRef.current) {
          typedTextRef.current.textContent = "";
          
          const typeChar = () => {
            if (typedTextRef.current && index < text.length) {
              typedTextRef.current.textContent += text.charAt(index);
              index++;
              setTimeout(typeChar, 50);
            } else {
              setTimeout(() => {
                messageIndex = (messageIndex + 1) % messages.length;
                typeMessage();
              }, 2000);
            }
          };
          
          typeChar();
        }
      };

      typeMessage();
    }
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/20 dark:to-black">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { opacity: 0 },
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#064e3b" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#064e3b",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
          },
        }}
      />

      <div className="container mx-auto px-4 pt-28 lg:pt-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full 
                        bg-gradient-to-r from-emerald-900/10 to-emerald-800/10 
                        dark:from-emerald-500/10 dark:to-emerald-400/10 
                        backdrop-blur-sm border border-emerald-900/10 dark:border-emerald-400/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-mono text-emerald-900 dark:text-emerald-400">
                System Status: Operational
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-900 dark:text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Cyber Security
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r 
                            from-emerald-900 to-emerald-700 
                            dark:from-emerald-400 dark:to-emerald-600"
                  animate={{ backgroundPosition: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                  Without Limits
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-emerald-800/80 dark:text-emerald-300/80 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Advanced protection for your digital infrastructure. 
                Enterprise-grade security made accessible.
              </motion.p>
            </div>

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-black/90 rounded-xl p-4 font-mono text-sm text-emerald-400 
                        border border-emerald-900/20 dark:border-emerald-400/10 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-emerald-900/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-emerald-600 dark:text-emerald-500">
                  security_monitor.sh
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span>$ initialize_security_protocol --verbose</span>
                </div>
                <div className="pl-6">
                  <span ref={typedTextRef}></span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg bg-emerald-900 dark:bg-emerald-600 
                          text-white font-medium hover:bg-emerald-800 
                          dark:hover:bg-emerald-700 transition-colors
                          shadow-lg shadow-emerald-900/20 dark:shadow-emerald-900/40"
              >
                Start Protection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border-2 border-emerald-900/20 
                          dark:border-emerald-400/20 text-emerald-900 
                          dark:text-emerald-400 hover:bg-emerald-50 
                          dark:hover:bg-emerald-900/50 transition-colors"
              >
                View Solutions
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Security Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:mt-0 mt-8"
          >
            <SecurityDashboard threatCount={threatCount} systemLoad={systemLoad} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SecurityDashboard({ threatCount, systemLoad }: { threatCount: number; systemLoad: number }) {
  return (
    <div className="relative w-full aspect-square max-h-[600px] bg-black/90 rounded-2xl 
                    border border-emerald-900/20 dark:border-emerald-800/50 p-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,78,59,0.1)_0%,_transparent_70%)]" />
      
      {/* Radar Animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(6, 78, 59, 0.1) 360deg)',
          transformOrigin: 'center',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Dashboard Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-emerald-400 font-mono text-sm mb-1">SECURITY DASHBOARD</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-300 text-xs">Live Monitoring</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-900/20 rounded-lg px-3 py-1">
            <Wifi className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm">Connected</span>
          </div>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-2 gap-4 my-6">
          <SecurityMetric 
            label="Network Status" 
            value="Protected" 
            icon={Shield}
            positive={true}
          />
          <SecurityMetric 
            label="Active Threats" 
            value={`${threatCount}`} 
            icon={AlertTriangle}
            positive={threatCount === 0}
          />
          <SecurityMetric 
            label="System Load" 
            value={`${systemLoad}%`} 
            icon={Activity}
            positive={systemLoad < 30}
          />
          <SecurityMetric 
            label="Encryption" 
            value="AES-256" 
            icon={Lock}
            positive={true}
          />
        </div>

        {/* Activity Log */}
        <div className="bg-emerald-900/10 rounded-lg p-4">
          <h4 className="text-emerald-400 text-sm mb-2">Recent Activity</h4>
          <div className="space-y-2">
            <LogEntry timestamp="Now" message="System scan completed" />
            <LogEntry timestamp="2m ago" message="Firewall rules updated" />
            <LogEntry timestamp="5m ago" message="New device authenticated" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityMetric({ 
  label, 
  value, 
  icon: Icon, 
  positive 
}: { 
  label: string; 
  value: string; 
  icon: any;
  positive: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-lg bg-emerald-900/10 dark:bg-emerald-100/5 backdrop-blur-sm
                border border-emerald-900/10 dark:border-emerald-400/10"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-emerald-300">{label}</span>
        <Icon className="w-4 h-4 text-emerald-400" />
      </div>
      <div className="flex items-center space-x-2">
        <span className={`w-2 h-2 rounded-full ${
          positive ? 'bg-emerald-500' : 'bg-red-500'
        } animate-pulse`} />
        <span className="text-lg font-mono font-bold text-emerald-100">{value}</span>
      </div>
    </motion.div>
  );
}

function LogEntry({ timestamp, message }: { timestamp: string; message: string }) {
  return (
    <div className="flex items-center text-xs">
      <span className="text-emerald-500/60 w-16">{timestamp}</span>
      <span className="text-emerald-300">{message}</span>
    </div>
  );
} 