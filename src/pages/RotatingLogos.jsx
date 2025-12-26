import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpg";
import img2 from "../assets/tracks/img2.jpg"
import img3  from "../assets/tracks/img3.jpg";
import img4 from "../assets/tracks/img4.jpg";
import img5 from "../assets/tracks/img5.webp";
import img6 from "../assets/tracks/img6.png"
import img7 from "../assets/tracks/img7.jpeg";
import img8 from "../assets/tracks/img8.jpg"
import img9 from "../assets/tracks/img9.jpeg";
import img10 from "../assets/tracks/img10.png"
import img11 from "../assets/tracks/img11.webp";
import img12 from "../assets/tracks/img12.jpg"
import img13 from "../assets/tracks/img13.jpg";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.jpg";
import img16 from "../assets/tracks/img16.png"
import img17 from "../assets/tracks/img17.png"
import img18 from "../assets/tracks/img18.webp";
import img19 from "../assets/tracks/img19.jpg"
import img20 from "../assets/tracks/img20.jpeg"

export const tracks = [
  {
    image: img1,
    title: "AI in in Digital Pathology",
    description: (
      <>
{" "}
        <Link
          to= "/contact"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Artificial intelligence
        </Link> enhances digital pathology by automating image analysis, improving diagnostic accuracy, and accelerating workflows. Machine learning algorithms detect patterns, quantify biomarkers, and predict disease progression. Integration with digital slide platforms allows remote consultation, enabling pathologists to deliver faster, consistent, and precise results while advancing research and personalized medicine applications.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Molecular Pathology",
    description: (
      <>
        {" "}
        <Link
          to="/digi-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         Molecular pathology 
        </Link>{" "} focuses on analyzing DNA, RNA, and proteins to diagnose disease at the molecular level. Techniques like PCR, sequencing, and gene expression profiling identify genetic mutations and biomarkers. This field supports targeted therapies, personalized medicine, and cancer detection. Molecular pathology bridges laboratory science and clinical practice, enabling precision diagnostics and improved patient outcomes.
       
      </>
    ),
  },

  {
    image:  img3,
    title: "Cancer Diagnosis",
    description: (
      <>
      This track delves intoThis track delves into{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Cancer diagnosis 
        </Link> involves identifying malignant transformations using histopathology, molecular markers, imaging, and cytology. Early detection relies on screening, biomarkers, and genomic profiling. Multimodal approaches enhance accuracy, guiding personalized therapy selection. Pathologists integrate clinical and laboratory data to stage disease, monitor progression, and predict prognosis, supporting effective management and improving survival rates worldwide.
      </>
    ),
  },

  {
    image: img4 ,
    title: "Telepathology & Remote Diagnostics",
    description: (
      <>
      Telepathology enables remote evaluation of pathology slides using digital imaging and network connectivity. Pathologists can consult globally, provide second opinions, and facilitate timely diagnoses.  {" "}
        <Link
          to="/about-digipath-conclave" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Remote diagnostics 
        </Link>{" "} improve access in underserved regions, reduce delays, and enhance collaboration. Integration with AI and cloud platforms increases efficiency, accuracy, and scalability in modern pathology services.
       
      </>
    ),
  },

  {
    image: img5,
    title: "Pediatric Pathology",
    description: (
      <>
  {" "}
        <Link
          to="/digi-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Pediatric pathology 
        </Link>{" "} studies diseases affecting children, from congenital disorders to cancers. It focuses on age-specific physiology, genetic conditions, and developmental anomalies. Diagnostic techniques include histopathology, molecular testing, and imaging. Pediatric pathologists guide treatment decisions, monitor disease progression, and support research, ensuring tailored care, early intervention, and improved long-term health outcomes for young patients.

      </>
    ),
  },

  {
    image: img6,
    title: "Medical Imaging",
    description: (
      <>

        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Medical imaging
        </Link>{" "} visualizes internal anatomy and pathology using modalities such as MRI, CT, PET, and ultrasound. It aids diagnosis, guides interventions, and monitors disease progression. Integration with AI enhances detection and quantification. Imaging provides non-invasive insight into structural and functional abnormalities, supporting precision medicine, surgical planning, and improved patient care across multiple clinical specialties.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Cardiovascular Pathology",
    description: (
      <>
{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Cardiovascular pathology 
        </Link>{" "} studies heart and vascular diseases, including congenital, inflammatory, and ischemic conditions. Examination of tissues, autopsies, and molecular testing reveal structural and functional abnormalities. Insights into atherosclerosis, cardiomyopathies, and vascular disorders guide treatment strategies. This field integrates clinical data, imaging, and laboratory analysis to improve cardiovascular disease prevention, diagnosis, and management.

      </>
    ),
  },

  {
    image:  img8,
    title: "Computational Pathology",
    description: (
      <>
       Computational pathology applies algorithms, AI, and big data analytics to interpret pathology images and datasets. It enables automated quantification, pattern recognition, and predictive modeling. Integration with digital slides, genomics, and clinical information enhances accuracy and reproducibility. {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Computational pathology 
        </Link>{" "} transforms diagnostics, research, and education, supporting precision medicine and accelerating discovery in complex disease analysis.
      </>
    ),
  },

  {
    image:  img9,
    title: "Dermatopathology",
    description: (
      <>
       Dermatopathology examines skin diseases at the microscopic and molecular level. Pathologists diagnose inflammatory, infectious, and neoplastic skin conditions using histology, immunohistochemistry, and molecular testing. Integration with clinical data guides treatment. Dermatopathology advances understanding of skin disorders, supports targeted therapy, and contributes to research, education, and improved patient care across{" "}
        <Link
          to="/about-digipath-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      dermatology and pathology
        </Link>{" "}  fields.

      </>
    ),
  },

  {
    image: img10,
    title: "Gastrointestinal",
    description: (
      <>
 Gastrointestinal pathology focuses on diseases of the digestive tract, including the esophagus, stomach, intestines, liver, and pancreas. Techniques include histology, molecular analysis, and endoscopic biopsies. Pathologists diagnose cancers, inflammatory disorders, and infections, guiding therapy. Advanced diagnostics, including AI-assisted imaging, enhance accuracy, supporting personalized treatment plans and improved patient outcomes in {" "}
        <Link
          to="/digi-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       gastrointestinal medicine.
        </Link>{" "}
 
      </>
    ),
  },

  {
    image: img11,
    title: "Immunopathology",
    description: (
      <>
      Immunopathology studies immune system dysfunction in diseases, including autoimmune disorders, immunodeficiencies, and transplant rejection. Techniques include immunohistochemistry, flow cytometry, and molecular assays to detect immune responses and biomarkers. Pathologists evaluate tissue and  {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         cellular immune mechanisms,
        </Link> guiding therapeutic interventions, monitoring treatment efficacy, and contributing to research in immunology, precision medicine, and innovative immune-targeted therapies.
      </>
    ),
  },

  {
    image: img12,
    title: "Digital Histopathology",
    description: (
      <>
Digital histopathology involves scanning tissue slides to create high-resolution images for analysis, storage, and sharing. It enables AI-assisted diagnostics, remote consultations, and education. Digital platforms improve efficiency, reproducibility, and accuracy while facilitating research and {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     telepathology.
        </Link>{" "}  Integration with computational tools allows quantitative assessment of tissue architecture, biomarker expression, and disease progression in modern pathology practice.
      
      </>
    ),
  },

  {
    image: img13,
    title: "Gynecologic Pathology",
    description: (
      <>
  Gynecologic pathology studies female reproductive system diseases, including cancers, infections, and hormonal disorders. Pathologists analyze tissues from the uterus, ovaries, cervix, and vulva using histology, immunohistochemistry, and molecular techniques. Accurate diagnosis informs clinical management, treatment planning, and prognosis. {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Gynecologic pathology 
        </Link> supports research, screening programs, and advancements in women’s healthcare and precision medicine approaches.
        
      </>
    ),
  },

  {
    image: img14,
    title: "Neuropathology",
    description: (
      <>
  Neuropathology focuses on diseases of the nervous system, including brain, spinal cord, and peripheral nerves. Pathologists evaluate tumors, degenerative disorders, infections, and trauma using histology, molecular studies, and imaging. Insights guide diagnosis, prognosis, and treatment. Neuropathology integrates clinical, laboratory, and research data to improve understanding of neurological conditions and enhance patient care globally. {" "}
        {/* <Link
          to="/digipath-conference-tracks/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         biofertilisers, biostimulants, and mycorrhizal
        </Link>  */}

        
      </>
    ),
  },

  {
    image:img15,
    title: "Soft Tissue Pathology",
    description: (
      <>
        {" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Foodborne Microbial 
        </Link> */}
Soft tissue pathology investigates tumors, infections, and inflammatory conditions affecting muscles, fat, connective tissue, and fascia. Histology, immunohistochemistry, and molecular analysis help differentiate benign and malignant lesions. Accurate diagnosis guides surgical, medical, and targeted therapies. This field enhances understanding of rare and complex soft tissue diseases, supporting clinical management, research, and precision treatment strategies.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Forensic Pathology",
    description: (
      <>
Forensic pathology determines cause and manner of death through autopsy, toxicology, and histological examination. Experts assess trauma, disease, and environmental factors in legal contexts. Forensic pathologists provide evidence for investigations, courts, and public health. Integration with molecular and {" "}
        <Link
          to= "/about-digipath-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
digital technologies
        </Link> improves accuracy, aiding criminal justice, accident analysis, and preventive measures in medico-legal and societal applications.
      </>
    ),
  },

  {
    image: img17,
    title: "Pharma & Biotech",
    description: (
      <>
      {" "}
        {/* <Link
          to="/digi-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Fermented Foods – Health Benefits & Innovation
        </Link>  */}
Pathology in pharma and biotech drives drug discovery, safety assessment, and therapeutic development. Pathologists evaluate tissue responses, toxicity, and molecular targets using preclinical and clinical studies. Integration with AI, biomarkers, and high-throughput techniques accelerates research. Insights support precision medicine, regulatory compliance, and innovative therapies, enabling efficient translation from bench to bedside in pharmaceutical development.
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Drug Development",
    description: (
      <>
    Pathology plays a critical role in {" "}
        <Link
          to="/digi-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         drug development 
        </Link> 
by assessing efficacy, safety, and mechanisms of action. Histopathology, molecular analysis, and biomarker studies guide preclinical and clinical trials. Pathologists identify adverse effects, optimize dosing, and evaluate therapeutic responses. Integration with computational tools accelerates discovery, supporting safe, effective, and personalized medicine in modern pharmacology.
      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "Nano-Pathology",
    description: (
      <>
    {" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nano-pathology
        </Link> applies nanotechnology to study disease mechanisms, tissue structures, and biomarker detection at molecular levels. Nanoparticles enhance imaging, targeted drug delivery, and diagnostic assays. Integration with digital and molecular pathology enables precise detection of cancer, infections, and other conditions. Nano-pathology advances research, therapeutics, and personalized medicine through innovative, ultra-sensitive approaches in modern pathology.
      </>
    ),
  },
  {
    image: img20,
    title: "3D Tissue Reconstruction",
    description: (
      <>
      This track focuses on {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
3D tissue reconstruction
        </Link>{" "} visualizes tissue architecture using imaging, computational modeling, and bioprinting. It provides spatial context for tumor microenvironments, organ structures, and cellular interactions. Integration with digital pathology and AI enhances research, diagnostics, and education. This technology supports regenerative medicine, precision therapy planning, and understanding complex pathophysiological processes in clinical and experimental settings.
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
