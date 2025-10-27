"use client";
import { useState } from "react";

export default function MaterialsPage() {
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
                Effect of Basin Materials on Performance
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
                className="text-white font-medium hover:opacity-80"
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
              To investigate the effect of different basin materials on the
              thermal performance and water distillation efficiency of a solar
              still.
            </p>

            {/* 3D Solar Still Models with Different Materials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    {/* Stainless Steel - shiny metallic look */}
                    <div className="w-24 h-16 bg-gradient-to-b from-gray-300 to-gray-500 transform skew-y-3 rounded-t-lg shadow-lg border border-gray-400"></div>
                    <div className="w-28 h-6 bg-gradient-to-r from-gray-400 to-gray-600 transform -skew-x-12 mt-2 rounded shadow-md"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-gray-500 to-gray-700 ml-6 mt-1"></div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-70"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Stainless Steel
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    {/* Galvanized Iron - zinc coating look */}
                    <div className="w-24 h-16 bg-gradient-to-b from-zinc-300 to-zinc-500 transform skew-y-3 rounded-t-lg shadow-lg border border-zinc-400"></div>
                    <div className="w-28 h-6 bg-gradient-to-r from-zinc-400 to-zinc-600 transform -skew-x-12 mt-2 rounded shadow-md"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-zinc-500 to-zinc-700 ml-6 mt-1"></div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-zinc-200 rounded-full opacity-70"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Galvanized Iron
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 mb-4 aspect-square flex items-center justify-center">
                  <div className="relative">
                    {/* Mild Steel - darker metallic look */}
                    <div className="w-24 h-16 bg-gradient-to-b from-slate-400 to-slate-600 transform skew-y-3 rounded-t-lg shadow-lg border border-slate-500"></div>
                    <div className="w-28 h-6 bg-gradient-to-r from-slate-500 to-slate-700 transform -skew-x-12 mt-2 rounded shadow-md"></div>
                    <div className="w-6 h-8 bg-gradient-to-r from-slate-600 to-slate-800 ml-6 mt-1"></div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-slate-300 rounded-full opacity-60"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">Mild Steel</h3>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Different basin materials have varying thermal conductivity, heat
              capacity, and corrosion resistance properties. This experiment
              compares stainless steel, galvanized iron, and mild steel to
              determine which material provides the best thermal performance for
              solar water distillation systems.
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
                    To compare thermal conductivity effects of different basin
                    materials
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </span>
                    To analyze heat absorption and retention capabilities of
                    each material
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </span>
                    To determine the most efficient basin material for solar
                    distillation
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Learning Outcomes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Understanding material properties in thermal applications
                  </li>
                  <li>• Knowledge of thermal conductivity and heat capacity</li>
                  <li>
                    • Experience with material selection for engineering
                    applications
                  </li>
                  <li>
                    • Awareness of corrosion resistance in water treatment
                    systems
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
                  Material Properties
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Stainless Steel
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• High corrosion resistance</li>
                      <li>• Moderate thermal conductivity</li>
                      <li>• Durable and long-lasting</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-zinc-800 mb-2">
                      Galvanized Iron
                    </h4>
                    <ul className="text-sm text-zinc-600 space-y-1">
                      <li>• Zinc coating protection</li>
                      <li>• Good thermal conductivity</li>
                      <li>• Cost-effective solution</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Mild Steel
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• High thermal conductivity</li>
                      <li>• Requires rust protection</li>
                      <li>• Excellent heat transfer</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Thermal Conductivity Impact
                </h3>
                <p className="text-gray-700 mb-4">
                  The basin material affects how efficiently solar energy is
                  transferred to the water. Higher thermal conductivity
                  materials transfer heat faster, but may also lose heat more
                  quickly to the environment.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Key Principle:</strong> Optimal balance between heat
                    absorption and retention determines distillation efficiency
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">
                  Thermal Conductivity Values
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-orange-100 p-3 rounded-lg mb-2">
                      <span className="text-orange-800 font-bold">
                        Stainless Steel
                      </span>
                    </div>
                    <p className="text-orange-700">16 W/m·K</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 p-3 rounded-lg mb-2">
                      <span className="text-orange-800 font-bold">
                        Galvanized Iron
                      </span>
                    </div>
                    <p className="text-orange-700">50 W/m·K</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 p-3 rounded-lg mb-2">
                      <span className="text-orange-800 font-bold">
                        Mild Steel
                      </span>
                    </div>
                    <p className="text-orange-700">80 W/m·K</p>
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
                    <li>• Three identical solar still frames</li>
                    <li>• Stainless steel basin</li>
                    <li>• Galvanized iron basin</li>
                    <li>• Mild steel basin</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Multiple thermometers</li>
                    <li>• Measuring cylinders</li>
                    <li>• Timer/stopwatch</li>
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
                    "Set up three identical solar still apparatus with different basin materials",
                    "Fill each basin with the same amount of water (3cm depth)",
                    "Place thermometers in each basin and ambient air",
                    "Position all setups in the same solar conditions simultaneously",
                    "Record temperature readings every 15 minutes for 6 hours",
                    "Measure water output from each still every hour",
                    "Monitor basin surface temperature throughout the experiment",
                    "Calculate efficiency and thermal performance for each material",
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
                  Important Considerations
                </h4>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Ensure all basins receive equal solar exposure</li>
                  <li>• Use identical water volumes and quality</li>
                  <li>• Maintain consistent environmental conditions</li>
                  <li>• Clean all surfaces before starting the experiment</li>
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
                Material Comparison Simulator
              </h3>

              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <div className="text-center">
                  <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full mb-4">
                    ☀️ Solar Radiation: 850 W/m²
                  </div>

                  {/* Three Solar Stills Side by Side */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="relative mx-auto w-20 h-16 bg-gradient-to-b from-blue-200 to-blue-400 rounded border-2 border-gray-400 mb-2">
                        <div className="absolute bottom-2 left-1 right-1 h-4 bg-blue-600 rounded"></div>
                      </div>
                      <p className="text-xs font-semibold">Stainless Steel</p>
                      <p className="text-xs text-gray-600">42°C</p>
                    </div>
                    <div className="text-center">
                      <div className="relative mx-auto w-20 h-16 bg-gradient-to-b from-blue-200 to-blue-400 rounded border-2 border-zinc-400 mb-2">
                        <div className="absolute bottom-2 left-1 right-1 h-4 bg-blue-600 rounded"></div>
                      </div>
                      <p className="text-xs font-semibold">Galvanized Iron</p>
                      <p className="text-xs text-gray-600">48°C</p>
                    </div>
                    <div className="text-center">
                      <div className="relative mx-auto w-20 h-16 bg-gradient-to-b from-blue-200 to-blue-400 rounded border-2 border-slate-500 mb-2">
                        <div className="absolute bottom-2 left-1 right-1 h-4 bg-blue-600 rounded"></div>
                      </div>
                      <p className="text-xs font-semibold">Mild Steel</p>
                      <p className="text-xs text-gray-600">52°C</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-semibold text-gray-800">
                        Output Rate
                      </div>
                      <div className="text-xl font-bold text-gray-600">
                        2.1 L/h
                      </div>
                    </div>
                    <div className="bg-zinc-50 p-3 rounded-lg">
                      <div className="font-semibold text-zinc-800">
                        Output Rate
                      </div>
                      <div className="text-xl font-bold text-zinc-600">
                        2.7 L/h
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <div className="font-semibold text-slate-800">
                        Output Rate
                      </div>
                      <div className="text-xl font-bold text-slate-600">
                        3.2 L/h
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Solar Intensity (W/m²)
                  </label>
                  <input
                    type="range"
                    min="400"
                    max="1000"
                    defaultValue="850"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>400</span>
                    <span>700</span>
                    <span>1000</span>
                  </div>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Run Material Comparison
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-black mb-4">
                Performance Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">
                        Time (hrs)
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        Stainless Steel
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        Galvanized Iron
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        Mild Steel
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">2</td>
                      <td className="border border-gray-300 p-2">1.1 L</td>
                      <td className="border border-gray-300 p-2">1.4 L</td>
                      <td className="border border-gray-300 p-2">1.6 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">4</td>
                      <td className="border border-gray-300 p-2">2.3 L</td>
                      <td className="border border-gray-300 p-2">2.9 L</td>
                      <td className="border border-gray-300 p-2">3.3 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">6</td>
                      <td className="border border-gray-300 p-2">3.6 L</td>
                      <td className="border border-gray-300 p-2">4.5 L</td>
                      <td className="border border-gray-300 p-2">5.1 L</td>
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
