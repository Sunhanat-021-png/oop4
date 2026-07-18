class Student {
    name: string;
    id: number;
    scores: number[];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.scores = [];
    }

    addScore(score: number): void {
        this.scores.push(score);
    }

    getAverage(): number {
        if (this.scores.length === 0) {
            return 0;
        }

        let sum = 0;

        for (let score of this.scores) {
            sum += score;
        }

        return sum / this.scores.length;
    }
}

// Test
const student = new Student("John", 101);

student.addScore(80);
student.addScore(90);
student.addScore(100);

console.log("Name:", student.name);
console.log("ID:", student.id);
console.log("Scores:", student.scores);
console.log("Average:", student.getAverage());