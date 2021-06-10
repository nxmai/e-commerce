const products = [{
    name: "benazepril hydrochloride and hydrochlorothiazide",
    description: "Extirpation of Matter from Left Abdomen Bursa and Ligament, Percutaneous Endoscopic Approach",
    price: 90,
    imageUrl: "http://dummyimage.com/170x100.png/cc0000/ffffff",
    ingredients: "Bypass Innominate Artery to Right Upper Arm Artery with Nonautologous Tissue Substitute, Open Approach",
    category: "Lotensin HCT",
    brand: "Niaspan",
    countInStock: 2
  }, {
    name: "White Petrolatum",
    description: "Restriction of Right Upper Lobe Bronchus with Extraluminal Device, Percutaneous Approach",
    price: 70,
    imageUrl: "http://dummyimage.com/178x100.png/cc0000/ffffff",
    ingredients: "Reposition Left Upper Eyelid, Percutaneous Approach",
    category: "Petrolatum",
    brand: "Health Mart infants pain and fever",
    countInStock: 60
  }, {
    name: "Fentanyl Citrate, Bupivacaine HCl",
    description: "Change Pressure Dressing on Right Inguinal Region",
    price: 72,
    imageUrl: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    ingredients: "Removal of Splint on Right Foot",
    category: "Fentanyl Citrate, Bupivacaine HCl",
    brand: "Honeydew Melon",
    countInStock: 55
  }, {
    name: "Glimepiride",
    description: "Reattachment of Left Thorax Bursa and Ligament, Percutaneous Endoscopic Approach",
    price: 89,
    imageUrl: "http://dummyimage.com/214x100.png/dddddd/000000",
    ingredients: "Repair Left Palatine Bone, Percutaneous Endoscopic Approach",
    category: "Glimepiride",
    brand: "Blemish Toner",
    countInStock: 18
  }, {
    name: "Horse Epithelium",
    description: "Replacement of Upper Lip with Nonautologous Tissue Substitute, Percutaneous Approach",
    price: 87,
    imageUrl: "http://dummyimage.com/162x100.png/dddddd/000000",
    ingredients: "Supplement Right Greater Saphenous Vein with Synthetic Substitute, Percutaneous Approach",
    category: "Horse Epithelium",
    brand: "LBel",
    countInStock: 66
  }, {
    name: "Loratadine, Pseudoephedrine",
    description: "Removal of Infusion Device from Spleen, Open Approach",
    price: 74,
    imageUrl: "http://dummyimage.com/148x100.png/cc0000/ffffff",
    ingredients: "Supplement Lower Artery with Autologous Tissue Substitute, Percutaneous Approach",
    category: "Wal itin D",
    brand: "PediaCare Infants Gas Relief Dye Free",
    countInStock: 53
  }, {
    name: "Pyrithione Zinc",
    description: "Excision of Chest Wall, Open Approach, Diagnostic",
    price: 59,
    imageUrl: "http://dummyimage.com/227x100.png/5fa2dd/ffffff",
    ingredients: "Alteration of Chest Wall with Synthetic Substitute, Open Approach",
    category: "Head and Shoulders",
    brand: "Good Sense anti diarrheal",
    countInStock: 92
  }, {
    name: "Clonazepam",
    description: "Revision of Autologous Tissue Substitute in Thoracic Vertebral Disc, Percutaneous Approach",
    price: 13,
    imageUrl: "http://dummyimage.com/221x100.png/ff4444/ffffff",
    ingredients: "Release Left Lacrimal Duct, Percutaneous Approach",
    category: "Clonazepam",
    brand: "antacid",
    countInStock: 22
  }, {
    name: "Fentanyl Citrate, Bupivacaine HCl",
    description: "Bypass Pancreatic Duct to Large Intestine with Intraluminal Device, Percutaneous Endoscopic Approach",
    price: 49,
    imageUrl: "http://dummyimage.com/164x100.png/dddddd/000000",
    ingredients: "Inspection of Right Tarsal Joint, Open Approach",
    category: "Fentanyl Citrate, Bupivacaine HCl",
    brand: "rexall bismuth",
    countInStock: 88
  }, {
    name: "emtricitabine and tenofovir disoproxil fumarate",
    description: "Occlusion of Esophageal Vein, Percutaneous Approach",
    price: 38,
    imageUrl: "http://dummyimage.com/158x100.png/ff4444/ffffff",
    ingredients: "Excision of Left Kidney Pelvis, Via Natural or Artificial Opening",
    category: "Truvada",
    brand: "Levofloxacin",
    countInStock: 88
  }, {
    name: "Promethazine HCl",
    description: "Plain Radiography of Cerebral and Cerebellar Veins using Low Osmolar Contrast",
    price: 34,
    imageUrl: "http://dummyimage.com/220x100.png/cc0000/ffffff",
    ingredients: "Drainage of Right Ulna, Percutaneous Approach",
    category: "Promethazine HCl",
    brand: "Bang Er Jie High-Efficiency Anti-Bacteria Monomer Silver -Lotion for Women",
    countInStock: 79
  }, {
    name: "AVOBENZONE, HOMOSALTE, OCTISALATE, OCTOCRYLENE",
    description: "Drainage of Bilateral Seminal Vesicles with Drainage Device, Percutaneous Approach",
    price: 40,
    imageUrl: "http://dummyimage.com/179x100.png/cc0000/ffffff",
    ingredients: "Drainage of Left Hip Joint, Percutaneous Approach",
    category: "SUNLEYA Age minimizing sun care",
    brand: "Cosmeceutical Mask Pack",
    countInStock: 3
  }, {
    name: "Avobenzone, Homosalate, Octisalate and Octocrylene",
    description: "Insertion of Tissue Expander into Anterior Neck Subcutaneous Tissue and Fascia, Percutaneous Approach",
    price: 50,
    imageUrl: "http://dummyimage.com/184x100.png/dddddd/000000",
    ingredients: "Bypass Left Hepatic Duct to Duodenum with Intraluminal Device, Open Approach",
    category: "LOreal Paris Men Expert Comfort Max Hydra Energetic After Shave Balm Broad Spectrum SPF 15 Sunscreen",
    brand: "Refresh Tears Lubricant",
    countInStock: 27
  }, {
    name: "furosemide",
    description: "Extirpation of Matter from Thymus, Percutaneous Approach",
    price: 58,
    imageUrl: "http://dummyimage.com/121x100.png/cc0000/ffffff",
    ingredients: "Plain Radiography of Aorta and Bilateral Lower Extremity Arteries using Low Osmolar Contrast",
    category: "Furosemide",
    brand: "Lisinopril",
    countInStock: 80
  }, {
    name: "Ketotifen Fumarate",
    description: "Gait Training/Functional Ambulation Treatment using Other Equipment",
    price: 9,
    imageUrl: "http://dummyimage.com/104x100.png/cc0000/ffffff",
    ingredients: "Removal of Extraluminal Device from Epididymis and Spermatic Cord, Via Natural or Artificial Opening",
    category: "eye itch relief",
    brand: "Fosinopril Sodium",
    countInStock: 49
  }, {
    name: "Dextromethorphan HBr",
    description: "Fusion of Cervical Vertebral Joint with Nonautologous Tissue Substitute, Anterior Approach, Anterior Column, Percutaneous Approach",
    price: 19,
    imageUrl: "http://dummyimage.com/152x100.png/cc0000/ffffff",
    ingredients: "Plain Radiography of Bilateral Kidneys using Other Contrast",
    category: "PediaCare LongActing Cough",
    brand: "Complexion Perfector BB SPF20 Medium",
    countInStock: 84
  }, {
    name: "METOPROLOL SUCCINATE",
    description: "Drainage of Appendix, Percutaneous Endoscopic Approach, Diagnostic",
    price: 14,
    imageUrl: "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
    ingredients: "Supplement Vagina with Autologous Tissue Substitute, Open Approach",
    category: "METOPROLOL SUCCINATE",
    brand: "Otoflam HP",
    countInStock: 49
  }, {
    name: "Fexofenadine",
    description: "Ear, Nose, Sinus, Drainage",
    price: 53,
    imageUrl: "http://dummyimage.com/136x100.png/dddddd/000000",
    ingredients: "Fragmentation in Left Parotid Duct, Open Approach",
    category: "Fexofenadine",
    brand: "Dexamethasone",
    countInStock: 6
  }, {
    name: "California Mugwort",
    description: "Repair Left Lower Leg, Percutaneous Approach",
    price: 98,
    imageUrl: "http://dummyimage.com/181x100.png/dddddd/000000",
    ingredients: "Inspection of Left Elbow Region, Open Approach",
    category: "California Mugwort",
    brand: "Sulwhasoo Lumitouch Foundation",
    countInStock: 42
  }, {
    name: "Diphenhydramine Hydrochloride",
    description: "Magnetic Resonance Imaging (MRI) of Upper Extremity Tendons",
    price: 47,
    imageUrl: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    ingredients: "Bypass Left Internal Iliac Artery to Left Internal Iliac Artery with Synthetic Substitute, Percutaneous Endoscopic Approach",
    category: "equate allergy relief",
    brand: "Burkhart",
    countInStock: 73
  }, {
    name: "Ascorbic Acid",
    description: "Dilation of Right Colic Artery with Drug-eluting Intraluminal Device, Percutaneous Approach",
    price: 35,
    imageUrl: "http://dummyimage.com/180x100.png/cc0000/ffffff",
    ingredients: "Revision of External Fixation Device in Right Carpal Joint, Open Approach",
    category: "MEGA-C-ACID",
    brand: "Diltiazem Hydrochloride",
    countInStock: 26
  }, {
    name: "Nickel Sulfate, Potassium Bromide, Sodium Bromide, Zinc Sulfate Anhydrous, and Sulfur",
    description: "Occlusion of Left External Jugular Vein with Intraluminal Device, Percutaneous Endoscopic Approach",
    price: 17,
    imageUrl: "http://dummyimage.com/221x100.png/dddddd/000000",
    ingredients: "Drainage of Female Perineum with Drainage Device, Percutaneous Endoscopic Approach",
    category: "Acunol",
    brand: "ACETAMINOPHEN AND CODEINE",
    countInStock: 8
  }, {
    name: "DEXTROSE and SODIUM CHLORIDE",
    description: "Revision of Nonautologous Tissue Substitute in Nose, External Approach",
    price: 88,
    imageUrl: "http://dummyimage.com/122x100.png/cc0000/ffffff",
    ingredients: "Introduction of Monoclonal Antibody into Peripheral Vein, Open Approach",
    category: "Dextrose And Sodium Chloride",
    brand: "Lisinopril",
    countInStock: 33
  }, {
    name: "Allscale",
    description: "Extirpation of Matter from Left Upper Lung Lobe, Percutaneous Endoscopic Approach",
    price: 27,
    imageUrl: "http://dummyimage.com/125x100.png/dddddd/000000",
    ingredients: "Drainage of Left Seminal Vesicle with Drainage Device, Open Approach",
    category: "Allscale",
    brand: "Triamcinolone Acetonide",
    countInStock: 58
  }, {
    name: "FLUDARABINE PHOSPHATE",
    description: "Reattachment of Right Adrenal Gland, Open Approach",
    price: 52,
    imageUrl: "http://dummyimage.com/147x100.png/dddddd/000000",
    ingredients: "Insertion of Other Device into Left Elbow Region, Percutaneous Approach",
    category: "Fludarabine",
    brand: "bareMinerals bareSkin Pure Brightening Serum Foundation Broad Spectrum SPF 20",
    countInStock: 18
  }, {
    name: "BENZOYL PEROXIDE",
    description: "Removal of Infusion Device from Peritoneal Cavity, Percutaneous Approach",
    price: 92,
    imageUrl: "http://dummyimage.com/125x100.png/ff4444/ffffff",
    ingredients: "Removal of Nonautologous Tissue Substitute from Left Upper Femur, Percutaneous Endoscopic Approach",
    category: "Benzoyl peroxide emollient",
    brand: "Metoprolol tartrate",
    countInStock: 83
  }, {
    name: "Guaifenesin",
    description: "Repair Right Finger Phalanx, Percutaneous Endoscopic Approach",
    price: 85,
    imageUrl: "http://dummyimage.com/207x100.png/ff4444/ffffff",
    ingredients: "Revision of Drainage Device in Right Tarsal Joint, External Approach",
    category: "Equaline Mucus ER",
    brand: "GNP Caldyphen",
    countInStock: 95
  }, {
    name: "Western Ragweed",
    description: "Removal of Drainage Device from Epididymis and Spermatic Cord, Via Natural or Artificial Opening Endoscopic",
    price: 23,
    imageUrl: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
    ingredients: "Repair Left Palatine Bone, Percutaneous Endoscopic Approach",
    category: "AMBROSIA PSILOSTACHYA POLLEN",
    brand: "Cefepime",
    countInStock: 30
  }, {
    name: "Sertraline Hydrochloride",
    description: "Dilation of Right Hand Artery, Bifurcation, with Intraluminal Device, Percutaneous Approach",
    price: 11,
    imageUrl: "http://dummyimage.com/146x100.png/dddddd/000000",
    ingredients: "Division of Right Sphenoid Bone, Open Approach",
    category: "Sertraline Hydrochloride",
    brand: "ULTRACET",
    countInStock: 74
  }, {
    name: "Loperamide HCl",
    description: "Supplement Bladder with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
    price: 70,
    imageUrl: "http://dummyimage.com/246x100.png/cc0000/ffffff",
    ingredients: "Drainage of Right Upper Lobe Bronchus with Drainage Device, Percutaneous Approach",
    category: "Anti Diarrheal",
    brand: "Bacitracin Zinc",
    countInStock: 97
  }, {
    name: "Levetiracetam",
    description: "Resection of Thyroid Gland, Open Approach",
    price: 85,
    imageUrl: "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
    ingredients: "Supplement Scrotum with Autologous Tissue Substitute, Open Approach",
    category: "Levetiracetam",
    brand: "Best Choice Nighttime Severe Cold and Cough",
    countInStock: 16
  }, {
    name: "Naproxen Sodium",
    description: "Alteration of Left Lower Eyelid with Autologous Tissue Substitute, External Approach",
    price: 70,
    imageUrl: "http://dummyimage.com/112x100.png/dddddd/000000",
    ingredients: "Bypass Abdominal Aorta to Right Internal Iliac Artery with Synthetic Substitute, Open Approach",
    category: "all day relief",
    brand: "Topcare Nite Time Day Time",
    countInStock: 1
  }, {
    name: "Bipolaris sorokiniana",
    description: "Inspection of Pituitary Gland, Percutaneous Approach",
    price: 84,
    imageUrl: "http://dummyimage.com/184x100.png/5fa2dd/ffffff",
    ingredients: "Supplement Right Upper Eyelid with Autologous Tissue Substitute, External Approach",
    category: "Bipolaris sorokiniana",
    brand: "Hot Spot",
    countInStock: 79
  }, {
    name: "Isosorbide mononitrate",
    description: "Drainage of Right Femoral Vein, Percutaneous Approach, Diagnostic",
    price: 15,
    imageUrl: "http://dummyimage.com/145x100.png/ff4444/ffffff",
    ingredients: "Replacement of Right Internal Iliac Artery with Autologous Tissue Substitute, Open Approach",
    category: "Isosorbide",
    brand: "Pro Hands Antiseptic Hand",
    countInStock: 80
  }, {
    name: "TITANIUM DIOXIDE",
    description: "Alteration of Bilateral Breast with Nonautologous Tissue Substitute, Percutaneous Approach",
    price: 27,
    imageUrl: "http://dummyimage.com/114x100.png/ff4444/ffffff",
    ingredients: "Removal of External Fixation Device from Left Finger Phalangeal Joint, Percutaneous Approach",
    category: "CLARINS Skin Illusion SPF 10 Natural Radiance Foundation Tint 103",
    brand: "Simponi",
    countInStock: 85
  }, {
    name: "DOCUSATE SODIUM",
    description: "Stereotactic Particulate Radiosurgery of Mediastinum",
    price: 74,
    imageUrl: "http://dummyimage.com/178x100.png/dddddd/000000",
    ingredients: "Resection of Left Hepatic Duct, Via Natural or Artificial Opening Endoscopic",
    category: "Stool Softener",
    brand: "TYLO",
    countInStock: 86
  }, {
    name: "Avobenzone Octisalate Octocrylene",
    description: "Computerized Tomography (CT Scan) of Bladder using High Osmolar Contrast, Unenhanced and Enhanced",
    price: 71,
    imageUrl: "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
    ingredients: "Supplement Left Metatarsal-Phalangeal Joint with Nonautologous Tissue Substitute, Percutaneous Approach",
    category: "Lancome Paris Renergie Lift Volumetry",
    brand: "Tendon Rescue",
    countInStock: 42
  }, {
    name: "Chloroxylenol",
    description: "Insertion of Infusion Device into Right Cephalic Vein, Percutaneous Approach",
    price: 60,
    imageUrl: "http://dummyimage.com/169x100.png/dddddd/000000",
    ingredients: "Dilation of Right Subclavian Artery with Intraluminal Device, Open Approach",
    category: "SunDrops 67",
    brand: "Oracit",
    countInStock: 41
  }, {
    name: "Hydrogen Peroxide",
    description: "Supplement Right Breast with Autologous Tissue Substitute, Open Approach",
    price: 34,
    imageUrl: "http://dummyimage.com/207x100.png/ff4444/ffffff",
    ingredients: "Drainage of Left Tunica Vaginalis, Percutaneous Endoscopic Approach, Diagnostic",
    category: "Hydrogen Peroxide",
    brand: "Clonidine Hydrochloride",
    countInStock: 13
  }, {
    name: "Rescue",
    description: "Insertion of Intramedullary Internal Fixation Device into Left Upper Femur, Percutaneous Endoscopic Approach",
    price: 79,
    imageUrl: "http://dummyimage.com/220x100.png/5fa2dd/ffffff",
    ingredients: "Dilation of Right Popliteal Artery with Intraluminal Device, using Drug-Coated Balloon, Open Approach",
    category: "Bio Res Q",
    brand: "Magnesium Citrate",
    countInStock: 80
  }]

  const category = [{
    name: "Body care"
  }, {
    name: "Face care"
  }, {
    name: "Hair care"
  }]

  const brand = [{
    name: "Laroche Posay"
  }, {
    name: "Vichy"
  }, {
    name: "The Ordinary"
  }, {
    name: "Lucenbase"
  }]

  module.exports = {
    products,
    category,
    brand
  }