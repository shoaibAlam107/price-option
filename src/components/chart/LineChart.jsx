import { LineChart as LChart, Line , XAxis ,YAxis } from 'recharts';

const LineChart = () => {
    const marks  =[
        {"name": "Student 1", "math": 85, "english": 78, "bangla": 90},
        {"name": "Student 2", "math": 92, "english": 80, "bangla": 88},
        {"name": "Student 3", "math": 75, "english": 85, "bangla": 82},
        {"name": "Student 4", "math": 88, "english": 76, "bangla": 85},
        {"name": "Student 5", "math": 80, "english": 82, "bangla": 87},
        {"name": "Student 6", "math": 78, "english": 79, "bangla": 80},
        {"name": "Student 7", "math": 90, "english": 88, "bangla": 89},
        {"name": "Student 8", "math": 83, "english": 84, "bangla": 92},
        {"name": "Student 9", "math": 76, "english": 77, "bangla": 78},
        {"name": "Student 10", "math": 89, "english": 90, "bangla": 91}
    ]
    
    return (
        <div>
            <LChart width={800} height={400} data={marks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='black'></Line>
                <Line dataKey="bangla" stroke='green'></Line>
                <Line dataKey="english" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;