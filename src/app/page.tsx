import Image from 'next/image';
import logo from '../../public/HP.png';

const ReportCard = () => {
  const students = [
    { id: 1, name: "Shahriyar Hosen", enrollmentId: "LWSCTXN-8TE05FZE", marks: [
        { exam: "137 Quizzes", totalMarks: 685, obtainedMarks: 585 },
        { exam: "9 Assignments", totalMarks: 810, obtainedMarks: 810 },
        { exam: "Final Exam (objective)", totalMarks: 100, obtainedMarks: 95 },
        { exam: "Final Exam (subjective)", totalMarks: 300, obtainedMarks: 0 }
      ]
    },
  ];

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  };

  return (
    <div className="max-w-[550px] mx-auto p-6 mt-6 bg-teal-50 shadow-lg rounded-lg border-4 border-teal-600 relative">
      <div className="absolute top-32 left-5 flex items-center justify-center opacity-[0.04] z-[1]">
        <Image src={logo} alt="Logo" className="object-contain" />
      </div>

      <div className="text-center border-b-2 border-gray-300 pb-4">
        <Image src={logo} alt="Logo" className="mx-auto w-16 h-16" />
        <h1 className="text-2xl font-bold text-teal-600">Hablu Programmer</h1>
        <h2 className="text-xl font-semibold text-gray-700">Marksheet Report</h2>
        <p className="text-gray-600">Batch: Two</p>
      </div>

      {students.map((student) => {
        const totalMarks = student.marks.reduce((acc, exam) => acc + exam.totalMarks, 0);
        const obtainedMarks = student.marks.reduce((acc, exam) => acc + exam.obtainedMarks, 0);
        const averagePercentage = ((obtainedMarks / totalMarks) * 100).toFixed(1);
        const overallGrade = getGrade(parseFloat(averagePercentage));

        return (
          <div key={student.id} className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
            <p className="text-lg"><span className='font-semibold'>Name of Candidate:</span> {student.name}</p>
            <p className="text-neutral-800"><span className='font-semibold'>Enrollment ID:</span> {student.enrollmentId}</p>
            <p className="text-neutral-800"><span className='font-semibold'>Course:</span> Front-End Development</p>

            <table className="w-full mt-4 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-200">
                  <th className="border p-1.5">Exam Type</th>
                  <th className="border p-1.5">Total Marks</th>
                  <th className="border p-1.5">Obtained Marks</th>
                  <th className="border p-1.5">Grade</th>
                </tr>
              </thead>
              <tbody>
                {student.marks.map((exam, index) => {
                  const percentage = (exam.obtainedMarks / exam.totalMarks) * 100;
                  return (
                    <tr className="text-center" key={index}>
                      <td className="border p-1.5">{exam.exam}</td>
                      <td className="border p-1.5">{exam.totalMarks}</td>
                      <td className="border p-1.5">{exam.obtainedMarks}</td>
                      <td className="border p-1.5 font-semibold">{getGrade(percentage)}</td>
                    </tr>
                  );
                })}

                <tr className="text-center font-bold bg-teal-100">
                  <td className="border p-2" >Total</td>
                  <td className="border p-2">{totalMarks}</td>
                  <td className="border p-2">{obtainedMarks}</td>
                  <td className="border p-2">{overallGrade}</td>
                </tr>
                <tr>
                    <td colSpan={4} className="text-center text-sm p-1.5 text-gray-600">
                    Overall Average Marks: {averagePercentage}%
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default ReportCard; 
