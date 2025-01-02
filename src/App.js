import React, { useState } from "react";
import "./App.css";
import Quiz from "./Quiz.js";
import mapImage from "./map.png";
import mushroomImage from "./mushroom.webp"; // Νέα εικόνα για το power-up.

const App = () => {
  const [scenario, setScenario] = useState(1);
  const [instructions, setInstructions] = useState(
    "Πληκτρολόγησε τη λέξη 'πριγκίπισσα' στο searchbar."
  );
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const predefinedResults1 = [
    "Σημασία της λέξης 'πριγκίπισσα' - Λεξικό της Νέας Ελληνικής",
    "Πριγκίπισσα ή Πριγκήπισσα; - ΜάθεΟρθογραφία Τελεία Τζι Αρ",
    "Η πριγκίπισσα και ο βάτραχος - Δωρεάν Ταινίες Ονλάιν Υπότιτλοι ΕΛΛΗΝΙΚΆ",
    "ΖΕΙ Η ΠΡΙΓΚΙΠΙΣΣΑ ΝΤΑΙΑΝΑ;; - ΜόνοΑλήθειες",
  ];

  const elaborateResultsStep1 = [
    "Ο Μπάουζερ απήγαγε την Πριγκίπισσα Πιτς - Νέα του Μανιταρόκοσμου.",
    "Απαγωγή Πριγκίπισσας: Ο Μπάουζερ στο στόχαστρο.",
    "Πού πήγε διακοπές η Πιτς;",
    "Η καθημερινή ζωή της Πριγκίπισσας Πιτς",
  ];

  const elaborateResultsStep2 = [
    "Ο Μπάουζερ κρατάει την Πριγκίπισσα Πιτς στο κάστρο του.",
    "Μπάουζερ και Πιτς: Οι λεπτομέρειες της απαγωγής.",
    "Ο Μπάουζερ προκαλεί αναταραχές στο Μανιταρόκοσμο.",
    "Απαγωγή Πριγκίπισσας: Τι γνωρίζουμε για το κάστρο του Μπάουζερ.",
  ];

  const elaborateResultsStep3 = [
    "Κάστρο του Μπάουζερ: Πληροφορίες και τοποθεσία.",
    "Ταξιδέψτε στο Κάστρο του Μπάουζερ: Εισιτήρια και οδηγίες.",
    "Πανηγύρι έξω από το Κάστρο του Μπάουζερ.",
    "Ιστορία και θρύλοι του Κάστρου του Μπάουζερ.",
  ];

  const elaborateResultsMap = [
    "Χάρτης του Κάστρου του Μπάουζερ - Μανιταρόκοσμος GPS.",
  ];

  const powerUpResults = ["Power-Ups: Εξερεύνηση δυνάμεων στο Mushroom Kingdom"];

  const handleSearch = () => {
    let newResults = [];
    let newInstructions = instructions;

    if (scenario === 1) {
      if (query.toLowerCase() === "πριγκίπισσα") {
        newInstructions =
          "Ωχ... φαίνεται ότι κανένα από τα αποτελέσματα δεν είναι αυτό που θέλαμε. Προσπάθησε να ψάξεις: Πριγκίπισσα Πιτς.";
        newResults = predefinedResults1;
      } else if (query.toLowerCase() === "πριγκίπισσα πιτς") {
        newInstructions =
          "Ας κάνουμε την αναζήτηση πιο συγκεκριμένη. Ψάξε 'τοποθεσίες που μπορεί να βρίσκεται η Πριγκίπισσα Πιτς'.";
        newResults = [
          "Η Πριγκίπισσα Πιτς - Ιστορικό Σαιτ",
          "Get ready with Πριγκίπισσα Πιτς - Βίντεος Ελληνικά",
          "A day in my life (Πριγκίπισσα Πιτς) - Βίντεος Ελληνικά",
          "Τοπ 10 Πριγκίπισσες στο Mushroom Kingdom - Βίντεος Ελληνικά",
        ];
      } else if(query.toLowerCase() === "τοποθεσίες που μπορεί να βρίσκεται η πριγκίπισσα πιτς")
      {
      newInstructions = "Χμμ... κάτι δεν πάει καλά! Κανένα αποτέλεσμα δεν είναι αυτό που θέλουμε... Τι μπορούμε να κάνουμε σε αυτή την περίπτωση; Σκέψου και συζήτησε με την τάξη.";
      newResults = [
        "Που πήγε διακοπές η Πριγκίπισσα Πιτς το καλοκαίρι; - Ο αρθρογράφος",
        "Σε ποια νησιά πηγαίνουν διακοπές οι πριγκίπισσες; - Ο αρθρογράφος",
        "Δειτέ ΕΔΩ που μένει η Πριγκίπισσα Πιτς - Ο αθργρογράφος(?)",
        "Βλογκ από τις καλοκαιρινές διακοπές μου. (Πριγκίπισσα Πιτς) - Βίντεος Ελληνικά",
      ];
      }
    } else if (scenario === 2) {
      if (
        query.toLowerCase() ===
        "τοποθεσίες που μπορεί να βρίσκεται η πριγκίπισσα πιτς -διακοπές -μένει -βλογκ"
      ) {
        newInstructions =
          "Τέλεια βρήκαμε τα παρακάτω αποτελέσματα! Ας ψάξουμε τώρα για αποτελέσματα που περιέχουν τις λέξεις Μπάουζερ και Πιτς.";
        newResults = elaborateResultsStep1;
      } else if (query.toLowerCase() === "μπάουζερ and πιτς") {
        newInstructions =
          "Βρήκαμε πού την κρατάει! Ψάξε για πληροφορίες για το 'Κάστρο του Μπάουζερ'.";
        newResults = elaborateResultsStep2;
      } else if (query.toLowerCase() === 'κάστρο του μπάουζερ') {
        newInstructions =
          "Θυμήσου πώς αναζητάμε για ακριβείς φράσεις. Θέλουμε ακριβώς την φράση 'Κάστρο του Μπάουζερ'";
        newResults = [
          "Κάστρα στο Mushroom Kingdom",
          "Ο Μπάουζερ επισκέφτεται κάστρο στη Μεσσηνία",
          "Ο Μπάουζερ μιλάει για τα αγαπημένα του κάστρα",
          "Ο Μπάουζερ και η καινούρια του αγορά (Ναι, ήταν κάστρο)",
        ];
      } else if (query.toLowerCase() === '"κάστρο του μπάουζερ"') {
        newInstructions =
          "Ψάξε έναν χάρτη για το 'Κάστρο του Μπάουζερ' με τη χρήση της λέξης AND μαζί με το 'χάρτης'.";
        newResults = elaborateResultsStep3;
      } else if (query.toLowerCase() === '"κάστρο του μπάουζερ" and χάρτης') {
        newInstructions =
          "Χμμ… Βρήκαμε μια ιστοσελίδα με έναν χάρτη. Ας την πατήσουμε και ας την αποθηκεύσουμε ως σελιδοδείκτη!'.";
        newResults = elaborateResultsMap;
      }
      else if (query.toLowerCase() === "power-ups") {
        newInstructions = "Επισκέψου την ιστοσελίδα.";
        newResults = powerUpResults;
        setSelectedResult(null);
        setIsBookmarked(false);
      } else if (query.toLowerCase() === "ready") {
        handleScenarioChange(3);
      }
    }

    setInstructions(newInstructions);
    setResults(newResults);
    setHistory((prevHistory) => [...prevHistory, { instructions, results }]);
  };

  const handleResultClick = (result) => {
    if (result === "Χάρτης του Κάστρου του Μπάουζερ - Μανιταρόκοσμος GPS.") {
      setSelectedResult("map");
      setInstructions(
        "Χμμ… Βρήκαμε μια ιστοσελίδα με έναν χάρτη. Ας την πατήσουμε και ας την αποθηκεύσουμε ως σελιδοδείκτη!"
      );
    } else if (
      result === "Power-Ups: Εξερεύνηση δυνάμεων στο Mushroom Kingdom"
    ) {
      setSelectedResult("power-up");
      setInstructions(
        "Αποθήκευσε την φωτογραφία στο desktop του υπολογιστή σου και έπειτα αναζήτησε στο search bar την λέξη 'ready'."
      );
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(true);
    setInstructions("Τώρα αναζήτησε την λέξη power-ups");
  };

  const handleScenarioChange = (newScenario) => {
    if (newScenario === 3 && scenario !== 3) {
      setIsQuizActive(true); // Start the quiz
    }
    setScenario(newScenario);
    setResults([]);
    setSelectedResult(null);
    setIsBookmarked(false);
    if (newScenario === 1) {
      setInstructions("Πληκτρολόγησε τη λέξη 'πριγκίπισσα' στο searchbar.");
    } else if (newScenario === 2) {
      setInstructions(
        "Ψάξε ξανά 'τοποθεσίες που μπορεί να βρίσκεται η Πριγκίπισσα Πιτς' απλά αυτή τη φορά παράλειψε τα αποτελέσματα που περιέχουν τις λέξεις διακοπές, μένει και βλογκ."
      );
    } else if (newScenario === 3) {
      setInstructions("Game cleared.");
    }
  };
  
  const handleRefresh = () => {
    handleScenarioChange(scenario);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setInstructions(previous.instructions);
      setResults(previous.results);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };
    const [isQuizActive, setIsQuizActive] = useState(false);

  
    const handleQuizFinish = (success) => {
      setIsQuizActive(false);
      if (success) {
        alert("Congratulations! You passed the quiz!");
      } else {
        alert("Try again!");
      }
  };

  return (
    <div className="browser">
      {isQuizActive ? (
        <Quiz onFinish={handleQuizFinish} />
      ) : (
        <>
          {/* Header */}
          <div className="tabs">
            <button onClick={() => handleScenarioChange(1)}>1</button>
            <button onClick={() => handleScenarioChange(2)}>2</button>
            <button onClick={() => handleScenarioChange(3)}>3</button>
          </div>
  
          {/* Navigation Bar */}
          <div className="nav-bar">
            <button onClick={handleBack}>Back</button>
            <button>Forward</button>
            <button onClick={handleRefresh}>Refresh</button>
            <input
              type="text"
              placeholder="Type your search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
  
          {/* Main Content */}
          <div className="content">
            <div className="instructions">
              <h3>{instructions}</h3>
            </div>
            <div className="results">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="result-item"
                  onClick={() => handleResultClick(result)}
                >
                  {result}
                </div>
              ))}
            </div>
          </div>
  
          {/* Selected Result Details */}
          {selectedResult === "power-up" && (
            <div className="selected-result">
              <div className="bookmark">
                <button onClick={handleBookmark}>
                  {isBookmarked ? "Bookmarked" : "⭐ Bookmark"}
                </button>
              </div>
              <div className="result-image">
                <img src={mushroomImage} alt="Power-Up visualization" />
              </div>
            </div>
          )}
  
          {selectedResult === "map" && (
            <div className="selected-result">
              <div className="bookmark">
                <button onClick={handleBookmark}>
                  {isBookmarked ? "Bookmarked" : "⭐ Bookmark"}
                </button>
              </div>
              <div className="result-image">
                <img src={mapImage} alt="Result visualization" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
  
}
export default App;
