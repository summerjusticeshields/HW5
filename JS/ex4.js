const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
  
  ];

const newStudentList = studentList.map(student => {
    const newScores = student.scores.map(score => score + 5);
    return {
      firstName: student.firstName,
      lastName: student.lastName,
      scores: newScores
    };
  });

  const LastNameResults = studentList
  .map(student => {
    const minScore = Math.min(...student.scores);
    const maxScore = Math.max(...student.scores);
    const avgScore = student.scores.reduce((total, score) => total + score) / student.scores.length;
    return {
      firstName: student.firstName,
      lastName: student.lastName,
      minScore: minScore,
      maxScore: maxScore,
      avgScore: avgScore
    };
  });
  
  console.log(newStudentList);