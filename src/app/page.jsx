"use client";
import { useState } from "react";

export default function HomePage() {
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
                Effect of Water Depth on Freshwater Yield
              </p>
            </div>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 py-4">
              <a href="/" className="text-white font-medium hover:opacity-80">
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
                className="text-white/70 font-medium hover:text-white"
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
              To study the impact of water depth on distilled water output in a
              solar still.
            </p>

            {/* 3D Solar Still Models */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-16 bg-gradient-to-b from-gray-400 to-gray-600 transform skew-y-3 rounded-t-lg"></div>
                    <div className="w-28 h-4 bg-gradient-to-r from-amber-600 to-amber-800 transform -skew-x-12 mt-2 rounded"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-gray-500 to-gray-700 ml-6 mt-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Shallow depth (1cm)
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-16 bg-gradient-to-b from-gray-400 to-gray-600 transform skew-y-3 rounded-t-lg"></div>
                    <div className="w-28 h-6 bg-gradient-to-r from-blue-400 to-blue-600 transform -skew-x-12 mt-2 rounded"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-gray-500 to-gray-700 ml-6 mt-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Medium depth (3cm)
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-16 bg-gradient-to-b from-gray-400 to-gray-600 transform skew-y-3 rounded-t-lg"></div>
                    <div className="w-28 h-8 bg-gradient-to-r from-blue-500 to-blue-800 transform -skew-x-12 mt-2 rounded"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-gray-500 to-gray-700 ml-6 mt-1"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Deep depth (5cm)
                </h3>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              The depth of water in the basin of a solar still affects both the
              rate of evaporation and the thermal capacity of the system. This
              experiment investigates how different water depths impact the
              overall freshwater yield, which is crucial for optimizing solar
              still design.
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
                    To analyze the relationship between water depth and
                    evaporation rate in solar stills
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </span>
                    To determine the optimal water depth for maximum freshwater
                    production
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </span>
                    To understand thermal dynamics in solar distillation systems
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Learning Outcomes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Understanding of solar energy applications in water
                    purification
                  </li>
                  <li>
                    • Knowledge of heat transfer mechanisms in solar stills
                  </li>
                  <li>
                    • Experience with experimental design and data analysis
                  </li>
                  <li>
                    • Awareness of sustainable water production technologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "theory" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">
              Theoretical Background
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Principles of Solar Distillation
                </h3>
                <p className="text-gray-700 mb-4">
                  Solar distillation is based on the natural water cycle. Solar
                  energy heats water in a basin, causing evaporation. The water
                  vapor condenses on a cooler surface and is collected as
                  purified water.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Key Process:</strong> Solar Energy → Evaporation →
                    Condensation → Collection
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Effect of Water Depth
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Shallow Water:</strong> Heats up quickly, faster
                    evaporation, but lower thermal mass
                  </li>
                  <li>
                    <strong>Deep Water:</strong> Higher thermal mass, slower
                    heating, but sustained evaporation
                  </li>
                  <li>
                    <strong>Optimal Depth:</strong> Balance between rapid
                    heating and thermal stability
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">
                  Heat Transfer Mechanisms
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg mb-2">
                      <span className="text-blue-800 font-bold">
                        Conduction
                      </span>
                    </div>
                    <p className="text-blue-700">
                      Heat transfer through basin material
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg mb-2">
                      <span className="text-blue-800 font-bold">
                        Convection
                      </span>
                    </div>
                    <p className="text-blue-700">
                      Heat transfer in water and air
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg mb-2">
                      <span className="text-blue-800 font-bold">Radiation</span>
                    </div>
                    <p className="text-blue-700">Solar energy absorption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "procedure" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">
              Experimental Procedure
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Equipment Required
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Solar still apparatus</li>
                    <li>• Measuring cylinders</li>
                    <li>• Thermometers</li>
                    <li>• Timer/stopwatch</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Distilled water</li>
                    <li>• Collection containers</li>
                    <li>• Ruler for depth measurement</li>
                    <li>• Data recording sheets</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Step-by-Step Procedure
                </h3>
                <div className="space-y-4">
                  {[
                    "Set up the solar still apparatus in direct sunlight",
                    "Fill the basin with water to 1cm depth for the first trial",
                    "Place thermometers to measure water and air temperature",
                    "Start timing and record initial conditions",
                    "Measure distilled water output every 30 minutes for 4 hours",
                    "Record temperature readings at regular intervals",
                    "Repeat experiment with 3cm and 5cm water depths",
                    "Clean apparatus between trials to ensure accuracy",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                  Safety Precautions
                </h4>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Handle glass components carefully to avoid breakage</li>
                  <li>• Use sun protection when working outdoors</li>
                  <li>• Ensure stable setup to prevent spillage</li>
                  <li>• Monitor temperature to avoid overheating</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experiment" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">
              Virtual Experiment
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-6">
                Interactive Solar Still Simulator
              </h3>

              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <div className="text-center">
                  <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full mb-4">
                    ☀️ Solar Radiation: 800 W/m²
                  </div>

                  {/* Solar Still Visualization */}
                  <div className="relative mx-auto w-64 h-48 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg border-4 border-gray-600 mb-6">
                    <div className="absolute top-2 left-2 right-2 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-t-lg opacity-80"></div>
                    <div className="absolute bottom-8 left-4 right-4 h-12 bg-blue-600 rounded"></div>
                    <div className="absolute bottom-2 left-2 right-2 text-xs text-center text-gray-700 font-semibold">
                      Water Depth: 3cm
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-800">
                        Water Temp
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        45°C
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="font-semibold text-green-800">
                        Output Rate
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        2.5 L/h
                      </div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="font-semibold text-orange-800">
                        Efficiency
                      </div>
                      <div className="text-2xl font-bold text-orange-600">
                        35%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Water Depth (cm)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    defaultValue="3"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1cm</span>
                    <span>3cm</span>
                    <span>5cm</span>
                  </div>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Start Simulation
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-black mb-4">
                Data Collection
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">
                        Time (hrs)
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        1cm Depth
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        3cm Depth
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        5cm Depth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">1</td>
                      <td className="border border-gray-300 p-2">0.8 L</td>
                      <td className="border border-gray-300 p-2">0.6 L</td>
                      <td className="border border-gray-300 p-2">0.4 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">2</td>
                      <td className="border border-gray-300 p-2">1.5 L</td>
                      <td className="border border-gray-300 p-2">1.3 L</td>
                      <td className="border border-gray-300 p-2">1.0 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">3</td>
                      <td className="border border-gray-300 p-2">2.1 L</td>
                      <td className="border border-gray-300 p-2">2.2 L</td>
                      <td className="border border-gray-300 p-2">1.8 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">4</td>
                      <td className="border border-gray-300 p-2">2.6 L</td>
                      <td className="border border-gray-300 p-2">3.1 L</td>
                      <td className="border border-gray-300 p-2">2.8 L</td>
                    </tr>
                  </tbody>
                </table>
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
