"use client";
import { useState } from "react";

export default function InclinationPage() {
  const [activeTab, setActiveTab] = useState("aim");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue Header */}
      <header className="bg-[#4169E1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Dassault Systemes Logo */}
            <div className="flex items-center">
              <div className="bg-white text-[#4169E1] px-4 py-2 rounded font-bold text-lg">
                3DS DASSAULT SYSTEMES
              </div>
              <div className="ml-2 text-sm">La Fondation</div>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Solar Still Experiment</h1>
              <p className="text-lg opacity-90">
                Effect of Cover Inclination on Efficiency
              </p>
            </div>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 py-4">
              <a
                href="/"
                className="text-white/70 font-medium hover:text-white"
              >
                Experiment 1: Water Depth
              </a>
              <a
                href="/materials"
                className="text-white/70 font-medium hover:text-white"
              >
                Experiment 2: Basin Materials
              </a>
              <a
                href="/inclination"
                className="text-white font-medium hover:opacity-80"
              >
                Experiment 3: Cover Inclination
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center space-x-8 mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("aim")}
            className={`font-medium pb-4 transition-colors ${
              activeTab === "aim"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Aim
          </button>
          <button
            onClick={() => setActiveTab("objective")}
            className={`font-medium pb-4 transition-colors ${
              activeTab === "objective"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Objective
          </button>
          <button
            onClick={() => setActiveTab("theory")}
            className={`font-medium pb-4 transition-colors ${
              activeTab === "theory"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Theory
          </button>
          <button
            onClick={() => setActiveTab("procedure")}
            className={`font-medium pb-4 transition-colors ${
              activeTab === "procedure"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Procedure
          </button>
          <button
            onClick={() => setActiveTab("experiment")}
            className={`font-medium pb-4 transition-colors ${
              activeTab === "experiment"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Experiment
          </button>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === "aim" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">
              Aim of the Experiment
            </h2>

            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              To investigate the optimal angle of inclination for the glass
              cover to maximize solar still efficiency and water distillation
              output.
            </p>

            {/* 3D Solar Still Models with Different Angles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    {/* 15° angle - slight tilt */}
                    <div className="w-24 h-16 bg-gradient-to-b from-gray-400 to-gray-600 transform skew-y-1 rounded-t-lg shadow-lg border border-gray-400"></div>
                    <div className="w-28 h-6 bg-gradient-to-r from-blue-400 to-blue-600 transform -skew-x-12 mt-2 rounded shadow-md"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-gray-500 to-gray-700 ml-6 mt-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">15° angle</h3>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    {/* 30° angle - moderate tilt */}
                    <div className="w-24 h-16 bg-gradient-to-b from-gray-400 to-gray-600 transform skew-y-3 rounded-t-lg shadow-lg border border-gray-400"></div>
                    <div className="w-28 h-6 bg-gradient-to-r from-blue-400 to-blue-600 transform -skew-x-12 mt-2 rounded shadow-md"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-gray-500 to-gray-700 ml-6 mt-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">30° angle</h3>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    {/* 45° angle - steep tilt */}
                    <div className="w-24 h-16 bg-gradient-to-b from-gray-400 to-gray-600 transform skew-y-6 rounded-t-lg shadow-lg border border-gray-400"></div>
                    <div className="w-28 h-6 bg-gradient-to-r from-blue-400 to-blue-600 transform -skew-x-12 mt-2 rounded shadow-md"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-gray-500 to-gray-700 ml-6 mt-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">45° angle</h3>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              The angle of the glass cover affects solar radiation absorption,
              condensation efficiency, and water droplet collection. Optimal
              angles balance maximum sun exposure with effective condensate
              drainage to maximize distilled water production.
            </p>
          </div>
        )}

        {activeTab === "objective" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">
              Objectives of the Experiment
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Primary Objectives
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      1
                    </span>
                    To determine the optimal angle for maximum solar radiation
                    capture
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </span>
                    To analyze condensation efficiency at different cover angles
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </span>
                    To study water droplet collection and drainage patterns
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Learning Outcomes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Understanding of solar geometry and angle optimization
                  </li>
                  <li>
                    • Knowledge of condensation physics and droplet dynamics
                  </li>
                  <li>
                    • Experience with geometric design in engineering systems
                  </li>
                  <li>• Awareness of environmental factors in solar design</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 - Solar Still Experiment - Developed By Naman Jain</p>
        </div>
      </footer>
    </div>
  );
}
