"use client";

import React, { useState, useMemo } from "react";
import {
  FlaskConical,
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
  Sparkles,
  Info,
} from "lucide-react";
import { LAB_DATA, Category, TestItem } from "@/data/tests";

// Map category names to icons and theme accents
function getCategoryIcon(name: string) {
  switch (name) {
    case "Hematology":
      return Droplets;
    case "Biochemistry & Diabetes":
      return FlaskConical;
    case "Lipid Profile":
      return HeartPulse;
    case "Urine Routine Examination":
      return TestTube2;
    case "Stool Examination":
      return Microscope;
    case "Bacteriology & Culture":
      return Dna;
    default:
      return Layers;
  }
}

export default function PricingGuidePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"tests" | "support">("tests");
  const [expandedTestId, setExpandedTestId] = useState<string | null>(null);

  // Total test count across all categories
  const totalTestCount = useMemo(() => {
    return LAB_DATA.categories.reduce((acc, cat) => acc + cat.tests.length, 0);
  }, []);

  // Filter categories and tests based on query and filter chip
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
    <div className="min-h-screen bg-[#f8f9fb] flex justify-center selection:bg-[#0052cc] selection:text-white">
      {/* Mobile container centered on larger screens */}
      <div className="w-full max-w-md min-h-screen bg-[#f8f9fb] text-[#191c1e] pb-36 flex flex-col relative shadow-xl border-x border-[#e7e8ea]/60">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#f8f9fb]/95 backdrop-blur-md px-4 pt-3.5 pb-2.5 border-b border-[#e7e8ea]/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-2.5">
            <div className="w-9 h-9 rounded-full bg-[#dae2ff] flex items-center justify-center text-[#003d9b] shadow-xs">
              <FlaskConical className="w-5 h-5" strokeWidth={2.2} />
            </div>

            <div className="text-center">
              <h1 className="text-[19px] font-bold tracking-tight text-[#003d9b] leading-tight">
                DR. ROY&apos;S LABORATORY
              </h1>
              <p className="text-[11px] font-medium text-[#434654] tracking-wide">
                Test Pricing & Diagnostic Guide
              </p>
            </div>

            <button
              onClick={() => {
                if (activeTab !== "tests") setActiveTab("tests");
                const searchInput = document.getElementById("test-search-input");
                searchInput?.focus();
              }}
              aria-label="Focus search"
              className="w-9 h-9 rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#003d9b] hover:bg-[#e7e8ea] active:scale-95 transition-all"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737685]" />
            <input
              id="test-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                if (activeTab !== "tests") setActiveTab("tests");
                setSearchQuery(e.target.value);
              }}
              placeholder="Search tests, CBC, Sugar, Lipid, Urine..."
              className="w-full bg-[#f3f4f6] border border-[#c3c6d6] text-[#191c1e] placeholder-[#737685] rounded-full py-2 pl-10 pr-9 text-sm focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc]/20 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737685] hover:text-[#191c1e] p-0.5 rounded-full hover:bg-[#e1e2e4]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          {activeTab === "tests" && (
            <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto no-scrollbar pb-1">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`text-[11px] px-3 py-1 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === "all"
                    ? "bg-[#003d9b] text-white shadow-xs"
                    : "bg-white text-[#434654] border border-[#c3c6d6] hover:bg-[#f3f4f6]"
                }`}
              >
                All ({totalTestCount})
              </button>
              {LAB_DATA.categories.map((cat) => (
                <button
                  key={cat.categoryName}
                  onClick={() => setSelectedCategory(cat.categoryName)}
                  className={`text-[11px] px-3 py-1 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat.categoryName
                      ? "bg-[#003d9b] text-white shadow-xs"
                      : "bg-white text-[#434654] border border-[#c3c6d6] hover:bg-[#f3f4f6]"
                  }`}
                >
                  {cat.categoryName} ({cat.tests.length})
                </button>
              ))}
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 py-3.5 space-y-3.5">
          {activeTab === "tests" ? (
            <>
              {/* Search results summary count when searching */}
              {searchQuery && (
                <div className="flex justify-between items-center text-xs text-[#434654] px-1">
                  <span>
                    Found <strong>{totalMatchingTests}</strong> {totalMatchingTests === 1 ? "test" : "tests"}
                  </span>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-[#0052cc] hover:underline font-medium"
                  >
                    Clear search
                  </button>
                </div>
              )}

              {/* Category Sections */}
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => {
                  const Icon = getCategoryIcon(category.categoryName);
                  return (
                    <section
                      key={category.categoryName}
                      className="bg-white rounded-xl p-3.5 shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border-l-4 border-[#0c56d0] border-y border-r border-[#e7e8ea]/70 transition-all hover:shadow-[0px_6px_16px_rgba(0,0,0,0.08)]"
                    >
                      {/* Section Header */}
                      <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#f3f4f6]">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-[#dae2ff]/60 flex items-center justify-center text-[#003d9b]">
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <div>
                            <h2 className="text-[15px] font-semibold text-[#191c1e] leading-tight">
                              {category.categoryName}
                            </h2>
                            <span className="text-[10px] text-[#737685] font-medium">
                              {category.reportType}
                            </span>
                          </div>
                        </div>

                        <span className="text-[11px] font-medium text-[#434654] bg-[#f3f4f6] px-2 py-0.5 rounded-full">
                          {category.tests.length} tests
                        </span>
                      </div>

                      {/* Test Item List */}
                      <div className="divide-y divide-[#f3f4f6]">
                        {category.tests.map((test) => {
                          const isExpanded = expandedTestId === test.id;
                          const isPanel = test.unit === "Panel";

                          return (
                            <div
                              key={test.id}
                              onClick={() => toggleExpand(test.id)}
                              className={`py-2.5 px-1.5 rounded-lg cursor-pointer transition-colors ${
                                isExpanded ? "bg-[#f8f9fb]" : "hover:bg-[#f8f9fb]/70"
                              }`}
                            >
                              <div className="flex justify-between items-center gap-2">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="text-[13.5px] font-medium text-[#191c1e] leading-snug">
                                      {test.name}
                                    </span>
                                    {isPanel && (
                                      <span className="bg-[#6ae1ff]/20 text-[#00687a] border border-[#00687a]/20 text-[9.5px] font-bold px-1.5 py-0.2 rounded">
                                        PACKAGE
                                      </span>
                                    )}
                                  </div>

                                  {/* Compact specimen tag */}
                                  <p className="text-[11px] text-[#737685] mt-0.5 truncate">
                                    {test.specimen}
                                  </p>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="bg-[#0052cc] text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-xs tracking-wide">
                                    ₹{test.suggestedPrice}
                                  </span>
                                  <button
                                    aria-label="Toggle details"
                                    className="text-[#737685] p-0.5"
                                  >
                                    {isExpanded ? (
                                      <ChevronUp className="w-3.5 h-3.5" />
                                    ) : (
                                      <ChevronDown className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                </div>
                              </div>

                              {/* Expandable test detail sheet */}
                              {isExpanded && (
                                <div className="mt-2.5 pt-2 border-t border-[#e7e8ea] text-xs space-y-1.5 text-[#434654] bg-white p-2.5 rounded-md shadow-xs">
                                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                                    <div>
                                      <span className="text-[#737685] block font-medium">Normal Ref Range</span>
                                      <span className="font-semibold text-[#191c1e]">{test.refRange}</span>
                                    </div>
                                    <div>
                                      <span className="text-[#737685] block font-medium">Unit of Measure</span>
                                      <span className="font-semibold text-[#191c1e]">{test.unit}</span>
                                    </div>
                                  </div>
                                  <div className="text-[11px] pt-1 border-t border-[#f3f4f6] flex justify-between items-center text-[#737685]">
                                    <span>Specimen: <strong className="text-[#191c1e]">{test.specimen}</strong></span>
                                    <a
                                      href="tel:+919934358189"
                                      onClick={(e) => e.stopPropagation()}
                                      className="text-[#0052cc] font-semibold hover:underline"
                                    >
                                      Book test →
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
                <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-[#e7e8ea] space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#dae2ff] text-[#003d9b] flex items-center justify-center mx-auto">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-base text-[#191c1e]">No matching tests found</h3>
                  <p className="text-xs text-[#737685] max-w-xs mx-auto">
                    We couldn&apos;t find any tests matching &ldquo;{searchQuery}&rdquo;. Call our lab helpline for custom diagnostic tests and queries.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="inline-block text-xs font-semibold text-[#0052cc] hover:underline pt-1"
                  >
                    View all 48 diagnostic tests
                  </button>
                </div>
              )}

              {/* Quality Standards Badge */}
              <div className="bg-[#edeef0]/60 rounded-lg p-3 text-center text-xs text-[#434654] flex items-center justify-center gap-1.5 border border-[#e1e2e4]">
                <CheckCircle2 className="w-4 h-4 text-[#006844] shrink-0" />
                <span>NABL Quality Standards & Standardized Diagnostic Reporting</span>
              </div>
            </>
          ) : (
            /* Support Tab Content */
            <div className="space-y-3.5">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e7e8ea] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#dae2ff] text-[#003d9b] flex items-center justify-center mx-auto">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#191c1e]">
                    Lab Helpdesk & Inquiries
                  </h3>
                  <p className="text-xs text-[#737685] mt-1 max-w-xs mx-auto">
                    Contact Dr. Roy&apos;s Laboratory directly for home collection bookings, fasting preparation instructions, and digital reports.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+919934358189"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#00687a] hover:bg-[#005564] text-white rounded-full text-sm font-semibold shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Lab: +91 9934358189
                  </a>
                </div>
              </div>

              {/* Laboratory Operations Info Card */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e7e8ea] space-y-3">
                <h4 className="text-sm font-semibold text-[#191c1e] border-b border-[#f3f4f6] pb-2">
                  Laboratory Information
                </h4>
                
                <div className="flex items-start gap-3 text-xs text-[#434654]">
                  <Clock className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#191c1e] block">Sample Collection Hours</span>
                    <span>Monday – Saturday: 7:00 AM – 8:00 PM<br />Sunday: 7:00 AM – 2:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#434654]">
                  <ShieldCheck className="w-4 h-4 text-[#006844] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#191c1e] block">Home Sample Collection</span>
                    <span>Certified phlebotomists available for doorstep sample collection across city limits.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#434654]">
                  <Sparkles className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#191c1e] block">Digital Reports Delivery</span>
                    <span>Receive test reports on WhatsApp & Email within standard turnaround times.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab("tests")}
                className="text-xs font-semibold text-[#0052cc] hover:underline block mx-auto py-2"
              >
                ← Back to Test Pricing Guide
              </button>
            </div>
          )}
        </main>

        {/* Floating Home Collection CTA Bar */}
        <div className="fixed bottom-[58px] left-0 right-0 z-40 flex justify-center px-0 pointer-events-none">
          <div className="w-full max-w-md pointer-events-auto">
            <a
              href="tel:+919934358189"
              className="block bg-[#00687a] hover:bg-[#005766] active:bg-[#004754] text-white py-2.5 px-4 text-center shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-colors"
            >
              <p className="text-[13px] font-medium flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-white" />
                <span>For home collection, call <strong>+91 9934358189</strong></span>
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Navigation Bar (Tests & Support only) */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-transparent pointer-events-none">
          <div className="w-full max-w-md bg-[#edeef0] border-t border-[#e1e2e4] px-6 py-2 flex justify-around items-center shadow-[0px_-4px_12px_rgba(0,0,0,0.05)] pointer-events-auto">
            <button
              onClick={() => setActiveTab("tests")}
              className={`flex items-center justify-center gap-2 py-1.5 px-6 rounded-full transition-all active:scale-95 ${
                activeTab === "tests"
                  ? "bg-[#0052cc] text-white font-medium shadow-xs"
                  : "text-[#434654] hover:bg-[#e1e2e4]"
              }`}
            >
              <TestTube2 className="w-4 h-4" />
              <span className="text-xs font-semibold">Tests</span>
            </button>

            <button
              onClick={() => setActiveTab("support")}
              className={`flex items-center justify-center gap-2 py-1.5 px-6 rounded-full transition-all active:scale-95 ${
                activeTab === "support"
                  ? "bg-[#0052cc] text-white font-medium shadow-xs"
                  : "text-[#434654] hover:bg-[#e1e2e4]"
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span className="text-xs font-semibold">Support</span>
            </button>
          </div>
        </nav>

      </div>
    </div>
  );
}



