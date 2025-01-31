import { GhostBusterGif, ArduinoGif, PortfolioGif, CourseApp } from "./image"
export default [
    {
        title: 'Arduino LED Controller',
        imgUrl: ArduinoGif,
        stack: ['Arduino', 'Socket.IO', 'HTML', 'CSS', 'JS', 'Node.js', 'Express.js'],
        description: (
            <>
              A real-time IoT system using <strong className="text-yellow-300">Arduino</strong> and <strong className="text-yellow-300">Socket.IO</strong> to control LED lighting remotely using a <strong className="text-yellow-300">web-based interface</strong>.
            </>
          ),
        githubLink: 'https://github.com/MFA005/LEDController'
    },
    {
        title: 'GhostBuster Game',
        imgUrl: GhostBusterGif,
        stack: ['MonoGame', 'C#'],
        description: (
            <>
              A fun, interactive 2D game built with <strong className="text-yellow-300">MonoGame Framework</strong> and <strong className="text-yellow-300">C#</strong>, featuring smooth animations and dynamic gameplay.
            </>
          ),
        githubLink: 'https://github.com/MFA005/ghostbuster-game/tree/master/Final_Game'
    },
    {
        title: 'Course Management System',
        imgUrl: CourseApp,
        stack: ['ASP.NET Core', 'C#', 'HTML', 'CSS', 'Bootstrap', 'EF Core', 'SMTP', 'MS SQL Server'],
        description: (
            <>
               A web-based application developed using <strong className="text-yellow-300">ASP.NET Core</strong> and <strong className="text-yellow-300">MS SQL Server</strong>, designed to help students and instructors manage courses, assignments, and grading efficiently.            </>
          ),
        githubLink: 'https://github.com/MFA005/Course-Management-App/tree/master/Assignment2'
    },
    {
        title: 'Portfolio',
        imgUrl: PortfolioGif,
        stack: ['Vite', 'React', 'Tailwind', 'Rive','EmailJS'],
        description: (
            <>
                A personal portfolio website built with <strong className="text-yellow-300">React</strong> and <strong className="text-yellow-300">Tailwind CSS</strong>, showcasing projects, skills, and experience in a modern, responsive design.
            </>
        ),        githubLink: 'https://github.com/MFA005/Portfolio'
    },
]