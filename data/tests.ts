export interface TestItem {
  id: string;
  name: string;
  unit: string;
  refRange: string;
  specimen: string;
  suggestedPrice: number;
}

export interface Category {
  categoryName: string;
  reportType: string;
  tests: TestItem[];
}

export interface LabPriceGuide {
  laboratory: string;
  currency: string;
  categories: Category[];
}

export const LAB_DATA: LabPriceGuide = {
  laboratory: "Dr. Roy's Laboratory",
  currency: "INR (₹)",
  categories: [
    {
      categoryName: "Hematology",
      reportType: "Blood Report",
      tests: [
        { id: "haemoglobin", name: "HAEMOGLOBIN", unit: "g/dL", refRange: "12.0 - 16.0", specimen: "Whole Blood (EDTA)", suggestedPrice: 120 },
        { id: "tcwbc", name: "TCWBC (Total Count WBC)", unit: "cells/cumm", refRange: "4000 - 11000", specimen: "Whole Blood (EDTA)", suggestedPrice: 150 },
        { id: "neutrophils", name: "NEUTROPHILS", unit: "%", refRange: "40 - 75", specimen: "Whole Blood (EDTA)", suggestedPrice: 100 },
        { id: "lymphocyte", name: "LYMPHOCYTE", unit: "%", refRange: "20 - 45", specimen: "Whole Blood (EDTA)", suggestedPrice: 100 },
        { id: "eosinophils", name: "EOSINOPHILS", unit: "%", refRange: "1 - 6", specimen: "Whole Blood (EDTA)", suggestedPrice: 100 },
        { id: "monocytes", name: "MONOCYTES", unit: "%", refRange: "2 - 10", specimen: "Whole Blood (EDTA)", suggestedPrice: 100 },
        { id: "basophils", name: "BASOPHILS", unit: "%", refRange: "0 - 1", specimen: "Whole Blood (EDTA)", suggestedPrice: 100 },
        { id: "esr", name: "ESR (WESTERGREN)", unit: "mm/hr", refRange: "0 - 20", specimen: "Whole Blood (Citrate)", suggestedPrice: 80 },
        { id: "platelets", name: "PLATELET COUNT", unit: "lakhs/cumm", refRange: "1.5 - 4.5", specimen: "Whole Blood (EDTA)", suggestedPrice: 150 },
        { id: "pcv", name: "PACKED CELL VOLUME (PCV)", unit: "%", refRange: "36 - 48", specimen: "Whole Blood (EDTA)", suggestedPrice: 120 },
        { id: "rbc_count", name: "RBC COUNT", unit: "millions/cumm", refRange: "3.8 - 5.8", specimen: "Whole Blood (EDTA)", suggestedPrice: 120 },
        { id: "cbc_panel", name: "COMPLETE BLOOD COUNT (CBC) PROFILE", unit: "Panel", refRange: "Multiple", specimen: "Whole Blood (EDTA)", suggestedPrice: 350 }
      ]
    },
    {
      categoryName: "Biochemistry & Diabetes",
      reportType: "Blood Report",
      tests: [
        { id: "glucose_f", name: "GLUCOSE (FASTING)", unit: "mg/dL", refRange: "70 - 100", specimen: "Fluoride Plasma", suggestedPrice: 70 },
        { id: "glucose_pp", name: "GLUCOSE (POST PRANDIAL - PP)", unit: "mg/dL", refRange: "70 - 140", specimen: "Fluoride Plasma", suggestedPrice: 70 },
        { id: "glucose_r", name: "GLUCOSE (RANDOM)", unit: "mg/dL", refRange: "70 - 140", specimen: "Fluoride Plasma", suggestedPrice: 70 },
        { id: "hba1c", name: "HBA1C (GLYCATED HEMOGLOBIN)", unit: "%", refRange: "4.0 - 5.6", specimen: "Whole Blood (EDTA)", suggestedPrice: 450 },
        { id: "urea", name: "BLOOD UREA", unit: "mg/dL", refRange: "15 - 45", specimen: "Serum", suggestedPrice: 150 },
        { id: "creatinine", name: "SERUM CREATININE", unit: "mg/dL", refRange: "0.6 - 1.2", specimen: "Serum", suggestedPrice: 150 },
        { id: "uric_acid", name: "URIC ACID", unit: "mg/dL", refRange: "2.4 - 6.0", specimen: "Serum", suggestedPrice: 180 }
      ]
    },
    {
      categoryName: "Lipid Profile",
      reportType: "Blood Report",
      tests: [
        { id: "cholesterol", name: "CHOLESTEROL (TOTAL)", unit: "mg/dL", refRange: "130 - 200", specimen: "Serum (12hr Fasting)", suggestedPrice: 150 },
        { id: "triglycerides", name: "TRIGLYCERIDES", unit: "mg/dL", refRange: "50 - 150", specimen: "Serum (12hr Fasting)", suggestedPrice: 200 },
        { id: "hdl", name: "HDL CHOLESTEROL", unit: "mg/dL", refRange: "35 - 60", specimen: "Serum (12hr Fasting)", suggestedPrice: 180 },
        { id: "ldl", name: "LDL CHOLESTEROL", unit: "mg/dL", refRange: "0 - 100", specimen: "Serum (12hr Fasting)", suggestedPrice: 180 },
        { id: "vldl", name: "VLDL CHOLESTEROL", unit: "mg/dL", refRange: "5 - 40", specimen: "Serum (12hr Fasting)", suggestedPrice: 150 },
        { id: "t_chol_hdl_ratio", name: "T. CHOL / HDL RATIO", unit: "ratio", refRange: "3.3 - 4.4", specimen: "Calculated", suggestedPrice: 50 },
        { id: "lipid_panel", name: "LIPID PROFILE (COMPLETE HEART PANEL)", unit: "Panel", refRange: "Multiple", specimen: "Serum (12hr Fasting)", suggestedPrice: 600 }
      ]
    },
    {
      categoryName: "Urine Routine Examination",
      reportType: "Urine Report",
      tests: [
        { id: "urine_routine_full", name: "URINE ROUTINE & MICROSCOPIC EXAMINATION", unit: "Panel", refRange: "Normal", specimen: "Clean Catch Urine", suggestedPrice: 150 },
        { id: "urine_quantity", name: "QUANTITY (VOLUME)", unit: "mL", refRange: "20 - 50", specimen: "Urine", suggestedPrice: 30 },
        { id: "urine_color", name: "COLOR", unit: "Visual", refRange: "Pale Yellow", specimen: "Urine", suggestedPrice: 30 },
        { id: "urine_turbidity", name: "TURBIDITY", unit: "Visual", refRange: "Clear / Transparent", specimen: "Urine", suggestedPrice: 30 },
        { id: "urine_sp_gravity", name: "SPECIFIC GRAVITY", unit: "g/mL", refRange: "1.005 - 1.030", specimen: "Urine", suggestedPrice: 40 },
        { id: "urine_ph", name: "REACTION (pH)", unit: "pH", refRange: "5.0 - 7.5", specimen: "Urine", suggestedPrice: 40 },
        { id: "urine_albumin", name: "ALBUMIN (PROTEIN)", unit: "Qualitative", refRange: "Nil / Negative", specimen: "Urine", suggestedPrice: 50 },
        { id: "urine_sugar", name: "SUGAR (GLUCOSE)", unit: "Qualitative", refRange: "Nil / Negative", specimen: "Urine", suggestedPrice: 50 },
        { id: "urine_bile_pigment", name: "BILE PIGMENT", unit: "Qualitative", refRange: "Negative", specimen: "Urine", suggestedPrice: 50 },
        { id: "urine_bile_salt", name: "BILE SALT", unit: "Qualitative", refRange: "Negative", specimen: "Urine", suggestedPrice: 50 },
        { id: "urine_obt", name: "OBT (OCCULT BLOOD TEST)", unit: "Qualitative", refRange: "Negative", specimen: "Urine", suggestedPrice: 60 },
        { id: "urine_ketones", name: "KETONE BODIES", unit: "Qualitative", refRange: "Negative", specimen: "Urine", suggestedPrice: 60 },
        { id: "urine_pus_cells", name: "PUS CELLS (LEUKOCYTES)", unit: "/HPF", refRange: "1 - 4", specimen: "Urine Sediment", suggestedPrice: 60 },
        { id: "urine_rbc", name: "RED BLOOD CELLS (RBC)", unit: "/HPF", refRange: "0 - 2", specimen: "Urine Sediment", suggestedPrice: 60 },
        { id: "urine_epithelial", "name": "EPITHELIAL CELLS", unit: "/HPF", refRange: "2 - 5", specimen: "Urine Sediment", suggestedPrice: 60 }
      ]
    },
    {
      categoryName: "Stool Examination",
      reportType: "Stool Report",
      tests: [
        { id: "stool_routine_full", name: "STOOL ROUTINE & PARASITOLOGY PANEL", unit: "Panel", refRange: "Normal", specimen: "Fresh Stool", suggestedPrice: 180 },
        { id: "stool_color", name: "COLOR", unit: "Visual", refRange: "Yellowish Brown", specimen: "Stool", suggestedPrice: 40 },
        { id: "stool_consistency", name: "CONSISTENCY", unit: "Visual", refRange: "Soft / Formed", specimen: "Stool", suggestedPrice: 40 },
        { id: "stool_ph", name: "REACTION (pH)", unit: "pH", refRange: "6.0 - 7.5", specimen: "Stool", suggestedPrice: 50 },
        { id: "stool_occult_blood", name: "OCCULT BLOOD TEST (OBT)", unit: "Qualitative", refRange: "Negative", specimen: "Stool", suggestedPrice: 120 },
        { id: "stool_reducing_substance", name: "REDUCING SUBSTANCE", unit: "%", refRange: "Nil (< 0.25%)", specimen: "Stool", suggestedPrice: 100 },
        { id: "stool_parasites", name: "OVA, CYSTS & PARASITES MICROSCOPY", unit: "Microscopic", refRange: "Not Seen", specimen: "Stool", suggestedPrice: 100 }
      ]
    },
    {
      categoryName: "Bacteriology & Culture",
      reportType: "Bacteriological Report",
      tests: [
        { id: "bac_culture_ast", name: "CULTURE & ANTIBIOTIC SENSITIVITY TEST (AST)", unit: "Panel", refRange: "Sterile / No Pathogen", specimen: "Swab / Sputum / Urine / Pus", suggestedPrice: 750 },
        { id: "bac_gram_stain", name: "GRAM STAIN EXAMINATION", unit: "Stain", refRange: "No organisms seen", specimen: "Direct Smear", suggestedPrice: 150 },
        { id: "bac_colony_count", name: "QUANTITATIVE COLONY COUNT", unit: "CFU/mL", refRange: "> 10^5 CFU/mL", specimen: "Culture", suggestedPrice: 250 }
      ]
    }
  ]
};
