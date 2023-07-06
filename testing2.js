function sortStudents(students) {
  students.sort((a, b) => {
    // 1. Sort by total marks in descending order
    if (a.biology + a.chemistry !== b.biology + b.chemistry) {
      return (b.biology + b.chemistry) - (a.biology + a.chemistry);
    }
    
    // 2. Sort by biology marks in descending order
    if (a.biology !== b.biology) {
      return b.biology - a.biology;
    }
    
    // 3. No tiebreaker required if total marks and biology marks are equal
    
    // 4. Sort by date of birth (considering the format as "DD-MM-YYYY")
    const [dayA, monthA, yearA] = a.dob.split("-").map(Number);
    const [dayB, monthB, yearB] = b.dob.split("-").map(Number);
    
    if (yearA !== yearB) {
      return yearA - yearB;
    }
    
    if (monthA !== monthB) {
      return monthA - monthB;
    }
    
    return dayA - dayB;
  });

  return students.map((student) => student.name);
}

let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

console.log(sortStudents(testCase1));

// Test case 2
let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

console.log(sortStudents(testCase2));
