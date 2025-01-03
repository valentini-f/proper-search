import React, { useState } from "react";
import "./Quiz.css"; // Add custom styles for the quiz if needed

const questions = [
    {
      question: "Ποια είναι η βασική χρήση μιας μηχανής αναζήτησης;",
      options: [
        "Να αποθηκεύει δεδομένα",
        "Να βρίσκει πληροφορίες από το διαδίκτυο",
        "Να δημιουργεί ιστοσελίδες",
        "Να ελέγχει τον υπολογιστή",
      ],
      correct: 1,
    },
    {
      question: "Ποιο από τα παρακάτω αποτελεί παράδειγμα λέξης-κλειδιού;",
      options: [
        "Ένα ολόκληρο άρθρο",
        "Μία σύντομη φράση που περιγράφει το θέμα",
        "Μία τυχαία λέξη",
        "Ένας σύνδεσμος",
      ],
      correct: 1,
    },
    {
      question: "Τι σημαίνουν τα εισαγωγικά (\" \") σε μια αναζήτηση;",
      options: [
        "Εξαιρούν λέξεις",
        "Κάνουν την αναζήτηση πιο γενική",
        "Εντοπίζουν ακριβώς τη φράση όπως είναι γραμμένη",
        "Δεν έχουν καμία χρήση",
      ],
      correct: 2,
    },
    {
      question: "Αν θέλεις να βρεις πληροφορίες για τον σκύλο και τη γάτα, ποια από τις παρακάτω αναζητήσεις είναι πιο κατάλληλη;",
      options: [
        "σκύλος γάτα",
        "σκύλος AND γάτα",
        "σκύλος OR γάτα",
        "\"σκύλος γάτα\"",
      ],
      correct: 1,
    },
    {
      question: "Ποια είναι η διαφορά μεταξύ \"σκύλος γάτα\" και σκύλος γάτα;",
      options: [
        "Το πρώτο βρίσκει ακριβώς τη φράση, ενώ το δεύτερο λέξεις ανεξάρτητα",
        "Δεν υπάρχει διαφορά",
        "Το πρώτο είναι πιο γρήγορο",
        "Το δεύτερο βρίσκει ακριβώς τη φράση",
      ],
      correct: 0,
    },
    {
      question: "Πώς χρησιμοποιείται το σύμβολο \"-\" σε μια αναζήτηση;",
      options: [
        "Για να προσθέσεις περισσότερες λέξεις",
        "Για να περιορίσεις την αναζήτηση σε αριθμούς",
        "Για να κάνεις τη φράση πιο σύντομη",
        "Για να εξαιρέσεις μια λέξη από τα αποτελέσματα",
      ],
      correct: 3,
    },
    {
      question: "Αν θέλεις να βρεις πληροφορίες για πίτσες εκτός από την πίτσα Μαργαρίτα, τι πρέπει να γράψεις;",
      options: [
        "πίτσα Μαργαρίτα",
        "πίτσα -Μαργαρίτα",
        "\"πίτσα Μαργαρίτα\"",
        "πίτσα OR Μαργαρίτα",
      ],
      correct: 1,
    },
    {
      question: "Ποια είναι η χρήση του OR στις αναζητήσεις;",
      options: [
        "Ενώνει λέξεις",
        "Εξαιρεί αποτελέσματα",
        "Δίνει αποτελέσματα που περιέχουν μία από τις λέξεις",
        "Δεν έχει καμία χρήση",
      ],
      correct: 2,
    },
    {
      question: "Ποια είναι η πιο αποτελεσματική αναζήτηση για να βρεις πληροφορίες για αρχαία ελληνική τέχνη και αρχαία ελληνική φιλοσοφία;",
      options: [
        "αρχαία ελληνική τέχνη φιλοσοφία",
        "\"αρχαία ελληνική τέχνη\" AND \"αρχαία ελληνική φιλοσοφία\"",
        "αρχαία ελληνική τέχνη OR φιλοσοφία",
        "αρχαία ελληνική",
      ],
      correct: 1,
    },
    {
      question: "Αν γράψεις \"τα καλύτερα βιβλία για παιδιά\", ποια θα είναι τα αποτελέσματα;",
      options: [
        "Σελίδες που περιέχουν μόνο τη φράση \"τα καλύτερα βιβλία για παιδιά\"",
        "Σελίδες με οποιοδήποτε από τα λόγια της φράσης",
        "Σελίδες για βιβλία γενικά",
        "Σελίδες με λέξεις-κλειδιά που σχετίζονται με βιβλία",
      ],
      correct: 0,
    },
    {
      question: "Πώς μπορείς να βρεις εικόνες για έναν συγκεκριμένο όρο;",
      options: [
        "Χρησιμοποιώντας το φίλτρο εικόνες στη μηχανή αναζήτησης",
        "Χρησιμοποιώντας μόνο λέξεις-κλειδιά",
        "Γράφοντας \"εικόνες\" στην αναζήτηση",
        "Δεν μπορείς να βρεις εικόνες με μηχανές αναζήτησης",
      ],
      correct: 0,
    },
    {
      question: "Πώς μπορείς να περιορίσεις τα αποτελέσματα μιας αναζήτησης σε συγκεκριμένη γλώσσα;",
      options: [
        "Γράφοντας τη γλώσσα στην αναζήτηση",
        "Δεν μπορείς να περιορίσεις τα αποτελέσματα",
        "Χρησιμοποιώντας φίλτρα γλώσσας",
        "Γράφοντας με κεφαλαία γράμματα",
      ],
      correct: 2,
    },
    {
      question: "Ποια από τις παρακάτω αναζητήσεις είναι η πιο αποδοτική;",
      options: [
        "αγορά κινητού καλό φθηνό",
        "\"αγορά κινητού\" AND καλό AND φθηνό",
        "αγορά κινητού AND OR καλό φθηνό",
        "αγορά κινητού",
      ],
      correct: 1,
    },
    {
      question: "Τι κάνει το φίλτρο \"χρονικό διάστημα\" στη μηχανή αναζήτησης;",
      options: [
        "Φιλτράρει τα αποτελέσματα ανά ημερομηνία δημοσίευσης",
        "Αλλάζει τη γλώσσα",
        "Εμφανίζει μόνο τα πιο δημοφιλή αποτελέσματα",
        "Εξαιρεί παλαιότερα άρθρα",
      ],
      correct: 0,
    },
    {
      question: "Ποια είναι η σημασία των λέξεων-κλειδιών στην αναζήτηση;",
      options: [
        "Βοηθούν να εντοπίσουμε πιο ακριβείς πληροφορίες",
        "Δημιουργούν περισσότερα αποτελέσματα",
        "Κάνουν την αναζήτηση πιο αργή",
        "Δεν έχουν ιδιαίτερη σημασία",
      ],
      correct: 0,
    },
    {
      question: "Αν θέλεις να βρεις άρθρα για το διάστημα αλλά όχι για αστρονομία, ποια είναι η κατάλληλη αναζήτηση;",
      options: [
        "διάστημα AND αστρονομία",
        "διάστημα OR αστρονομία",
        "\"διάστημα αστρονομία\"",
        "διάστημα -αστρονομία",
      ],
      correct: 3,
    },
    {
      question: "Πώς μπορείς να περιορίσεις την αναζήτησή σου σε έναν συγκεκριμένο ιστότοπο;",
      options: [
        "Γράφοντας το όνομα του ιστότοπου μαζί με τη λέξη-κλειδί",
        "Χρησιμοποιώντας τη λέξη \"site:\" και το όνομα του ιστότοπου",
        "Δεν μπορείς να περιορίσεις σε συγκεκριμένο ιστότοπο",
        "Γράφοντας μόνο τη λέξη-κλειδί",
      ],
      correct: 1,
    },
    {
      question: "Ποια είναι η σωστή αναζήτηση για να βρεις αρχεία PDF για φυσική;",
      options: [
        "φυσική filetype:PDF",
        "φυσική .PDF",
        "\"φυσική PDF\"",
        "φυσική AND PDF",
      ],
      correct: 0,
    },
    {
      question: "Πώς μπορείς να βρεις ειδήσεις για ένα θέμα μόνο από την τελευταία εβδομάδα;",
      options: [
        "Γράφοντας \"τελευταία εβδομάδα\"",
        "Χρησιμοποιώντας το φίλτρο ημερομηνίας",
        "Δεν μπορείς να το κάνεις",
        "Χρησιμοποιώντας εισαγωγικά",
      ],
      correct: 1,
    },
    {
      question: "Ποια από τις παρακάτω τεχνικές αναζήτησης είναι η πιο αποδοτική για σύνθετα θέματα;",
      options: [
        "Γραφή μεγάλων παραγράφων",
        "Γράφοντας το θέμα όπως σκέφτεσαι",
        "Χρήση λέξεων-κλειδιών, φίλτρων και συμβόλων",
        "Αντιγραφή και επικόλληση από άλλες ιστοσελίδες",
      ],
      correct: 2,
    },
  ];

const Quiz = ({ onFinish, onBackToSearch }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    const isCorrect = index === questions[currentQuestionIndex].correct;
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        alert("Game Over! Try again.");
        onFinish(false);
        return;
      }
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Completed! Your score is ${score + (isCorrect ? 1 : 0)}.`);
      onFinish(true);
    }
  };

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <h2>Απάντα σωστά τις ερωτήσεις για να βοηθήσεις τον Μάριο να σώσει την Πριγκίπισσα!</h2>
      </div>

      {/* Question Details */}
      <div className="quiz-header">
        <h3>Ερώτηση {currentQuestionIndex + 1}/{questions.length}</h3>
        <div className="quiz-lives">
          Ζωές: {lives} ❤️
        </div>
      </div>

      {/* Quiz Question */}
      <div className="quiz-question">
        <h4>{questions[currentQuestionIndex].question}</h4>
      </div>

      {/* Quiz Options */}
      <div className="quiz-options">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(index)}>
            {option}
          </button>
        ))}
      </div>

      {/* Quiz Progress */}
      <div className="quiz-progress">
        Πρόοδος: {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
      </div>
    </div>
  );
};

export default Quiz;
