"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Droplets,
  TestTube2,
  Headphones,
  Phone,
  X,
  CheckCircle2,
  Clock,
  ShieldCheck,
  HeartPulse,
  Microscope,
  Dna,
  Layers,
  ChevronDown,
  ChevronUp,
  Mail,
  Globe,
  MapPin,
  Sparkles,
  CalendarPlus,
  Stethoscope,
} from "lucide-react";
import { LAB_DATA, Category, TestItem } from "@/data/tests";

// Official Dr. Roy's Laboratory Vector Logo
function BrandLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} aria-label="Dr. Roy's Laboratory Logo">
      <defs>
        <linearGradient id="labGreenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008000" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
      </defs>
      {/* Circular Green Badge Background */}
      <circle cx="16" cy="16" r="16" fill="url(#labGreenBg)" />
      {/* Crisp White Medical Microscope / Biotech Symbol */}
      <g transform="translate(4, 4)" fill="#ffffff">
        <path d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-2v-1c0-1.66-1.34-3-3-3h-1V7.83l1.88 1.88 1.41-1.41L14.41 5.41 13 4 9.17 7.83l1.41 1.41L12 7.83V11h-1c-1.66 0-3 1.34-3 3v1H6c0 1.1.9 2 2 2h3v2H7zm3-5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h-4v-1z" />
      </g>
    </svg>
  );
}

// Map category names to icons
function getCategoryIcon(name: string) {
  switch (name) {
    case "Hematology":
      return Droplets;
    case "Biochemistry & Diabetes":
      return TestTube2;
    case "Lipid Profile":
      return HeartPulse;
    case "Urine Routine Examination":
      return Microscope;
    case "Stool Examination":
      return Layers;
    case "Bacteriology & Culture":
      return Dna;
    default:
      return Stethoscope;
  }
}

export default function PricingGuidePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"tests" | "support">("tests");
  const [expandedTestId, setExpandedTestId] = useState<string | null>(null);

  // Total test count
  const totalTestCount = useMemo(() => {
    return LAB_DATA.categories.reduce((acc, cat) => acc + cat.tests.length, 0);
  }, []);

  // Filtered categories & tests
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return LAB_DATA.categories
      .map((cat) => {
        if (selectedCategory !== "all" && cat.categoryName !== selectedCategory) {
          return null;
        }

        const matchingTests = cat.tests.filter((test) => {
          if (!query) return true;
          return (
            test.name.toLowerCase().includes(query) ||
            test.id.toLowerCase().includes(query) ||
            test.specimen.toLowerCase().includes(query) ||
            test.refRange.toLowerCase().includes(query) ||
            cat.categoryName.toLowerCase().includes(query) ||
            cat.reportType.toLowerCase().includes(query)
          );
        });

        if (matchingTests.length === 0) return null;

        return {
          ...cat,
          tests: matchingTests,
        };
      })
      .filter(Boolean) as Category[];
  }, [searchQuery, selectedCategory]);

  const totalMatchingTests = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.tests.length, 0);
  }, [filteredCategories]);

  const toggleExpand = (id: string) => {
    setExpandedTestId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex justify-center selection:bg-[#008000] selection:text-white">
      {/* Mobile-first clinical frame centered on desktop */}
      <div className="w-full max-w-md min-h-screen bg-[#f7f9fb] text-slate-900 pb-36 flex flex-col relative shadow-xl border-x border-slate-200">
        
        {/* Top Clinical Header Bar with Letterhead Accent */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
          {/* Medical Teal Accent Strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0d9488] via-[#008000] to-[#0f172a]" />

          <div className="px-4 pt-3 pb-2.5">
            {/* Brand Title Row */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <BrandLogo className="w-9 h-9 shrink-0 drop-shadow-xs" />
                <div>
                  <h1 className="font-slab text-[18px] font-black tracking-tight text-slate-900 leading-none">
                    DR. ROY&apos;S LABORATORY
                  </h1>
                  <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                    Test Price List & Diagnostic Guide
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <a
                  href={`tel:${LAB_DATA.phone}`}
                  aria-label="Call lab"
                  className="w-8 h-8 rounded-full bg-emerald-50 text-[#008000] flex items-center justify-center hover:bg-emerald-100 active:scale-95 transition-all border border-emerald-200"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Subtext */}
            <div className="flex items-center gap-1 text-[11px] text-slate-500 mb-2.5 font-medium">
              <MapPin className="w-3 h-3 text-[#008000] shrink-0" />
              <span className="truncate">Sarkheldih Subhash Chowk, Jamtara</span>
            </div>

            {/* Search Input Bar (Component C) */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="test-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  if (activeTab !== "tests") setActiveTab("tests");
                  setSearchQuery(e.target.value);
                }}
                placeholder="Search tests (e.g. CBC, Lipid, Urine, HbA1c)..."
                className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-[#008000] focus:bg-white transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Chips (Active: #008000) */}
            {activeTab === "tests" && (
              <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto no-scrollbar pb-0.5">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`text-[11.5px] px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-[#008000] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  All Tests ({totalTestCount})
                </button>
                {LAB_DATA.categories.map((cat) => (
                  <button
                    key={cat.categoryName}
                    onClick={() => setSelectedCategory(cat.categoryName)}
                    className={`text-[11.5px] px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat.categoryName
                        ? "bg-[#008000] text-white shadow-xs"
                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {cat.categoryName} ({cat.tests.length})
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 px-3.5 py-3.5 space-y-3">
          {activeTab === "tests" ? (
            <>
              {/* Search results count summary */}
              {searchQuery && (
                <div className="flex justify-between items-center text-xs text-slate-500 px-1 font-medium">
                  <span>
                    Showing <strong>{totalMatchingTests}</strong> matching {totalMatchingTests === 1 ? "investigation" : "investigations"}
                  </span>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-[#008000] hover:underline font-semibold"
                  >
                    Reset
                  </button>
                </div>
              )}

              {/* Test Category Sections */}
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => {
                  const Icon = getCategoryIcon(category.categoryName);
                  return (
                    <section key={category.categoryName} className="space-y-2">
                      {/* Category Header Strip */}
                      <div className="flex items-center justify-between px-1.5 pt-1">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded bg-emerald-100 text-[#008000] flex items-center justify-center">
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <h2 className="font-slab font-bold text-slate-900 text-sm tracking-tight">
                            {category.categoryName}
                          </h2>
                          <span className="text-[10px] text-slate-500 font-medium bg-slate-200/60 px-1.5 py-0.2 rounded">
                            {category.reportType}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500 font-mono">
                          {category.tests.length}
                        </span>
                      </div>

                      {/* Test Cards List (Component D) */}
                      <div className="space-y-2">
                        {category.tests.map((test) => {
                          const isExpanded = expandedTestId === test.id;
                          const isPanel = test.unit === "Panel";

                          return (
                            <div
                              key={test.id}
                              onClick={() => toggleExpand(test.id)}
                              className={`bg-white border rounded-xl p-3.5 transition-all cursor-pointer shadow-2xs ${
                                isExpanded
                                  ? "border-[#008000] ring-1 ring-[#008000]/20 bg-slate-50/50 shadow-sm"
                                  : "border-slate-200 hover:border-slate-300 hover:shadow-xs"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="w-2 h-2 rounded-full bg-[#008000] shrink-0" />
                                    <h3 className="font-bold text-slate-900 text-[13.5px] leading-tight">
                                      {test.name}
                                    </h3>
                                    {isPanel ? (
                                      <span className="text-[10px] font-bold bg-[#008000] text-white px-1.5 py-0.2 rounded shadow-2xs">
                                        PROFILE PANEL
                                      </span>
                                    ) : (
                                      <span className="text-[10.5px] font-semibold bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded border border-emerald-200">
                                        {category.categoryName.split(" ")[0]}
                                      </span>
                                    )}
                                  </div>

                                  {/* Subtitle / Specimen Info */}
                                  <p className="text-[11.5px] text-slate-500 mt-1 truncate">
                                    Sample: {test.specimen}
                                  </p>
                                </div>

                                {/* Price block with IBM Plex Mono font */}
                                <div className="text-right shrink-0">
                                  <div className="font-mono font-bold text-base text-slate-900 leading-tight">
                                    ₹{test.suggestedPrice}
                                  </div>
                                  <span className="text-[9.5px] text-slate-400 uppercase tracking-wider font-semibold block">
                                    Standard Rate
                                  </span>
                                </div>
                              </div>

                              {/* Expandable Diagnostic Details */}
                              {isExpanded && (
                                <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs space-y-2 bg-white p-2.5 rounded-lg border border-slate-100">
                                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                                    <div className="bg-slate-50 p-2 rounded">
                                      <span className="text-slate-500 block font-medium">Normal Ref Range</span>
                                      <span className="font-mono font-semibold text-slate-900 mt-0.5 block">{test.refRange}</span>
                                    </div>
                                    <div className="bg-slate-50 p-2 rounded">
                                      <span className="text-slate-500 block font-medium">Unit of Measure</span>
                                      <span className="font-mono font-semibold text-slate-900 mt-0.5 block">{test.unit}</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between pt-1 text-[11.5px]">
                                    <span className="text-slate-600 truncate max-w-[200px]">
                                      Specimen: <strong>{test.specimen}</strong>
                                    </span>
                                    <a
                                      href={`tel:${LAB_DATA.phone}`}
                                      onClick={(e) => e.stopPropagation()}
                                      className="bg-[#008000] hover:bg-[#006400] text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 shadow-xs active:scale-95"
                                    >
                                      <CalendarPlus className="w-3.5 h-3.5" />
                                      <span>Book Test</span>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  );
                })
              ) : (
                <div className="bg-white rounded-xl p-8 text-center border border-slate-200 space-y-3 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#008000] flex items-center justify-center mx-auto border border-emerald-200">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="font-slab font-bold text-base text-slate-900">No matching investigation found</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    No tests match &ldquo;{searchQuery}&rdquo;. Contact our laboratory helpline for custom profile queries.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="inline-block text-xs font-semibold text-[#008000] hover:underline pt-1 cursor-pointer"
                  >
                    View all 48 investigations
                  </button>
                </div>
              )}

              {/* NABL / Clinical Standards Badge */}
              <div className="bg-white rounded-xl p-3 text-center text-xs text-slate-600 flex items-center justify-center gap-2 border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span className="font-medium">NABL Quality Standards & Standardized Laboratory Procedures</span>
              </div>
            </>
          ) : (
            /* Support & Clinic Information View */
            <div className="space-y-3">
              {/* Brand Letterhead Card */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs text-center space-y-3 relative overflow-hidden">
                <div className="h-1.5 absolute top-0 inset-x-0 bg-gradient-to-r from-[#008000] via-[#3CB371] to-[#0d9488]" />
                
                <BrandLogo className="w-12 h-12 mx-auto drop-shadow-sm" />
                <div>
                  <h3 className="font-slab font-black text-lg text-slate-900">
                    DR. ROY&apos;S LABORATORY
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Advanced Diagnostics & Pathology Services
                  </p>
                </div>

                {/* Primary CTA Button (Component A) */}
                <div className="pt-1">
                  <a
                    href={`tel:${LAB_DATA.phone}`}
                    className="bg-[#008000] hover:bg-[#006400] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 w-full"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Helpline: +91 9934358189</span>
                  </a>
                </div>
              </div>

              {/* Official Contact & Location Card */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-3">
                <h4 className="font-slab font-bold text-sm text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#008000]" />
                  <span>Laboratory Contact Directory</span>
                </h4>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#008000] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Address</span>
                      <span>Sarkheldih Subhash Chowk, Jamtara, Jharkhand - 815351</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#008000] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Email Inquiries</span>
                      <a href="mailto:drroylab@gmail.com" className="text-[#2563EB] hover:underline font-mono">
                        drroylab@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-[#008000] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Official Website</span>
                      <span className="font-mono text-slate-700">www.drroyslab.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours & Home Collection */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-3">
                <h4 className="font-slab font-bold text-sm text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#008000]" />
                  <span>Working Hours & Home Visits</span>
                </h4>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Sample Collection Timings</span>
                      <span>Monday – Saturday: 7:00 AM – 8:00 PM<br />Sunday: 7:00 AM – 2:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Doorstep Sample Collection</span>
                      <span>Available throughout Jamtara city. Fasting and non-fasting tests supported.</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab("tests")}
                className="text-xs font-semibold text-[#008000] hover:underline block mx-auto py-2 cursor-pointer"
              >
                ← Back to Test Pricing Directory
              </button>
            </div>
          )}
        </main>

        {/* Floating Home Collection CTA Bar (Deep Navy with Brand Green accent) */}
        <div className="fixed bottom-[56px] left-0 right-0 z-40 flex justify-center px-0 pointer-events-none">
          <div className="w-full max-w-md pointer-events-auto">
            <a
              href={`tel:${LAB_DATA.phone}`}
              className="block bg-[#0f172a] hover:bg-[#006400] text-white py-2.5 px-4 text-center shadow-lg border-t border-teal-600/40 transition-colors"
            >
              <p className="text-[12.5px] font-medium flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse" />
                <Phone className="w-3.5 h-3.5 text-[#3CB371]" />
                <span>For home collection, call <strong>+91 9934358189</strong></span>
              </p>
            </a>
          </div>
        </div>

        {/* 2-Tab Bottom Navigation Bar (Tests & Support only) */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-transparent pointer-events-none">
          <div className="w-full max-w-md bg-white border-t border-slate-200 px-6 py-2 flex justify-around items-center shadow-md pointer-events-auto">
            <button
              onClick={() => setActiveTab("tests")}
              className={`flex items-center justify-center gap-2 py-1.5 px-6 rounded-lg transition-all cursor-pointer active:scale-95 ${
                activeTab === "tests"
                  ? "bg-[#008000] text-white font-semibold shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <TestTube2 className="w-4 h-4" />
              <span className="text-xs">Tests</span>
            </button>

            <button
              onClick={() => setActiveTab("support")}
              className={`flex items-center justify-center gap-2 py-1.5 px-6 rounded-lg transition-all cursor-pointer active:scale-95 ${
                activeTab === "support"
                  ? "bg-[#008000] text-white font-semibold shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span className="text-xs">Support</span>
            </button>
          </div>
        </nav>

      </div>
    </div>
  );
}




